var mb = mb || {};

( function( mb )
{
    mb.views = mb.views || {};



    mb.views.JoueurView = Backbone.View.extend
    (
        {
            tagName : "li",
            model : null,
            template : _.template( $( "#joueur-template" ).html() ),
            initialize : function()
            {
                // Liaison événementielle entre la collection et la vue
                this.model.on( "change", this.render, this );
                this.render();
            },
            events:
            {
                //"click a": "linkClicked"

            },
            render : function()
            {
              this.$el.html( this.template( this.model.toJSON() ) );
              return this;
            },


        }
    );
    mb.views.JoueurListView = Backbone.View.extend
    (
        {
            collection : null,
            initialize : function()
            {
                // Liaison événementielle entre la collection et la vue
                this.collection.on( "reset", this.initJoueurs, this );
                this.collection.on( "add", this.addJoueur, this );
            },
            initJoueurs : function( joueurs )
            {
                var self = this;
                joueurs.each
                (
                    function( joueur )
                    {
                        self.addJoueur( joueur )
                    }
                );
            },
            addJoueur : function( joueur )
            {
                this.$el.append
                (
                    new mb.views.JoueurView( { model : joueur } ).el
                );
            }
        }
    );


})( mb );
