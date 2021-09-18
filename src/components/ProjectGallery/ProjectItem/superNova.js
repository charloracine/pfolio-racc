const Script =
`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IslandGenerator : MonoBehaviour
{
    [Header("Options de la génération d'île")]
    [Tooltip("false = carre, true = rond")]
    [SerializeField] private bool ileRonde = false; //Avoir une île ronde ou carré
    [SerializeField] private int largeurIle = 10; //Largeur de l'île (1 = 1 cube)
    [SerializeField] private int profondeurIle = 10; //Profondeur de l'île (1 = 1 cube)
    [SerializeField] private bool offsetAleatoire = false; //Si on souhaite avoir un offset random à chaque start
    [SerializeField] private Vector2Int offset; //Offset du monde
    [SerializeField] private int coeAlt = 10;  //Multiplicateur d'altitude
    [Space]

    [Header("Plane pour dessiner l'île (debug)")]
    [SerializeField] private Renderer plane; //Le plane sur lequel on veut imprimer l'île
    private Texture2D planeTexture; //On prépare sa texture
    [Space]

    [SerializeField] private GameObject cube; //Le Cube à instancier
    [SerializeField] private bool ileMasquee = false;
    [Header("Différents biomes")]
    [SerializeField] private Material[] biomesMaterials = new Material[6];
    [SerializeField] private Material maskMaterial;
    [Space]

    [Header("Options du domain warping")]
    [Tooltip("Attenuateur du DW (1 = courbes très ronde, 5 = courbes cassées)")]
    [SerializeField] private int attenuateurDW = 5; //Attenuateur du DW (1 = courbes très ronde, 5 = courbes cassées)
    [Tooltip("Zoom sur le perlinNoise, 0.01f = peu de détail, 0.03 = très détailler")]
    [SerializeField] private float detail = 0.01f; //Zoom sur le perlinNoise
    [Tooltip("Multiplicateur de détails, x = détails horizontaux, y = détails verticaux")]
    [SerializeField] private Vector2Int coeDetail;


    void Start()
    {
        CreerMap();
    }

    public void CreerMap()
    {
        if (offsetAleatoire) offset = RandomOffset();

        float[,] ocean = GenererBordureEau(largeurIle, profondeurIle);
        float[,] ile = GenererTerrain(largeurIle, profondeurIle, ocean);
        // DessinerIle(ile);
        GenererIle(ile);
    }

    private Vector2Int RandomOffset()
    {
        return new Vector2Int(Random.Range(0, 99999), Random.Range(0, 99999));
    }

    private float[,] GenererTerrain(int maxX, int maxZ, float[,] ocean)
    {
        float[,] terrain = new float[maxX, maxZ];
        for (int z = 0; z < maxZ; z++)
            for (int x = 0; x < maxX; x++)
            {
                float y = GenerateDomainNoise(x, z);
                y -= ocean[x, z]*1.5f;
                terrain[x, z] = Mathf.Clamp01(y);

            }
        return terrain;
    }

    private float[,] GenererBordureEau(int maxX, int maxZ)
    {
        float[,] ocean = new float[maxX, maxZ];
        float centreX = maxX / 2;
        float centreZ = maxZ / 2;
        Vector2 centre = new Vector2(centreX, centreZ); //Le centre de l'ile

        for (int z = 0; z < maxZ; z++)
            for (int x = 0; x < maxX; x++)
            {
                float y;
                if (!ileRonde)
                {
                    //Pour faire un carre
                    float yx = (Mathf.Abs(x - centreX) / centreX);
                    float yz = (Mathf.Abs(z - centreZ) / centreZ);
                    y = Mathf.Max(yx, yz);
                }
                else
                {
                    //Pour faire un cercle //xE2 + yE2 = dE2
                    float distAvecCentre = Vector2.Distance(centre, new Vector2(x, z)); //on calcule la distance entre les deux points
                    y = distAvecCentre / centreX; //on la valeur du rayon, puis on l'envoie a sigmoid (en dehors du if/else)
                }

                ocean[x, z] = Sigmoid(y);
            }
        return ocean;
    }

    void GenererIle(float[,] map)
    {
        int larg = map.GetLength(0);
        int prof = map.GetLength(1);
        for (int z = 0; z < prof; z++)
            for (int x = 0; x < larg; x++)
            {
                float y = map[x, z];
                if (y > 0f)
                {
                    Vector3 pos = new Vector3(x, y * coeAlt, z);
                    int biome = Mathf.FloorToInt(map[x, z] * 10);
                    Material mat;
                    
                        GameObject carre = Instantiate(cube, pos, Quaternion.identity, gameObject.transform);
                        if (ileMasquee) mat = maskMaterial;
                        else mat = biomesMaterials[biome];
                        carre.GetComponent<MeshRenderer>().material = mat;
                        // if (pos.y > 18) GenererUnderCubes(mat, pos);
                    
                }
            }
        transform.position = CentrerIle(larg, prof);
    }

    private void GenererUnderCubes(Material mat, Vector3 pos)
    {
        for (int i = 1; i < 6; i++)
        {
            Vector3 newPos = new Vector3(pos.x, pos.y - 1 * i, pos.z);
            if (newPos.y > 18)
            {
                GameObject carre = Instantiate(cube, newPos, Quaternion.identity, gameObject.transform);
                carre.GetComponent<MeshRenderer>().material = mat;
            }
        }
    }

    private float GenerateDomainNoise(int x, int z)
    {
        Vector2 domainOffset = GenerateDomainOffset(x, z);
        return OctavePerlin(x + domainOffset.x, z + domainOffset.y);
    }

    private Vector2 GenerateDomainOffset(int x, int z)
    {
        float noiseX = OctavePerlin(x, z) * coeDetail.x;
        float noiseY = OctavePerlin(x, z) * coeDetail.y;
        return new Vector2(noiseX, noiseY);
    }

    private float OctavePerlin(float x, float z)
    {
        x *= detail;
        z *= detail;
        x += detail;
        z += detail;

        float total = 0;
        float frequency = 1;
        float amplitude = 1;
        float persistance = 0.4f;
        for (int i = 0; i < attenuateurDW; i++)
        {
            total += Mathf.PerlinNoise((offset.x + x) * frequency, (offset.y + z) * frequency) * amplitude;
            amplitude *= persistance;
            frequency *= 2;
        }
        return total;
    }

    void DessinerIle(float[,] map)
    {
        int larg = map.GetLength(0);
        int prof = map.GetLength(1);
        Texture2D planeTexture = new Texture2D(larg, prof);
        Color[] couleursTexture = new Color[larg * prof];

        for (int z = 0; z < prof; z++)
            for (int x = 0; x < larg; x++)
            {
                float y = map[x, z];
                Color couleur = new Color(y, y, y, 1);
                couleursTexture[z * larg + x] = couleur; //faire le tableau de couleur z * 2eMaximum + x
            }


        //dessiner la texture
        planeTexture.SetPixels(couleursTexture);
        planeTexture.Apply();
        plane.material.mainTexture = planeTexture; //peut utiliser sharedMaterial pour changer tous les materials partagés
        plane.transform.localScale = new Vector3(prof, 1, larg);
    }

    float Sigmoid(float value)
    {
        float k = 5; //1 = briser la forme, 20 = default, 50 = fiable a la forme
        float c = 0.6f; //etendu de terre (1 = 100% de terre)
        return 1 / (1 + Mathf.Exp(-k * (value - c)));
    }

    Vector3 CentrerIle(int largeur, int profondeur)
    {
        Vector3 pos = new Vector3(-(largeur / 2), 0, -(profondeur / 2));
        return pos;
    }
}`;

export default Script;
