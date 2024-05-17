var wms_layers = [];

var lyr_Ortho50cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/CLEF/geoportail/r/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 50 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho50cm_0, 0]);
var format_perimetre_geoparc_04_1 = new ol.format.GeoJSON();
var features_perimetre_geoparc_04_1 = format_perimetre_geoparc_04_1.readFeatures(json_perimetre_geoparc_04_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perimetre_geoparc_04_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perimetre_geoparc_04_1.addFeatures(features_perimetre_geoparc_04_1);
var lyr_perimetre_geoparc_04_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perimetre_geoparc_04_1, 
                style: style_perimetre_geoparc_04_1,
                popuplayertitle: "perimetre_geoparc_04",
                interactive: true,
                title: '<img src="styles/legend/perimetre_geoparc_04_1.png" /> perimetre_geoparc_04'
            });
var format_Classeur1_2 = new ol.format.GeoJSON();
var features_Classeur1_2 = format_Classeur1_2.readFeatures(json_Classeur1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Classeur1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Classeur1_2.addFeatures(features_Classeur1_2);
var lyr_Classeur1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Classeur1_2, 
                style: style_Classeur1_2,
                popuplayertitle: "Classeur1",
                interactive: true,
                title: '<img src="styles/legend/Classeur1_2.png" /> Classeur1'
            });

lyr_Ortho50cm_0.setVisible(true);lyr_perimetre_geoparc_04_1.setVisible(true);lyr_Classeur1_2.setVisible(true);
var layersList = [lyr_Ortho50cm_0,lyr_perimetre_geoparc_04_1,lyr_Classeur1_2];
lyr_perimetre_geoparc_04_1.set('fieldAliases', {'id': 'id', });
lyr_Classeur1_2.set('fieldAliases', {'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'site a phtographier': 'site a phtographier', });
lyr_perimetre_geoparc_04_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Classeur1_2.set('fieldImages', {'id': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'site a phtographier': 'TextEdit', });
lyr_perimetre_geoparc_04_1.set('fieldLabels', {'id': 'hidden field', });
lyr_Classeur1_2.set('fieldLabels', {'id': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'site a phtographier': 'inline label - always visible', });
lyr_Classeur1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});