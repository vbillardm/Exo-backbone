var mb = mb || {};

( function( mb )
{
  mb.models = mb.models || {};

  mb.models.JoueurModel = Backbone.Model.extend
  (
      {
           urlRoot: "api/setJoueurs.php"
          ,defaults :
          {
              nom: "wazzzzza",
              poste: "demi-centre"
          }
      }
  );

  mb.models.JoueurCollection= Backbone.Collection.extend
  (
     {
          model : mb.models.JoueurModel,
          url   : "api/getJoueurs.php"
     }
  );
} )( mb );
