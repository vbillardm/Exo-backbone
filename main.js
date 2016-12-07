var mb = mb || {};

(function( $, mb )
{

    $(function(){
      mb.router = mb.router || {};
      mb.router.AppRouter = Backbone.Router.extend
      (
          {
              routes:
              {
                  "" : "mainInit"
              },
              mainInit : function()
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
          }
      );

      var appRouter = new mb.router.AppRouter();
      Backbone.history.start();

      $( "body" ).append( "<h1 id='loading'>Merci de patienter pendant le chargement des données</h1>" );
  });
})( jQuery, mb );
