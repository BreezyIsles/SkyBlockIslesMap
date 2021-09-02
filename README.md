<!DOCTYPE html>
<html style="height: 100%; margin: 0;">
<head>
<title>Skyblock Isles Map 1: Breezy#0999</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="islesmap/scripts/leaflet/leaflet.css">
<link rel="stylesheet" href="buttons.css">

<script src="islesmap/scripts/leaflet/leaflet.js"></script>

</head>
<body style="height: 100%; margin: 0;">

<div id="map" style="width: 100%; height: 100%; background: #010101;"></div>

<button id="fishingButton" onclick="toggleFishing()">Toggle Fishing</button>
<button id="altarButton" onclick="toggleAltar()">Toggle Altars</button>
<button id="miningButton" onclick="toggleMining()">Toggle Mining</button>
<button id="farmingButton" onclick="toggleFarming()">Toggle Farming</button>
<button id="woodcuttingButton" onclick="toggleWoodcutting()">Toggle Woodcutting</button>

<script type="text/javascript">

// Declare Map Object
var map = L.map('map').setView([0, 0], 1);


// Reference the tiles
L.tileLayer('tiles/{z}/{x}/{y}.jpg', {
  minZoom: 3,
  maxZoom: 6,
  continuousWorld: false,
  noWrap: true,
}).addTo(map);

// Create the marker object
var markerObj = L.Icon.extend({
    options: {
        iconSize:     [25, 41],
        iconAnchor:   [12, 40],
        popupAnchor:  [0, -32]
    }
});

var altarMarker = new markerObj({iconUrl: 'islesmap/scripts/leaflet/images/altarmarker.png'});
var npcMarker = new markerObj({iconUrl: 'islesmap/scripts/leaflet/images/npcmarker.png'});
var farmingMarker = new markerObj({iconUrl: 'islesmap/scripts/leaflet/images/farmingmarker.png'});
var miningMarker = new markerObj({iconUrl: 'islesmap/scripts/leaflet/images/miningmarker.png'});
var woodcuttingMarker = new markerObj({iconUrl: 'islesmap/scripts/leaflet/images/woodcuttingmarker.png'});
var volcanoMarker = new markerObj({iconUrl: 'islesmap/scripts/leaflet/images/volcanomarker.png'});
var volcano = L.marker([-8.537565, -77.475586], {icon: volcanoMarker}).bindPopup('<b>Inside the Volcano</b><br><br><b>Alchemy</b><br>Fire Altar (12) : -93, 64, 79<br><b>Farming</b><br>Pyre Pepper (35) : 63, 67, -1061<br>Volcanic Hops (50) : 107, 50, -42<br>Nether Wart (70) : -103, 59, -83<br><b>Mining</b><br>Obsidian (55) : 129, 52, 79<br>Netherite (55) : 6, 71, -105<br><b>Woodcutting:</b><br>Demon Wood (70) : -66, 66, 95<br><b>Fishing:</b><br>Lava Eel (52 - Magma Spear) : -41, 61, 97').addTo(map)

//                //
// Fishing Markers//
//                //
var wishingWell1 = L.marker([-36.438961, -10.546875]).bindPopup('<b>Wishing Well - Net (1)</b>'),
	squidMarker1 = L.marker([-40.279526, -6.745605]).bindPopup('<b>Squid - Spear (23)</b>'),
	shrimpOyster1 = L.marker([-40.313043, -11.228027]).bindPopup('<b>Shrimp - Net (8) <br>Oyster - Net (15)</b>'),
	sardineFlounderCod1 = L.marker([-36.527295, -0.043945]).bindPopup('<b>Sardine - Net (1) <br>Flounder - Rod (3)<br>Cod - Rod (12)'),
	trout = L.marker([-19.331878, 41.638184]).bindPopup('<b>Trout - Hand (18)</b>'),
	salmon = L.marker([5.57225, 56.57959]).bindPopup('<b>Salmon - Rod (27)</b>'),
	stoneClam1 = L.marker([3.425692, 37.155762]).bindPopup('<b>Stone Clam - Net (5)</b>'),
	tuna1 = L.marker([10.422988, 8.393555]).bindPopup('<b>Tuna - Rod (50)</b>'),
	starfishsnake = L.marker([15.135764, 17.182617]).bindPopup('<b>Starfish - Net (43)<br>Sea Snake - Rod (48)</b>'),
	stonecrab = L.marker([17.014768, 46.999512]).bindPopup('<b>Stone Crab - Net (10)</b>'),
	picklefish = L.marker([-14.392118, 17.29248]).bindPopup('<b>Picklefish - Rod (20)</b>'),
	catfish = L.marker([10.617418, 59.282227]).bindPopup('<b>Catfish - Hand (33)</b>'),
	giantsnail= L.marker([27.664069, 23.532715]).bindPopup('<b>Giant Snail - Spear (45)</b>'),
	clownfishseahorse= L.marker([24.866503, 39.858398]).bindPopup('<b>Clownfish - Rod (30)<br>Seahorse - Net (39)</b>'),
	urchincrab= L.marker([25.720735, 43.92334]).bindPopup('<b>Urchin - Net (36)<br>Giant Crab - Spear (55)</b>'),
	angler= L.marker([3.469557, -62.775879]).bindPopup('<b>Anglerfish - Net (70)</b>'),
	seaturtle= L.marker([36.914764, 44.934082]).bindPopup('<b>Sea Turtle - Rod (59)</b>'),
	pufferfish= L.marker([-16.551962, -84.331055]).bindPopup('<b>Pufferfish - Spear (40)</b>'),
	mantaray= L.marker([-25.085599, -45.856934]).bindPopup('<b>Manta Ray - Spear (65)</b>'),
	jellyfish= L.marker([4.149201, -69.851074]).bindPopup('<b>Jellyfish - Net (68)</b>'),
	goliathgrouper= L.marker([-1.34021, 43.637695]).bindPopup('<b>Goliath Grouper - Hand (73)</b>')


var fishingSpots = L.layerGroup([wishingWell1, 
	squidMarker1, 
	shrimpOyster1,
	sardineFlounderCod1,
	trout,
	salmon,
	stoneClam1,
	tuna1,
	starfishsnake,
	stonecrab,
	picklefish,
	catfish,
	giantsnail,
	clownfishseahorse,
	urchincrab,
	angler,
	seaturtle,
	pufferfish,
	mantaray,
	jellyfish,
	goliathgrouper])

//                //
// Altar Markers  //
//                //
var cosmicAltar = L.marker([4.017699, 32.958984], {icon: altarMarker}).bindPopup('<b>Apprentice Altar (3) - Day<br>Cosmic Altar (25) - Night</b>'),
	airAltar = L.marker([-16.615138, 15.776367], {icon: altarMarker}).bindPopup('<b>Air Altar (1)</b>'),
	darkAltar = L.marker([12.597455, -49.262695], {icon: altarMarker}).bindPopup('<b>Dark Altar (15)</b>'),
	waterAltar = L.marker([-32.454156, -40.649414], {icon: altarMarker}).bindPopup('<b>Water Altar (8)</b>'),
	earthAltar = L.marker([4.149201, 86.484375], {icon: altarMarker}).bindPopup('<b>Earth Altar (8)</b>'),
	dreamAltar = L.marker([42.065607, 13.557129], {icon: altarMarker}).bindPopup('<b>Dream Altar (20)</b><br>Inside the back of the mountain'),
	bloodAltar = L.marker([2.899153, -62.841797], {icon: altarMarker}).bindPopup('<b>Blood Altar (35)</b><br>Under monkey temple'),
	enchantmentTable = L.marker([1.34021, 24.213867], {icon: altarMarker}).bindPopup('<b>Enchantment Table</b>')

var altarSpots = L.layerGroup([cosmicAltar,
	airAltar,
	darkAltar,
	waterAltar,
	earthAltar,
	dreamAltar,
	bloodAltar,
	enchantmentTable
	])

//                //
// Mining Markers //
//                //
var copper = L.marker([-20.097206, -21.862793], {icon: miningMarker}).bindPopup('<b>Copper (1)</b>'),
	tin = L.marker([-20.715015, -24.873047], {icon: miningMarker}).bindPopup('<b>Tin (1)</b>'),
	salt = L.marker([-20.653346, 25.224609], {icon: miningMarker}).bindPopup('<b>Salt (23)</b>'),
	clay = L.marker([-20.324024, 27.333984], {icon: miningMarker}).bindPopup('<b>Clay (3)</b>'),
	coalironmithril = L.marker([-17.539297, -24.411621], {icon: miningMarker}).bindPopup('<b>Coal (12)<br>Iron (5)<br>Mithril (30)</b>'),
	sand = L.marker([-0.109863, -4.152832], {icon: miningMarker}).bindPopup('<b>Sand (8)</b>'),
	runeEssence = L.marker([-12.01783, 23.620605], {icon: miningMarker}).bindPopup('<b>Rune Essence (10)</b>'),
	nicklerhodonite = L.marker([-9.579084, 5.756836], {icon: miningMarker}).bindPopup('<b>Nickel (15)<br>Rhodonite (20)</b>'),
	silvergold = L.marker([25.065697, -10.019531], {icon: miningMarker}).bindPopup('<b>Silver (18)<br>Gold (40)</b>'),
	ice = L.marker([-12.039321, -6.108398], {icon: miningMarker}).bindPopup('<b>Ice (35)</b>'),
	crimson = L.marker([-14.881087, -69.279785], {icon: miningMarker}).bindPopup('<b>Crimson (45)</b>'),
	adamantium = L.marker([1.230374, 57.458496], {icon: miningMarker}).bindPopup('<b>Adamantium (40)</b>')

var miningSpots = L.layerGroup([copper,
	tin,
	salt,
	clay,
	coalironmithril,
	sand,
	runeEssence,
	nicklerhodonite,
	silvergold,
	ice,
	crimson,
	adamantium
	])

//                //
//Farming Markers //
//                //

var oranges = L.marker([-35.782171, -20.632324], {icon: farmingMarker}).bindPopup('<b>Oranges - Hand (10)</b>');

var farmingSpots = L.layerGroup([oranges

	])

//                    //
//Woodcutting Markers //
//                    //

var log1 = L.marker([-35.835628, -11.733398], {icon: woodcuttingMarker}).bindPopup('<b>Log (1)</b>'),
	birch1 = L.marker([-34.795762, -13.183594], {icon: woodcuttingMarker}).bindPopup('<b>Birch (10)</b>'),
	oak1 = L.marker([-35.119909, -9.404297], {icon: woodcuttingMarker}).bindPopup('<b>Oak (5)</b>'),
	spruce1 = L.marker([-37.107765, -9.338379], {icon: woodcuttingMarker}).bindPopup('<b>Spruce (15)</b>'),
	willow1 = L.marker([-21.412162, -31.948242], {icon: woodcuttingMarker}).bindPopup('<b>Willow (20)</b>'),
	acacia1 = L.marker([-17.266728, -32.629395], {icon: woodcuttingMarker}).bindPopup('<b>Acacia (30)</b>'),
	dreadknot1 = L.marker([11.070603, -46.494141], {icon: woodcuttingMarker}).bindPopup('<b>Dreadknot (35)</b>'),
	mahogany1 = L.marker([22.004175, -1.40625], {icon: woodcuttingMarker}).bindPopup('<b>Mahogany (35)</b>'),
	baobab1 = L.marker([5.266008, -67.478027], {icon: woodcuttingMarker}).bindPopup('<b>Baobab (50)</b>'),
	bedlam1 = L.marker([41.211722, 21.313477], {icon: woodcuttingMarker}).bindPopup('<b>Bedlam (60)</b>')

var woodcuttingSpots = L.layerGroup([log1,
	birch1,
	oak1,
	spruce1,
	willow1,
	acacia1,
	dreadknot1,
	mahogany1,
	baobab1,
	bedlam1
	])

function toggleFishing()
{
	if(map.hasLayer(fishingSpots))
	{
		map.removeLayer(fishingSpots);
	}
	else
	{
		map.addLayer(fishingSpots);
	}
}

function toggleAltar()
{
	if(map.hasLayer(altarSpots))
	{
		map.removeLayer(altarSpots);
	}
	else
	{
		map.addLayer(altarSpots);
	}
}

function toggleMining()
{
	if(map.hasLayer(miningSpots))
	{
		map.removeLayer(miningSpots);
	}
	else
	{
		map.addLayer(miningSpots);
	}
}

function toggleFarming()
{
	if(map.hasLayer(farmingSpots))
	{
		map.removeLayer(farmingSpots);
	}
	else
	{
		map.addLayer(farmingSpots);
	}
}

function toggleWoodcutting()
{
	if(map.hasLayer(woodcuttingSpots))
	{
		map.removeLayer(woodcuttingSpots);
	}
	else
	{
		map.addLayer(woodcuttingSpots);
	}
}




map.on('click', function(e) {
	alert(e.latlng);
}) 

</script>

</body>
</html>