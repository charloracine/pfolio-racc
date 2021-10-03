export const GestCinema = `
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Experimental.Rendering.Universal;

/// <summary>
/// Un gestionnaire de cinema, editeur personnalise pour faciliter l'integation
/// Auteurs du code: Charles-Olivier Racine
/// Auteur des commentaires: Charles-Olivier Racine
/// </summary>
public class GestCinema : MonoBehaviour
{
    [HideInInspector] [SerializeField] private GameObject _imgAffichage; //Le gameObject à changer son image
    [HideInInspector] [SerializeField] private Navigateur _navig; //Le navigateur pour naviguer entre les scènes
    [SerializeField] private Sprite[] _images; //Les images de la cinématique, à ajouter dans l'inspecteur
    [Header("DELAI APRÈS TRANSITION, ENTRE LES IMAGES À AJOUTER ICI \u25BC")] //Header
    [SerializeField] private float _delaiEntreImages = 1f; //Voir header ci haut
    [Header("TEMPS DE TRANSITION À AJOUTER ICI \u25BC")] //Header
    [SerializeField] private float _temps; //Voir header ci haut
    [HideInInspector] [SerializeField] private List<Vector2> _posDep; //Lieux d'enregistrement des positions de départ de toutes les diapos 
    [HideInInspector] [SerializeField] private List<Vector2> _posFin; //Lieux d'enregistrement des positions de fin de toutes les diapos 
    [HideInInspector] [SerializeField] private List<Vector2> _scaleDep; //Lieux d'enregistrement des scales de départ de toutes les diapos 
    [HideInInspector] [SerializeField] private List<Vector2> _scaleFin; //Lieux d'enregistrement des scales de fin de toutes les diapos 
    [HideInInspector] [SerializeField] private List<float> _tempsDeTransition; //Lieux d'enregistrement des temps de transition de toutes les diapos 

    private GestSonCine _gestSon;
    private GestLumiere _gestLum;

    private SpriteRenderer _sr; //Le spriteRenderer de l'image à modifier
    private int _i = 0; //indice de la diapo à laquelle nous sommes rendu dans le mode PLAY
    private bool _peutPasser = true; //savoir si l'usager peut passer la diapo à laquelle il se trouve (pour éviter un lag par le spam)
    private int _numDiapo = 0; //indice de la diapo à laquelle l'éditeur se trouve, dans le mode EDITEUR (pas play)

    //Début donner accès aux variables aux constructeurs et autres gestionnaires (lumière/son)
    public int numDiapo { get => _numDiapo; set => _numDiapo = value; }
    public List<Vector2> posDep { get => _posDep; set => _posDep = value; }
    public List<Vector2> scaleDep { get => _scaleDep; set => _scaleDep = value; }
    public List<Vector2> posFin { get => _posFin; set => _posFin = value; }
    public List<Vector2> scaleFin { get => _scaleFin; set => _scaleFin = value; }
    public List<float> tempsDeTransition { get => _tempsDeTransition; set => _tempsDeTransition = value; }
    public int i { get => _i; set => _i = value; }
    public GameObject imgAffichage { get => _imgAffichage; set => _imgAffichage = value; }
    public float delaiEntreImages { get => _delaiEntreImages; set => _delaiEntreImages = value; }
    public Sprite[] images { get => _images; set => _images = value; }
    public bool peutPasser { get => _peutPasser; set => _peutPasser = value; }
    //fin accès

    /// <summary>
    /// Start is called on the frame when a script is enabled just before
    /// any of the Update methods is called the first time.
    /// </summary>
    void Start()
    {
        _sr = imgAffichage.GetComponent<SpriteRenderer>(); //Aller chercher le SpriteRenderer de l'image à modifier
        StartCoroutine(CoroutineCinema()); //Début de la cinématique
        _gestSon = GetComponent<GestSonCine>();
        _gestLum = GetComponent<GestLumiere>();
    }

    /// <summary>
    /// La coroutine de cinéma qui parcours les diapos selon les informations enregistrés dans leur mémoire (les listes)
    /// </summary>
    private IEnumerator CoroutineCinema()
    {
        while (i < images.Length) //Tant que l'indice à parcourir n'est pas arrivé à la dernière diapo
        {
            peutPasser = true; //On redonne le droit de passer la diapo
            float tempsAct = 0; //Initialise le tempsAct pour le Lerp
            ChangerPosEtSprite(); //Afficher les positions de départ et l'image currente
            yield return new WaitForFixedUpdate(); //FixedUpdate
            while (Vector2.Distance(imgAffichage.transform.position, posFin[i]) > 0) //Tant que l'animation de transition n'est pas terminé
            {
                tempsAct += Time.deltaTime; //Incrémentation du tempsAct
                Vector2 nouvPos = Vector2.Lerp(posDep[i], posFin[i], tempsAct / tempsDeTransition[i]); //Calcul de la nouvelle position
                Vector2 nouvScale = Vector2.Lerp(scaleDep[i], scaleFin[i], tempsAct / tempsDeTransition[i]); //Calcul du nouveau scale
                imgAffichage.transform.localScale = nouvScale; //Update de la scale
                imgAffichage.transform.position = nouvPos; //Update de la position
                yield return new WaitForFixedUpdate(); //FixedUpdate
            }
            i++; //On passe à la prochaine diapo
            yield return new WaitForSeconds(delaiEntreImages); //On attend le temps prévu entre chaques images
        }
        TerminerCine(); //La cinématique est terminée
        StopAllCoroutines(); //On arrête la coroutine du cinéma
        yield return null; //C'est fini!
    }

    /// <summary>
    /// On s'assure enconre que les coroutines sont arrêter et on passe à la scène suivante
    /// </summary>
    public void TerminerCine()
    {
        StopAllCoroutines();
        _navig.AllerSceneSuivante(); //Scène suivante
    }

    /// <summary>
    /// Fonction pour passer la diapo actuelle, elle place l'image à sa position et scale de fin, donc la boucle while est terminée
    /// </summary>
    public void PasserLaDiapo()
    {
        if (peutPasser) //Si le joueur à le droit de passer
        {
            _gestLum.PasserLaDiapo();
            _gestSon.PasserLaDiapo();
            imgAffichage.transform.position = posFin[i]; //Placer l'image à sa position de fin
            imgAffichage.transform.localScale = scaleFin[i]; //Placer l'image à sa scale de fin
            peutPasser = false; //On lui enlève le droit pour éviter un lag causer par le spam
        }
    }

    /// <summary>
    /// Fonction qui initialise les valeurs par défaut de la diapositive
    /// </summary>
    private void ChangerPosEtSprite()
    {
        imgAffichage.transform.position = posDep[i]; //Update à la position de départ
        _sr.sprite = images[i]; //Update pour afficher la bonne image
        imgAffichage.transform.localScale = scaleDep[i]; //Update à la scale de départ
    }

    //Début des fonctions appelées par le ConstructeurCinematique

    /// <summary>
    /// Enregistre les valeurs de l'éditeur dans les listes de mémoire
    /// Vector2 position de départ et Vector2 scale de départ
    /// </summary>
    public void AjouterDepart()
    { //numDiapo est un indice de navigation, il s'agit de la diapo affiché dans l'éditeur (contrôlé par le constructeurCinématique)
        posDep[numDiapo] = imgAffichage.transform.position; //Enregistrer la position de départ
        scaleDep[numDiapo] = imgAffichage.transform.localScale; //Enregistrer la scale de départ
        Debug.Log("<color=green>Position de départ ajoutée pour la diapositive numéro " + (numDiapo + 1) + "</color>"); //DebugLog de confirmation
    }

    /// <summary>
    /// Enregistre les valeurs de l'éditeur dans les listes de mémoire
    /// Vector2 position de fin et Vector2 scale de fin
    /// </summary>
    public void AjouterFin()
    {
        posFin[numDiapo] = imgAffichage.transform.position; //Enregistrer la position de fin
        scaleFin[numDiapo] = imgAffichage.transform.localScale; //Enregistrer la scale de fin
        Debug.Log("<color=green>Position de fin ajoutée pour la diapositive numéro " + (numDiapo + 1) + "</color>");
    }

    /// <summary>
    /// Enregistre les valeurs de l'éditeur dans les listes de mémoire
    /// Temps de transition (le temps que l'image prend pour passer de posDépart à posFin (et donc le scale aussi))
    /// </summary>
    public void AjouterTemps()
    {
        tempsDeTransition[numDiapo] = _temps; //Enregistrer le temps
        Debug.Log("<color=green>Temps de transition ajouté pour la diapositive numéro " + (numDiapo + 1) + "</color>");
    }

    /// <summary>
    /// Afficher les valeurs de départ enregistrer pour la diapo, dans l'éditeur
    /// Position de départ et Scale de départ
    /// </summary>
    public void AfficherPosScaleDepart()
    {
        imgAffichage.GetComponent<Transform>().position = posDep[numDiapo];
        imgAffichage.GetComponent<Transform>().localScale = scaleDep[numDiapo];
        if (GetComponent<GestLumiere>() != null) transform.GetComponent<GestLumiere>().AfficherPosIntenDep();
    }

    /// <summary>
    /// Afficher les valeurs de fin enregistrer pour la diapo, dans l'éditeur
    /// Position de départ et Scale de départ
    /// </summary>
    public void AfficherPosScaleFin()
    {
        imgAffichage.GetComponent<Transform>().position = posFin[numDiapo];
        imgAffichage.GetComponent<Transform>().localScale = scaleFin[numDiapo];
        if (GetComponent<GestLumiere>() != null) transform.GetComponent<GestLumiere>().AfficherPosIntenFin();
    }

    /// <summary>
    /// Afficher la prochaine diapositive dans l'éditeur
    /// </summary>
    public void AfficherProchaineDiapo()
    {
        if (numDiapo < images.Length - 1) //tant que l'indice de diapo de l'éditeur n'est pas arrivé à la fin du tableau des images
        {
            AjouterValeurDefaut(); //Ajoute des valeurs par défaut dans les listes mémoires
            numDiapo++; //Incrémenter l'indice de diapo dans l'éditeur
            imgAffichage.GetComponent<SpriteRenderer>().sprite = images[numDiapo]; //Afficher la bonne image
            Debug.Log("Diapo " + (numDiapo + 1)); //DebugLog confirmation du numéro de la diapo
        }
        else Debug.Log("<color=red>Ajouter d'autres diapositives?</color>"); //DebugLog quand on arrive a la fin du tableau d'image
    }

    /// <summary>
    /// Afficher la diapositive précédente dans l'éditeur
    /// </summary>
    public void AfficherPrecedenteDiapo()
    {
        if (numDiapo > 0) //On ne veut pas que numDiapo puisse aller en dessous de 0
        {
            numDiapo--; //Décrémenter l'indice de diapo dans l'éditeur
            imgAffichage.GetComponent<SpriteRenderer>().sprite = images[numDiapo]; //Afficher la bonne image
            Debug.Log("Diapo " + (numDiapo + 1)); //DebugLog confirmation du numéro de la diapo
        }
    }

    /// <summary>
    /// Fonction qui ajoute des valeurs par défaut dans la mémore des diapos lorsqu'elles sont ajoutés et parcourue dans l'éditeur pour 
    /// la première fois
    /// </summary>
    public void AjouterValeurDefaut()
    {
        if (posDep.Count < images.Length) //On s'assure de ne pas pouvoir créer par exemple 16 données de position de départ si nous avons que 15 images
        {
            posDep.Add(Vector2.zero); //Ajoute un vector2 0,0 comme position de départ
            posFin.Add(Vector2.one); //Ajoute un vector2 1,1 comme position de fin
            scaleDep.Add(Vector2.one); //Ajoute un vector 2 1,1 comme sclae de départ
            scaleFin.Add(Vector2.one); //et de fin
            tempsDeTransition.Add(3); //Ajoute une temps de tranbsition de 3f par défaut
            //Ajoute des valeurs par défaut pour la lumière si un gestionnaire de lumière est utilisé
            if (GetComponent<GestLumiere>() != null) transform.GetComponent<GestLumiere>().AjouterVectorZero();
            //Ajoute des valeurs par défaut pour les AudioClips si un gestionnaire de son est utilisé
            if (GetComponent<GestSonCine>() != null) transform.GetComponent<GestSonCine>().AjouterValeurZero();
        }
    }

    /// <summary>
    /// Fonction qui reset les valeurs enregistrer dans les listes, non-undoable
    /// </summary>
    public void ResetDonnees()
    {
        //Reset aussi les données de la lumière si un gestionnaire de lumière est utilisé
        if (GetComponent<GestLumiere>() != null) transform.GetComponent<GestLumiere>().ResetDonnees();
        //Reset aussi les données des AudioClips si un gestionnaire de son est utilisé
        if (GetComponent<GestSonCine>() != null) transform.GetComponent<GestSonCine>().ResetDonnees();
        posDep.Clear(); //Efface la liste posDep
        scaleDep.Clear(); //Efface la liste scaleDep
        posFin.Clear(); //Efface la liste posFin
        scaleFin.Clear(); //Efface la liste scaleFin
        tempsDeTransition.Clear(); //Efface la liste tempsDeTransition
        imgAffichage.GetComponent<SpriteRenderer>().sprite = images[0]; //Affiche la premiere image du tableau d'image
        numDiapo = 0; //L'indice de diapo de l'éditeur remis à 0
        AjouterValeurDefaut(); //Ajoute des valeurs par défaut pour la première image
        Debug.Log("<color=red>Les données ont étées supprimées</color>"); //DebugLog de confirmation
    }

}

    `;
