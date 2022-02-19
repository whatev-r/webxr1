WL.registerComponent('head-switcher', {
    vrHead: {type: WL.Type.Object},
}, {
    init: function() {
        WL.onXRSessionStart.push(this.onXRSessionStart.bind(this));   
    },
    onXRSessionStart: function(s) {
        const peerManager = this.object.getComponent('peer-manager');
        peerManager.playerHead = this.vrHead;
    },
});
