var mb = mb || {};

(function( $, mb )
{

    $(function(){

        var main = function()
        {

          JoueursCollection = new mb.models.JoueurCollection();


          // Renseigne les éléments de la liste
          var joueurListView = new mb.views.JoueurListView(
            { el: "#joueur_list", collection:JoueursCollection }
          );

          JoueursCollection.fetch
          (
              {
                  success : function( )
                  {
                    console.log("success");
                  }
              }
          );


      };
      main();
    })
  })( jQuery, mb );
