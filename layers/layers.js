ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([239346.777256, 5454332.822176, 242533.818031, 5455918.061463]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.openstreetmap.org/node/7506972055#map=15/43.92654/2.15748'
            })
        });
var format_Pitinement2025_2 = new ol.format.GeoJSON();
var features_Pitinement2025_2 = format_Pitinement2025_2.readFeatures(json_Pitinement2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pitinement2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pitinement2025_2.addFeatures(features_Pitinement2025_2);
var lyr_Pitinement2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pitinement2025_2, 
                style: style_Pitinement2025_2,
                popuplayertitle: 'Piétinement 2025',
                interactive: true,
                title: '<img src="styles/legend/Pitinement2025_2.png" /> Piétinement 2025'
            });
var format_Pitinement2026_3 = new ol.format.GeoJSON();
var features_Pitinement2026_3 = format_Pitinement2026_3.readFeatures(json_Pitinement2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pitinement2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pitinement2026_3.addFeatures(features_Pitinement2026_3);
var lyr_Pitinement2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pitinement2026_3, 
                style: style_Pitinement2026_3,
                popuplayertitle: 'Piétinement 2026',
                interactive: true,
                title: '<img src="styles/legend/Pitinement2026_3.png" /> Piétinement 2026'
            });
var format_Petitesbtesmai2026_4 = new ol.format.GeoJSON();
var features_Petitesbtesmai2026_4 = format_Petitesbtesmai2026_4.readFeatures(json_Petitesbtesmai2026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petitesbtesmai2026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petitesbtesmai2026_4.addFeatures(features_Petitesbtesmai2026_4);
var lyr_Petitesbtesmai2026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Petitesbtesmai2026_4, 
                style: style_Petitesbtesmai2026_4,
                popuplayertitle: 'Petites bêtes mai 2026',
                interactive: true,
                title: '<img src="styles/legend/Petitesbtesmai2026_4.png" /> Petites bêtes mai 2026'
            });
var format_ATE_5 = new ol.format.GeoJSON();
var features_ATE_5 = format_ATE_5.readFeatures(json_ATE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATE_5.addFeatures(features_ATE_5);
var lyr_ATE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATE_5, 
                style: style_ATE_5,
                popuplayertitle: 'ATE',
                interactive: true,
                title: '<img src="styles/legend/ATE_5.png" /> ATE'
            });
var format_Petitebtesoctobre2025_6 = new ol.format.GeoJSON();
var features_Petitebtesoctobre2025_6 = format_Petitebtesoctobre2025_6.readFeatures(json_Petitebtesoctobre2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petitebtesoctobre2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petitebtesoctobre2025_6.addFeatures(features_Petitebtesoctobre2025_6);
var lyr_Petitebtesoctobre2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Petitebtesoctobre2025_6, 
                style: style_Petitebtesoctobre2025_6,
                popuplayertitle: 'Petite bêtes octobre 2025',
                interactive: true,
                title: '<img src="styles/legend/Petitebtesoctobre2025_6.png" /> Petite bêtes octobre 2025'
            });
var format_Renouemai2026_7 = new ol.format.GeoJSON();
var features_Renouemai2026_7 = format_Renouemai2026_7.readFeatures(json_Renouemai2026_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renouemai2026_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renouemai2026_7.addFeatures(features_Renouemai2026_7);
var lyr_Renouemai2026_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renouemai2026_7, 
                style: style_Renouemai2026_7,
                popuplayertitle: 'Renouée mai 2026',
                interactive: true,
                title: '<img src="styles/legend/Renouemai2026_7.png" /> Renouée mai 2026'
            });
var format_Rnoue2024laprouse_8 = new ol.format.GeoJSON();
var features_Rnoue2024laprouse_8 = format_Rnoue2024laprouse_8.readFeatures(json_Rnoue2024laprouse_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rnoue2024laprouse_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rnoue2024laprouse_8.addFeatures(features_Rnoue2024laprouse_8);
var lyr_Rnoue2024laprouse_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rnoue2024laprouse_8, 
                style: style_Rnoue2024laprouse_8,
                popuplayertitle: 'Rénouée 2024 (lapérouse)',
                interactive: true,
                title: '<img src="styles/legend/Rnoue2024laprouse_8.png" /> Rénouée 2024 (lapérouse)'
            });
var format_Rnoueoctobre2025_9 = new ol.format.GeoJSON();
var features_Rnoueoctobre2025_9 = format_Rnoueoctobre2025_9.readFeatures(json_Rnoueoctobre2025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rnoueoctobre2025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rnoueoctobre2025_9.addFeatures(features_Rnoueoctobre2025_9);
var lyr_Rnoueoctobre2025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rnoueoctobre2025_9, 
                style: style_Rnoueoctobre2025_9,
                popuplayertitle: 'Rénouée octobre 2025',
                interactive: true,
                title: '<img src="styles/legend/Rnoueoctobre2025_9.png" /> Rénouée octobre 2025'
            });
var format_Rnoueavril2025_10 = new ol.format.GeoJSON();
var features_Rnoueavril2025_10 = format_Rnoueavril2025_10.readFeatures(json_Rnoueavril2025_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rnoueavril2025_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rnoueavril2025_10.addFeatures(features_Rnoueavril2025_10);
var lyr_Rnoueavril2025_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rnoueavril2025_10, 
                style: style_Rnoueavril2025_10,
                popuplayertitle: 'Rénouée avril 2025',
                interactive: true,
                title: '<img src="styles/legend/Rnoueavril2025_10.png" /> Rénouée avril 2025'
            });
var format_Lichens2025_11 = new ol.format.GeoJSON();
var features_Lichens2025_11 = format_Lichens2025_11.readFeatures(json_Lichens2025_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lichens2025_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lichens2025_11.addFeatures(features_Lichens2025_11);
var lyr_Lichens2025_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lichens2025_11, 
                style: style_Lichens2025_11,
                popuplayertitle: 'Lichens 2025',
                interactive: true,
                title: '<img src="styles/legend/Lichens2025_11.png" /> Lichens 2025'
            });
var format_Lichens2026_12 = new ol.format.GeoJSON();
var features_Lichens2026_12 = format_Lichens2026_12.readFeatures(json_Lichens2026_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lichens2026_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lichens2026_12.addFeatures(features_Lichens2026_12);
var lyr_Lichens2026_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lichens2026_12, 
                style: style_Lichens2026_12,
                popuplayertitle: 'Lichens 2026',
                interactive: true,
                title: '<img src="styles/legend/Lichens2026_12.png" /> Lichens 2026'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Pitinement2025_2.setVisible(true);lyr_Pitinement2026_3.setVisible(true);lyr_Petitesbtesmai2026_4.setVisible(true);lyr_ATE_5.setVisible(true);lyr_Petitebtesoctobre2025_6.setVisible(true);lyr_Renouemai2026_7.setVisible(true);lyr_Rnoue2024laprouse_8.setVisible(true);lyr_Rnoueoctobre2025_9.setVisible(true);lyr_Rnoueavril2025_10.setVisible(true);lyr_Lichens2025_11.setVisible(true);lyr_Lichens2026_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenStreetMap_1,lyr_Pitinement2025_2,lyr_Pitinement2026_3,lyr_Petitesbtesmai2026_4,lyr_ATE_5,lyr_Petitebtesoctobre2025_6,lyr_Renouemai2026_7,lyr_Rnoue2024laprouse_8,lyr_Rnoueoctobre2025_9,lyr_Rnoueavril2025_10,lyr_Lichens2025_11,lyr_Lichens2026_12];
lyr_Pitinement2025_2.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'choix_du_q': 'choix_du_q', 'esp_ce_obs': 'esp_ce_obs', 'densit': 'densit', 'fr_quence': 'fr_quence', 'couverture': 'couverture', });
lyr_Pitinement2026_3.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'nom_de_gro': 'nom_de_gro', 'nom_desp_c': 'nom_desp_c', 'nom_dindiv': 'nom_dindiv', });
lyr_Petitesbtesmai2026_4.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'nom_de_gro': 'nom_de_gro', 'nom_desp_c': 'nom_desp_c', 'nom_dindiv': 'nom_dindiv', });
lyr_ATE_5.set('fieldAliases', {'id': 'id', });
lyr_Petitebtesoctobre2025_6.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'nom_de_gro': 'nom_de_gro', 'nom_desp_c': 'nom_desp_c', 'nom_dindiv': 'nom_dindiv', });
lyr_Renouemai2026_7.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'field_13': 'field_13', 'field_13_o': 'field_13_o', 'field_15': 'field_15', 'field_17': 'field_17', 'nombre_de_': 'nombre_de_', 'param_tres': 'param_tres', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'facultatif': 'facultatif', 'question_s': 'question_s', });
lyr_Rnoue2024laprouse_8.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'field_13': 'field_13', 'field_13_o': 'field_13_o', 'field_15': 'field_15', 'field_17': 'field_17', 'nombre_de_': 'nombre_de_', 'param_tres': 'param_tres', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'facultatif': 'facultatif', 'question_s': 'question_s', });
lyr_Rnoueoctobre2025_9.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'field_13': 'field_13', 'field_13_o': 'field_13_o', 'field_15': 'field_15', 'field_17': 'field_17', 'nombre_de_': 'nombre_de_', 'param_tres': 'param_tres', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'facultatif': 'facultatif', 'question_s': 'question_s', });
lyr_Rnoueavril2025_10.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'field_13': 'field_13', 'field_13_o': 'field_13_o', 'field_15': 'field_15', 'field_17': 'field_17', 'nombre_de_': 'nombre_de_', 'param_tres': 'param_tres', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'facultatif': 'facultatif', 'question_s': 'question_s', });
lyr_Lichens2025_11.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'lichens_re': 'lichens_re', 'indiquer_l': 'indiquer_l', });
lyr_Lichens2026_12.set('fieldAliases', {'globalid': 'globalid', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'classe': 'classe', 'date_et_he': 'date_et_he', 'luminosit': 'luminosit', 'hygrom_tri': 'hygrom_tri', 'temp_ratur': 'temp_ratur', 'lichens_re': 'lichens_re', 'indiquer_l': 'indiquer_l', });
lyr_Pitinement2025_2.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'choix_du_q': '', 'esp_ce_obs': '', 'densit': '', 'fr_quence': '', 'couverture': '', });
lyr_Pitinement2026_3.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'nom_de_gro': '', 'nom_desp_c': '', 'nom_dindiv': '', });
lyr_Petitesbtesmai2026_4.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'nom_de_gro': '', 'nom_desp_c': '', 'nom_dindiv': '', });
lyr_ATE_5.set('fieldImages', {'id': '', });
lyr_Petitebtesoctobre2025_6.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'nom_de_gro': '', 'nom_desp_c': '', 'nom_dindiv': '', });
lyr_Renouemai2026_7.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'field_13': '', 'field_13_o': '', 'field_15': '', 'field_17': '', 'nombre_de_': '', 'param_tres': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'facultatif': '', 'question_s': '', });
lyr_Rnoue2024laprouse_8.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'field_13': '', 'field_13_o': '', 'field_15': '', 'field_17': '', 'nombre_de_': '', 'param_tres': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'facultatif': '', 'question_s': '', });
lyr_Rnoueoctobre2025_9.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'field_13': '', 'field_13_o': '', 'field_15': '', 'field_17': '', 'nombre_de_': '', 'param_tres': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'facultatif': '', 'question_s': '', });
lyr_Rnoueavril2025_10.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'field_13': '', 'field_13_o': '', 'field_15': '', 'field_17': '', 'nombre_de_': '', 'param_tres': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'facultatif': '', 'question_s': '', });
lyr_Lichens2025_11.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'lichens_re': '', 'indiquer_l': '', });
lyr_Lichens2026_12.set('fieldImages', {'globalid': '', 'CreationDa': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'classe': '', 'date_et_he': '', 'luminosit': '', 'hygrom_tri': '', 'temp_ratur': '', 'lichens_re': '', 'indiquer_l': '', });
lyr_Pitinement2025_2.set('fieldLabels', {'globalid': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'classe': 'no label', 'date_et_he': 'no label', 'luminosit': 'no label', 'hygrom_tri': 'no label', 'temp_ratur': 'no label', 'choix_du_q': 'no label', 'esp_ce_obs': 'no label', 'densit': 'no label', 'fr_quence': 'no label', 'couverture': 'no label', });
lyr_Pitinement2026_3.set('fieldLabels', {'globalid': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'classe': 'no label', 'date_et_he': 'no label', 'luminosit': 'no label', 'hygrom_tri': 'no label', 'temp_ratur': 'no label', 'nom_de_gro': 'no label', 'nom_desp_c': 'no label', 'nom_dindiv': 'no label', });
lyr_Petitesbtesmai2026_4.set('fieldLabels', {'globalid': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'classe': 'no label', 'date_et_he': 'no label', 'luminosit': 'no label', 'hygrom_tri': 'no label', 'temp_ratur': 'no label', 'nom_de_gro': 'no label', 'nom_desp_c': 'no label', 'nom_dindiv': 'no label', });
lyr_ATE_5.set('fieldLabels', {'id': 'no label', });
lyr_Petitebtesoctobre2025_6.set('fieldLabels', {'globalid': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'classe': 'no label', 'date_et_he': 'no label', 'luminosit': 'no label', 'hygrom_tri': 'no label', 'temp_ratur': 'no label', 'nom_de_gro': 'no label', 'nom_desp_c': 'no label', 'nom_dindiv': 'no label', });
lyr_Renouemai2026_7.set('fieldLabels', {'globalid': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'classe': 'no label', 'date_et_he': 'no label', 'field_13': 'no label', 'field_13_o': 'no label', 'field_15': 'no label', 'field_17': 'no label', 'nombre_de_': 'no label', 'param_tres': 'no label', 'luminosit': 'no label', 'hygrom_tri': 'no label', 'temp_ratur': 'no label', 'facultatif': 'no label', 'question_s': 'no label', });
lyr_Rnoue2024laprouse_8.set('fieldLabels', {'globalid': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'classe': 'no label', 'date_et_he': 'no label', 'field_13': 'no label', 'field_13_o': 'no label', 'field_15': 'no label', 'field_17': 'no label', 'nombre_de_': 'no label', 'param_tres': 'no label', 'luminosit': 'no label', 'hygrom_tri': 'no label', 'temp_ratur': 'no label', 'facultatif': 'no label', 'question_s': 'no label', });
lyr_Rnoueoctobre2025_9.set('fieldLabels', {'globalid': 'hidden field', 'CreationDa': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', 'classe': 'hidden field', 'date_et_he': 'hidden field', 'field_13': 'hidden field', 'field_13_o': 'hidden field', 'field_15': 'hidden field', 'field_17': 'hidden field', 'nombre_de_': 'inline label - visible with data', 'param_tres': 'inline label - visible with data', 'luminosit': 'inline label - visible with data', 'hygrom_tri': 'inline label - visible with data', 'temp_ratur': 'inline label - visible with data', 'facultatif': 'hidden field', 'question_s': 'hidden field', });
lyr_Rnoueavril2025_10.set('fieldLabels', {'globalid': 'hidden field', 'CreationDa': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', 'classe': 'hidden field', 'date_et_he': 'hidden field', 'field_13': 'hidden field', 'field_13_o': 'hidden field', 'field_15': 'hidden field', 'field_17': 'hidden field', 'nombre_de_': 'inline label - always visible', 'param_tres': 'inline label - always visible', 'luminosit': 'inline label - always visible', 'hygrom_tri': 'inline label - always visible', 'temp_ratur': 'inline label - always visible', 'facultatif': 'hidden field', 'question_s': 'hidden field', });
lyr_Lichens2025_11.set('fieldLabels', {'globalid': 'hidden field', 'CreationDa': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', 'classe': 'hidden field', 'date_et_he': 'hidden field', 'luminosit': 'header label - always visible', 'hygrom_tri': 'inline label - always visible', 'temp_ratur': 'inline label - always visible', 'lichens_re': 'inline label - always visible', 'indiquer_l': 'inline label - always visible', });
lyr_Lichens2026_12.set('fieldLabels', {'globalid': 'hidden field', 'CreationDa': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', 'classe': 'hidden field', 'date_et_he': 'hidden field', 'luminosit': 'inline label - always visible', 'hygrom_tri': 'inline label - always visible', 'temp_ratur': 'inline label - always visible', 'lichens_re': 'inline label - visible with data', 'indiquer_l': 'no label', });
lyr_Lichens2026_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});