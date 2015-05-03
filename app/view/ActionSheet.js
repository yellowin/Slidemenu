/**
 * {@link Ext.ActionSheet ActionSheets} are used to display a list of {@link Ext.Button buttons} in a popup dialog.
 *
 * The key difference between ActionSheet and {@link Ext.Sheet} is that ActionSheets are docked at the bottom of the
 * screen, and the {@link #defaultType} is set to {@link Ext.Button button}.
 *
 * ## Example
 *
 *     @example preview miniphone
 *     var actionSheet = Ext.create('Ext.ActionSheet', {
 *         items: [
 *             {
 *                 text: 'Delete draft',
 *                 ui  : 'decline'
 *             },
 *             {
 *                 text: 'Save draft'
 *             },
 *             {
 *                 text: 'Cancel',
 *                 ui  : 'confirm'
 *             }
 *         ]
 *     });
 *
 *     Ext.Viewport.add(actionSheet);
 *     actionSheet.show();
 *
 * As you can see from the code above, you no longer have to specify a `xtype` when creating buttons within a {@link Ext.ActionSheet ActionSheet},
 * because the {@link #defaultType} is set to {@link Ext.Button button}.
 *
 */
Ext.define('myapp.view.ActionSheet', {
    extend: 'myapp.view.Sheet',
    alias : 'widget.actionsheet',
    requires: ['Ext.Button'],
    id:'actionsheet_myapp',

    config: {
        /**
         * @cfg
         * @inheritdoc
         */
        baseCls: Ext.baseCSSPrefix + 'sheet-action',

        /**
         * @cfg
         * @inheritdoc
         */
        left: 0,

        /**
         * @cfg
         * @inheritdoc
         */
        right: 0,

        /**
         * @cfg
         * @inheritdoc
         */
        top: 0,

        /**
         * @hide
         */
        enter: 'left',

        /**
         * @hide
         */
        exit: 'left',


        // @hide
        centered: false,

        /**
         * @cfg
         * @inheritdoc
         */
        height: '100%',

        width: 250,
        //style:'background:rgba(0, 0, 0, 0.8) !important',


        /*신규추가*/

        hideOnMaskTap: true,

        directionLock:true,
        showAnimation: {
            //preserveEndState: true,

            duration: 300,
            to: {
                width: 250
            }
        },

        /**
         * @hide
         */
/*

        hideAnimation: {
            preserveEndState: false
            //to: {
            //    width: 68
            //}
        },

*/


        draggable:{
            direction:'horizontal',
            directionLock:true,
            constraint:{
                min:{x:-250,y:0},
                max:{x:0,y:0}
            },
            listeners:{
                dragend:function() {
                    //console.log('dragend===============================');

                   // console.log(Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.getOffset().x);


                    //console.log('myapp.app.slide_flag : ' + myapp.app.slide_flag);

                    //메뉴를 여는 경우라면
                    if(myapp.app.slide_flag == 0){
                        if (Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.getOffset().x > -230) {
                            Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(0, 0, {duration: 210});
                            myapp.app.slide_flag = 1;
                        }else{
                            Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(-250, 0, {duration: 210});
                        }
                    }else { //메뉴를 닫는 경우라면
                        if (Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.getOffset().x < -70) {
                            Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(-250, 0, {duration: 210});
                            myapp.app.slide_flag = 0;
                        } else {
                            Ext.getCmp('actionsheet_myapp').draggableBehavior.draggable.setOffset(0, 0, {duration: 210});
                        }
                    }

                    //console.log('myapp.app.slide_flag : ' + myapp.app.slide_flag);

                },

                drag:function(aa,bb,cc,dd){
                    //console.log('start===============================');

                },
                scope:this
            }
        }
    },

    platformConfig: [{
        theme: ['Windows'],
        top: 0,
        bottom: null
    }]
});
