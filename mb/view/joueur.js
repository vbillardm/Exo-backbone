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
                "click a": "linkClicked"
            },
            render : function()
            {
              this.$el.html( this.template( this.model.toJSON() ) );
              return this;
            },

            linkClicked : function( event )
            {
                var joueurRef = this;
                this.$el
                    .append( "<input type='text' placeholder='Modifier la valeur du nom' value='"+ this.$el.children( "a" ).text().trim() +"' />" )
                    .children( "input" )
                        .focus()
                        .change
                        (
                            function()
                            {
                                var newjoueur = $(this).val().split( " " );
                                // Vérification des données saisies
                                if( newjoueur.length < 2 )
                                {
                                    joueurRef.render();
                                    return;
                                }
                                // Modification des valeurs du Model associé
                                joueurRef.model.set
                                (
                                    {
                                        "poste"  : newjoueur[ 0 ],
                                        "nom"    : newjoueur[ 1 ]
                                    }
                                );
                            }
                        )
                        .end()
                    .children( "a" )
                        .hide( "slow" );
                return false;
            }
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
