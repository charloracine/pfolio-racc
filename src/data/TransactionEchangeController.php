<?php

namespace App\Http\Controllers;

use App\TransactionEchange;
use App\Echange;
use App\Vente;
use App\Recolte;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TransactionEchangeController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Echange $echange)
    {
        $transaction = new TransactionEchange();
        return view('transactionEchanges.create', ['transaction' => $transaction, 'echange' => $echange]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Echange $echange)
    {
        $transaction = new TransactionEchange();
        $transaction->fill($request->all());
        $transaction->nomVendeur = $echange->user->nomComplet;
        $cout = $transaction->qte * $transaction->prix;

        if ($transaction->user->portefeuille >= $cout){

            $transaction->user->portefeuille -= $cout;
            $echange->user->portefeuille += $cout;
            
            for ($i=0; $i < $transaction->qte; $i++) { 
                $echangesAEnlever = Echange::where('user_id', '=', $echange->user_id)->where('prix', '=', $echange->prix)->where('plantBase_id', '=', $echange->plantBase_id)->get();
                $echangesAEnlever[0]->delete();
                $recoltesAEnlever = Recolte::where('user_id', '=', $echange->user_id)->where('plantBase_id', '=', $echange->plantBase_id)->get();
                $recoltesAEnlever[0]->delete();
            }

            $transaction->user->save();
            $echange->user->save();
            $transaction->save();

            $vente = new Vente();
            $vente->user_id = $echange->user->id;
            $vente->acheteur_id = $transaction->user->id;
            $vente->nomAcheteur = $transaction->user->nomComplet;
            $vente->typePlant = $transaction->typePlant;
            $vente->qte = $transaction->qte;
            $vente->prix = $transaction->prix;
            $vente->dateTransaction = $transaction->dateTransaction;
            $vente->save();

            return redirect()
            ->action('UserController@show', $transaction->user);
        }
        else{
            return '<script type="text/javascript">alert("Solde du portefeuille insuffisant, Besoin: ' . $cout . '$, Disponible: ' . $transaction->user->portefeuille . '$");</script>' . redirect()->action('UserController@show', $transaction->user);
        }
    }
}
