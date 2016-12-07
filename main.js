var mb = mb || {};

(function( $, mb )
{

    $(function(){
      mb.router = mb.router || {};
      var joueursCollection;

      mb.router.AppRouter = Backbone.Router.extend
      (
          {
              routes:
              {
                  "" : "mainInit",
                  "joueur/:id" : "changeJoueur"
              },
              mainInit : function()
              {
                $( "#changeJoueur").hide( "slow" );
                $( "#joueur_list").show( "slow" );

                if(!joueursCollection)
                {
                  var joueursCollection = new mb.models.JoueurCollection();

                  // Renseigne les éléments de la liste
                  var joueurListView = new mb.views.JoueurListView( { el: "#joueur_list", collection:joueursCollection } );

                  // Rappatriement des données du serveur
                  joueursCollection.fetch
                  (
                      {
                          success : function( )
                          {
                              // Annule le message de chargement
                              $( "#loading").remove();
                          }
                      }
                  );
                }
              },
              changeJoueur : function( id )
              {
                  $( "#joueur_list").hide( "slow" );
                  $( "#changeJoueur").show( "slow" );

                  var self = this
                   ,model = joueursCollection.get( "id" )
                  ,poste = model.get( "poste" )
                  ,nom = model.get( "nom" );

                  $( "#joueurPoste").val( poste );
                  $( "#joueurNom").val( nom );
                  $( "#joueurChangeButton").click
                  (
                      function()
                      {
                          var newPoste= $( "#joueurPoste").val(),
                              newNom = $( "#joueurNom").val();
                          if( newPoste !== poste || newNom !== nom )
                          {
                              model.set
                              (
                                  {
                                      poste  : newPoste,
                                      nom     : newNom
                                  }
                              );

              // Synchronisation avec le serveur
                              model.save();
                          }
                          // Active la route par défaut
                          self.navigate( "", {trigger: true} );
                      }
                  )
              }
          }
      );

      var appRouter = new mb.router.AppRouter();
      Backbone.history.start();

      $( "body" ).append( "<h1 id='loading'>Merci de patienter pendant le chargement des données</h1>" );
  });
})( jQuery, mb );
