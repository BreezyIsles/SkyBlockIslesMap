L.Control.ToggleButton = L.Control.extend({
    options: {
        position: 'topleft',
        menuposition: 'topleft', // topleft,topright,bottomleft,bottomright
        width: '200px',
        height: '100%',
        direction: 'horizontal', // vertical or horizontal
        changeperc: '10',
        delay: '10',
        icon: 'fas fa-question fa-lg',  // Default icon is '?'
        enabled: false                  // Default enabled
    },

    initialize: function(callback, options){
        L.Util.setOptions(this, options);
        this._callback = callback;
    },

    onAdd: function(map){
        this._container = L.DomUtil.create('div', 'leaflet-control-slidemenu leaflet-bar leaflet-control');
        this._link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', this._container);
        this._link.title = 'Locations';
        L.DomUtil.create('span', this.options.icon, this._link);

        L.DomEvent
            .on(this._link, 'click', L.DomEvent.stopPropagation)
            .on(this._link, 'click', function(){
                // Toggle
                this.toggle();
            }, this);
        
        if (this.enabled)
            this._link.classList.add('toggle-on')
        else
            this._link.classList.add('toggle-off')

        return this._container;
    },
    
    toggle: function() {
        this.enabled = !this.enabled;

        this._link.classList.toggle('toggle-on');
        this._link.classList.toggle('toggle-off');
        
        this._callback();
    }
});

L.control.toggleButton = function(callback, options) {
    return new L.Control.ToggleButton(callback, options);
};
