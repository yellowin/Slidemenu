Ext.define('myapp.view.Main', {
    extend: 'Ext.Container',
    requires: ['myapp.view.ActionSheet'],
    id:'main_frames',

    config: {
        padding: 20,
        scrollable: true,
        defaults: {
            xtype : 'button',
            cls   : 'demobtn',
            margin: '10 0'
        },
        items: [
            {
                xtype: 'component',
                //styleHtmlContent: true,
                html: '<b>Ext.Menu</b> is a new component in Sencha Touch 2.3 which allows you to easily display sliding \
                menus from any side of the screen.<br /><br />You can show the menus by either tapping the buttons below, \
                or by swiping from the edge of the screen.'
            }, {
                text: 'Action Sheet',
                model: false,
                handler: function() {


                    //메뉴를 여는 경우라면
                    if(myapp.app.slide_flag == 0){
                        Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(0, 0, {duration: 210});
                        myapp.app.slide_flag = 1;
                    }else { //메뉴를 닫는 경우라면
                        Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(-250, 0, {duration: 210});
                        myapp.app.slide_flag = 0;
                    }

                }
            }
        ]
    },

    initialize:function(){
        var items_menu = {

            id: 'top_pnl',
            xtype:'container',
            //xtype: 'crosscut',
            //style:'background:#fff; border-top-left-radius:35px;',
            //style: 'background:rgba(0,0,0,0) !important; border-top-left-radius:35px;',
            style:'height:100%;right:-10px;position:absolute;width:100%;padding-right:20px',
            height: '100%',
            layout: {
                type: 'vbox'
                //pack: 'middle'

            },
            default: 'button',
            directionLock: true,
            scrollable: true,
            items: [

                {
                    xtype: 'button',
                    text: 'Close Menu',
                    scope: this,
                    handler: function () {
                        console.log(this);
                        //this.actions.hide();
                        Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(-250, 0, {duration: 210});
                        myapp.app.slide_flag = 0;
                        //Ext.getCmp('actionsheet_myapp').hide();
                    }
                }
            ]

        };

        if (!this.actions) {
            this.actions = Ext.create('myapp.view.ActionSheet', {
                items: items_menu
            });
        }

        Ext.Viewport.add(this.actions);
        this.actions.show();
    }


});
