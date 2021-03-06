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
        iconSize:     [24, 24],
        iconAnchor:   [12, 40],
        popupAnchor:  [0, -32]
    }
});

var altarMarker = new markerObj({iconUrl: 'scripts/leaflet/images/altarmarker.png'});
var npcMarker = new markerObj({iconUrl: 'scripts/leaflet/images/npcmarker.png'});
var farmingMarker = new markerObj({iconUrl: 'scripts/leaflet/images/farmingmarker.png'});
var miningMarker = new markerObj({iconUrl: 'scripts/leaflet/images/miningmarker.png'});
var woodcuttingMarker = new markerObj({iconUrl: 'scripts/leaflet/images/woodcuttingmarker.png'});
var volcanoMarker = new markerObj({iconUrl: 'scripts/leaflet/images/volcanomarker.png'});
var volcano = L.marker([-8.537565, -77.475586], {icon: volcanoMarker}).bindPopup('<b>Inside the Volcano</b><br><br><b>Alchemy</b><br>Fire Altar (12) : -93, 64, 79<br><b>Farming</b><br>Volcanic Hops (50) : 107, 50, -42<br>Nether Wart (70) : -103, 59, -83<br><b>Mining</b><br>Obsidian (55) : 129, 52, 79<br>Netherite (55) : 6, 71, -105<br><b>Woodcutting:</b><br>Demon Wood (70) : -66, 66, 95<br><b>Fishing:</b><br>Lava Eel (52 - Magma Spear) : -41, 61, 97').addTo(map)

// Fishing Icons //

var sardineIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/sardineicon.png'});
var anglerIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/angler_fish_0.png'});
var catfishIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/catfish_0.png'});
var clownfishIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/clownfish_0.png'});
var codIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/cod_0.png'});
var flounderIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/flounder_0.png'});
var giantcrabIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/giant_crab_0.png'});
var snailIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/giant_snail_0.png'});
var goliathGrouperIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/goliath_grouper_0.png'});
var jellyfishIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/jellyfish_0.png'});
var mantaRayIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/manta_ray_0.png'});
var picklefishIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/picklefish_0.png'});
var seaSnakeIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/sea_snake_0.png'});
var seaTurtleIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/sea_turtle_0.png'});
var seaHorseIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/seahorse_0.png'});
var sharkIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/shark_0.png'});
var troutIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/trout_0.png'});
var tunaIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/tuna_0.png'});
var salmonIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/salmon_0.png'});
var stoneClamIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/stone_clam_0.png'});
var stoneCrabIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/stone_crab_0.png'});
var starfishIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/starfish_0.png'});
var squidIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/squid_0.png'});
var oysterIcon = new markerObj({iconUrl: 'scripts/leaflet/images/fishing/oyster_0.png'});

//                //
// Fishing Markers//
//                //

var wishingWell1 = L.marker([-36.438961, -10.546875]).bindPopup('<b>Wishing Well - Net (1)</b>'),
	squidMarker1 = L.marker([-40.279526, -6.745605],{icon: squidIcon}).bindPopup('<b>Squid - Spear (23)</b>'),
	shrimpOyster1 = L.marker([-40.313043, -11.228027],{icon: oysterIcon}).bindPopup('<b>Shrimp - Net (8) <br>Oyster - Net (15)</b>'),
	sardineFlounderCod1 = L.marker([-36.527295, -0.043945],{icon: sardineIcon}).bindPopup('<b>Sardine - Net (1) <br>Flounder - Rod (3)<br>Cod - Rod (12)'),
	trout1 = L.marker([-19.331878, 41.638184],{icon: troutIcon}).bindPopup('<b>Trout - Hand (18)</b>'),
	salmon1 = L.marker([5.57225, 56.57959],{icon: salmonIcon}).bindPopup('<b>Salmon - Rod (27)</b>'),
	stoneClam1 = L.marker([3.425692, 37.155762],{icon: stoneClamIcon}).bindPopup('<b>Stone Clam - Net (5)</b>'),
	tuna1 = L.marker([10.422988, 8.393555],{icon: tunaIcon}).bindPopup('<b>Tuna - Rod (50)</b>'),
	starfishsnake = L.marker([15.135764, 17.182617],{icon: starfishIcon}).bindPopup('<b>Starfish - Net (43)<br>Sea Snake - Rod (48)</b>'),
	stonecrab = L.marker([17.014768, 46.999512],{icon: stoneCrabIcon}).bindPopup('<b>Stone Crab - Net (10)</b>'),
	picklefish1 = L.marker([-14.392118, 17.29248],{icon: picklefishIcon}).bindPopup('<b>Picklefish - Rod (20)</b>'),
	catfish1 = L.marker([10.617418, 59.282227],{icon: catfishIcon}).bindPopup('<b>Catfish - Hand (33)</b>'),
	giantsnail1 = L.marker([27.664069, 23.532715],{icon: snailIcon}).bindPopup('<b>Giant Snail - Spear (45)</b>'),
	clownfishseahorse= L.marker([24.866503, 39.858398],{icon: clownfishIcon}	).bindPopup('<b>Clownfish - Rod (30)<br>Seahorse - Net (39)</b>'),
	urchincrab = L.marker([25.720735, 43.92334],{icon: giantcrabIcon}).bindPopup('<b>Urchin - Net (36)<br>Giant Crab - Spear (55)</b>'),
	angler1 = L.marker([3.469557, -62.775879],{icon: anglerIcon}).bindPopup('<b>Anglerfish - Net (70)</b>'),
	seaturtle1 = L.marker([36.914764, 44.934082],{icon: seaTurtleIcon}).bindPopup('<b>Sea Turtle - Rod (59)</b>'),
	pufferfish1 = L.marker([-16.551962, -84.331055]).bindPopup('<b>Pufferfish - Spear (40)</b>'),
	mantaray1 = L.marker([-25.085599, -45.856934],{icon: mantaRayIcon}).bindPopup('<b>Manta Ray - Spear (65)</b>'),
	jellyfish1 = L.marker([4.149201, -69.851074],{icon: jellyfishIcon}).bindPopup('<b>Jellyfish - Net (68)</b>'),
	goliathgrouper = L.marker([-1.34021, 43.637695],{icon: goliathGrouperIcon}).bindPopup('<b>Goliath Grouper - Hand (73)</b>')

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
	alchemyTable = L.marker([1.34021, 24.213867], {icon: altarMarker}).bindPopup('<b>Alchemy Table</b>')
	enchantmentTable = L.marker([-2.723583, 4.768066], {icon: altarMarker}).bindPopup('<b>Enchantment Table</b>')

//                //
// Mining Markers //
//                //
var copper1 = L.marker([-20.097206, -21.862793], {icon: miningMarker}).bindPopup('<b>Copper (1)</b>'),
	tin1 = L.marker([-20.715015, -24.873047], {icon: miningMarker}).bindPopup('<b>Tin (1)</b>'),
	salt1 = L.marker([-20.653346, 25.224609], {icon: miningMarker}).bindPopup('<b>Salt (23)</b>'),
	clay1 = L.marker([-20.324024, 27.333984], {icon: miningMarker}).bindPopup('<b>Clay (3)</b>'),
	coalironmithril = L.marker([-17.539297, -24.411621], {icon: miningMarker}).bindPopup('<b>Coal (12)<br>Iron (5)<br>Mithril (30)</b>'),
	sand1 = L.marker([-0.109863, -4.152832], {icon: miningMarker}).bindPopup('<b>Sand (8)</b>'),
	runeEssence1 = L.marker([-12.01783, 23.620605], {icon: miningMarker}).bindPopup('<b>Rune Essence (10)</b>'),
	nickelrhodonite = L.marker([-9.579084, 5.756836], {icon: miningMarker}).bindPopup('<b>Nickel (15)<br>Rhodonite (20)</b>'),
	silvergold = L.marker([25.065697, -10.019531], {icon: miningMarker}).bindPopup('<b>Silver (18)<br>Gold (40)</b>'),
	ice1 = L.marker([-12.039321, -6.108398], {icon: miningMarker}).bindPopup('<b>Ice (35)</b>'),
	crimson1 = L.marker([-14.881087, -69.279785], {icon: miningMarker}).bindPopup('<b>Crimson (45)</b>'),
	adamantium1 = L.marker([1.230374, 57.458496], {icon: miningMarker}).bindPopup('<b>Adamantium (40)</b>')

//                //
//Farming Markers //
//                //

var oranges = L.marker([-35.782171, -20.632324], {icon: farmingMarker}).bindPopup('<b>Oranges - Hand (10)</b>');

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

var fishingSpots = L.layerGroup([wishingWell1, 
	squidMarker1, 
	shrimpOyster1,
	sardineFlounderCod1,
	trout1,
	salmon1,
	stoneClam1,
	tuna1,
	starfishsnake,
	stonecrab,
	picklefish1,
	catfish1,
	giantsnail1,
	clownfishseahorse,
	urchincrab,
	angler1,
	seaturtle1,
	pufferfish1,
	mantaray1,
	jellyfish1,
	goliathgrouper])

var altarSpots = L.layerGroup([cosmicAltar,
	airAltar,
	darkAltar,
	waterAltar,
	earthAltar,
	dreamAltar,
	bloodAltar,
	alchemyTable,
	enchantmentTable
	])


var miningSpots = L.layerGroup([copper1,
	tin1,
	salt1,
	clay1,
	coalironmithril,
	sand1,
	runeEssence1,
	nickelrhodonite,
	silvergold,
	ice1,
	crimson1,
	adamantium1
	])

var farmingSpots = L.layerGroup([oranges

	])


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

    var fishing = document.getElementById("fishingButton"),
    sardine = document.getElementById("sardineButton"),
    well = document.getElementById("wellButton"),
    flounder = document.getElementById("flounderButton"),
    cod = document.getElementById("codButton"),
    stoneClam = document.getElementById("stoneClamButton"),
    squid = document.getElementById("squidButton"),
    oyster = document.getElementById("oysterButton"),
    shrimp = document.getElementById("shrimpButton"),
    trout = document.getElementById("troutButton"),
    salmon = document.getElementById("salmonButton"),
    tuna = document.getElementById("tunaButton"),
    starfish =  document.getElementById("starfishButton"),
    snake = document.getElementById("snakeButton"),
    stoneCrab = document.getElementById("stoneCrabButton"),
    picklefish = document.getElementById("picklefishButton"),
    catfish = document.getElementById("catfishButton"),
    giantsnail = document.getElementById("giantsnailButton"),
    clownfish = document.getElementById("clownfishButton"),
    seahorse = document.getElementById("seahorseButton"),
    urchin = document.getElementById("urchinButton"),
    crab = document.getElementById("crabButton"),
    angler = document.getElementById("anglerButton"),
    seaturtle = document.getElementById("seaturtleButton"),
    pufferfish = document.getElementById("pufferfishButton"),
    mantaray = document.getElementById("mantarayButton"),
    jellyfish = document.getElementById("jellyfishButton"),
    goliath = document.getElementById("goliathButton")

var altar = document.getElementById("altarButton"),
    air = document.getElementById("airButton"),
    apprentice = document.getElementById("apprenticeButton"),
    earth = document.getElementById("earthButton"),
    water = document.getElementById("waterButton"),
    dark = document.getElementById("darkButton"),
    dream = document.getElementById("dreamButton"),
    blood = document.getElementById("bloodButton"),
    alchemy = document.getElementById("alchemyButton"),
    enchantment = document.getElementById("enchantmentButton")

var mining = document.getElementById("miningButton"),
    copper = document.getElementById("copperButton"),
    tin = document.getElementById("tinButton"),
    clay = document.getElementById("clayButton"),
    iron = document.getElementById("ironButton"),
    sand = document.getElementById("sandButton"),
    rune = document.getElementById("runeButton"),
    coal = document.getElementById("coalButton"),
    nickel = document.getElementById("nickelButton"),
    silver = document.getElementById("silverButton"),
    rhodonite = document.getElementById("rhodoniteButton"),
    salt = document.getElementById("saltButton"),
    mithril = document.getElementById("mithrilButton"),
    ice = document.getElementById("iceButton"),
    granite = document.getElementById("graniteButton"),
    adamantium = document.getElementById("adamantiumButton"),
    gold = document.getElementById("goldButton"),
    crimson = document.getElementById("crimsonButton"),
    obsidian = document.getElementById("obsidianButton"),
    netherite = document.getElementById("netheriteButton")

var woodcutting = document.getElementById("woodcuttingButton"),
    log = document.getElementById("logButton"),
    birch = document.getElementById("birchButton"),
    oak = document.getElementById("oakButton"),
    spruce = document.getElementById("spruceButton"),
    willow = document.getElementById("willowButton"),
    acacia = document.getElementById("acaciaButton"),
    dreadknot = document.getElementById("dreadknotButton"),
    mahogany = document.getElementById("mahoganyButton"),
    baobab = document.getElementById("baobabButton"),
    bedlam = document.getElementById("bedlamButton")


function toggleFishing()
{

if (sardine.style.display == 'flex')
{

    flounder.style.display = 'none';
    sardine.style.display = 'none';
    well.style.display = 'none';
    cod.style.display = 'none';
    stoneClam.style.display = 'none';
    squid.style.display = 'none';
    oyster.style.display = 'none';
    shrimp.style.display = 'none';
    trout.style.display = 'none';
    salmon.style.display = 'none';
    tuna.style.display = 'none';
    starfish.style.display = 'none';
    snake.style.display = 'none';
    stoneCrab.style.display = 'none';
    picklefish.style.display = 'none';
    catfish.style.display = 'none';
    giantsnail.style.display = 'none';
    clownfish.style.display = 'none';
    seahorse.style.display = 'none';
    urchin.style.display = 'none';
    crab.style.display = 'none';
    angler.style.display = 'none';
    seaturtle.style.display = 'none';
    pufferfish.style.display = 'none';
    mantaray.style.display = 'none';
    jellyfish.style.display = 'none';
    goliath.style.display = 'none';
    fishing.style.backgroundColor = 'white';
}
else
{
    flounder.style.display = 'flex';
    sardine.style.display = 'flex';	
    well.style.display = 'flex';
    cod.style.display = 'flex';
    stoneClam.style.display = 'flex';
    squid.style.display = 'flex';
    oyster.style.display = 'flex';
    shrimp.style.display = 'flex';
    trout.style.display = 'flex';
    salmon.style.display = 'flex';
    tuna.style.display = 'flex';
    starfish.style.display = 'flex';
    snake.style.display = 'flex';
    stoneCrab.style.display = 'flex';
    picklefish.style.display = 'flex';
    catfish.style.display = 'flex';
    giantsnail.style.display = 'flex';
    clownfish.style.display = 'flex';
    seahorse.style.display = 'flex';
    urchin.style.display = 'flex';
    crab.style.display = 'flex';
    angler.style.display = 'flex';
    seaturtle.style.display = 'flex';
    pufferfish.style.display = 'flex';
    mantaray.style.display = 'flex';
    jellyfish.style.display = 'flex';
    goliath.style.display = 'flex';
    fishing.style.backgroundColor = 'rgb(28, 172, 120)';

    air.style.display = 'none';
    apprentice.style.display = 'none';
    earth.style.display = 'none';
    water.style.display = 'none';
    dark.style.display = 'none';
    dream.style.display = 'none';
    blood.style.display = 'none';
    alchemy.style.display = 'none';
    enchantment.style.display = 'none';
    altar.style.backgroundColor = 'rgb(255, 255, 255)';

    copper.style.display = 'none';
    tin.style.display = 'none';
    clay.style.display = 'none';
    iron.style.display = 'none';
    sand.style.display = 'none';
    rune.style.display = 'none';
    coal.style.display = 'none';
    nickel.style.display = 'none';
    silver.style.display = 'none';
    rhodonite.style.display = 'none';
    salt.style.display = 'none';
    mithril.style.display = 'none';
    ice.style.display = 'none';
    adamantium.style.display = 'none';
    gold.style.display = 'none';
    crimson.style.display = 'none';


    mining.style.backgroundColor = 'white';

    log.style.display = 'none';
    birch.style.display = 'none';
    oak.style.display = 'none';
    spruce.style.display = 'none';
    willow.style.display = 'none';
    acacia.style.display = 'none';
    dreadknot.style.display = 'none';
    mahogany.style.display = 'none';
    baobab.style.display = 'none';
    bedlam.style.display = 'none';

    woodcutting.style.backgroundColor = 'white';
}
//if(map.hasLayer(fishingSpots))
//{
//	map.removeLayer(fishingSpots);
//}
//else
//{
//	map.addLayer(fishingSpots);
//}
}

function toggleAltar()
{
if (air.style.display == 'flex')
{
    air.style.display = 'none';
    apprentice.style.display = 'none';
    earth.style.display = 'none';
    water.style.display = 'none';
    dark.style.display = 'none';
    dream.style.display = 'none';
    blood.style.display = 'none';
    alchemy.style.display = 'none';
    enchantment.style.display = 'none';

    altar.style.backgroundColor = 'white';
}
else
{
    air.style.display = 'flex';
    apprentice.style.display = 'flex';
    earth.style.display = 'flex';
    water.style.display = 'flex';
    dark.style.display = 'flex';
    dream.style.display = 'flex';
    blood.style.display = 'flex';
    alchemy.style.display = 'flex';
    enchantment.style.display = 'flex';

    altar.style.backgroundColor = 'rgb(28, 172, 120)';

    //fishing
    flounder.style.display = 'none';
    sardine.style.display = 'none';
    well.style.display = 'none';
    cod.style.display = 'none';
    stoneClam.style.display = 'none';
    squid.style.display = 'none';
    oyster.style.display = 'none';
    shrimp.style.display = 'none';
    trout.style.display = 'none';
    salmon.style.display = 'none';
    tuna.style.display = 'none';
    starfish.style.display = 'none';
    snake.style.display = 'none';
    stoneCrab.style.display = 'none';
    picklefish.style.display = 'none';
    catfish.style.display = 'none';
    giantsnail.style.display = 'none';
    clownfish.style.display = 'none';
    seahorse.style.display = 'none';
    urchin.style.display = 'none';
    crab.style.display = 'none';
    angler.style.display = 'none';
    seaturtle.style.display = 'none';
    pufferfish.style.display = 'none';
    mantaray.style.display = 'none';
    jellyfish.style.display = 'none';
    goliath.style.display = 'none';
    fishing.style.backgroundColor = 'rgb(255, 255, 255)';

    copper.style.display = 'none';
    tin.style.display = 'none';
    clay.style.display = 'none';
    iron.style.display = 'none';
    sand.style.display = 'none';
    rune.style.display = 'none';
    coal.style.display = 'none';
    nickel.style.display = 'none';
    silver.style.display = 'none';
    rhodonite.style.display = 'none';
    salt.style.display = 'none';
    mithril.style.display = 'none';
    ice.style.display = 'none';
    adamantium.style.display = 'none';
    gold.style.display = 'none';
    crimson.style.display = 'none';


    mining.style.backgroundColor = 'white';

    log.style.display = 'none';
    birch.style.display = 'none';
    oak.style.display = 'none';
    spruce.style.display = 'none';
    willow.style.display = 'none';
    acacia.style.display = 'none';
    dreadknot.style.display = 'none';
    mahogany.style.display = 'none';
    baobab.style.display = 'none';
    bedlam.style.display = 'none';

    woodcutting.style.backgroundColor = 'white';

}

//if(map.hasLayer(altarSpots))
//{
//	map.removeLayer(altarSpots);
//}
//else
//{
//	map.addLayer(altarSpots);
//}
}

function toggleAir()
{
var airB = document.getElementById("airButton")
if(map.hasLayer(airAltar))
{
    airB.style.backgroundColor = 'white';
    map.removeLayer(airAltar);		
}
else
{
    airB.style.backgroundColor = 'rgb(28,172,120)';
    airAltar.addTo(map);
}
}

function toggleApprentice()
{
var apprenticeB = document.getElementById("apprenticeButton")
if(map.hasLayer(cosmicAltar))
{
    apprenticeB.style.backgroundColor = 'white';
    map.removeLayer(cosmicAltar);		
}
else
{
    apprenticeB.style.backgroundColor = 'rgb(28,172,120)';
    cosmicAltar.addTo(map);
}
}

function toggleEarth()
{
var earthB = document.getElementById("earthButton")
if(map.hasLayer(earthAltar))
{
    earthB.style.backgroundColor = 'white';
    map.removeLayer(earthAltar);		
}
else
{
    earthB.style.backgroundColor = 'rgb(28,172,120)';
    earthAltar.addTo(map);
}
}

function toggleWater()
{
var waterB = document.getElementById("waterButton")
if(map.hasLayer(waterAltar))
{
    waterB.style.backgroundColor = 'white';
    map.removeLayer(waterAltar);		
}
else
{
    waterB.style.backgroundColor = 'rgb(28,172,120)';
    waterAltar.addTo(map);
}
}

function toggleDark()
{
var darkB = document.getElementById("darkButton")
if(map.hasLayer(darkAltar))
{
    darkB.style.backgroundColor = 'white';
    map.removeLayer(darkAltar);		
}
else
{
    darkB.style.backgroundColor = 'rgb(28,172,120)';
    darkAltar.addTo(map);
}
}

function toggleDream()
{
var dreamB = document.getElementById("dreamButton")
if(map.hasLayer(dreamAltar))
{
    dreamB.style.backgroundColor = 'white';
    map.removeLayer(dreamAltar);		
}
else
{
    dreamB.style.backgroundColor = 'rgb(28,172,120)';
    dreamAltar.addTo(map);
}
}

function toggleBlood()
{
var bloodB = document.getElementById("bloodButton")
if(map.hasLayer(bloodAltar))
{
    bloodB.style.backgroundColor = 'white';
    map.removeLayer(bloodAltar);		
}
else
{
    bloodB.style.backgroundColor = 'rgb(28,172,120)';
    bloodAltar.addTo(map);
}
}

function toggleAlchemy()
{
var alchemyB = document.getElementById("alchemyButton")
if(map.hasLayer(alchemyTable))
{
    alchemyB.style.backgroundColor = 'white';
    map.removeLayer(alchemyTable);		
}
else
{
    alchemyB.style.backgroundColor = 'rgb(28,172,120)';
    alchemyTable.addTo(map);
}
}

function toggleEnchantment()
{
var enchantmentB = document.getElementById("enchantmentButton")
if(map.hasLayer(enchantmentTable))
{
    enchantmentB.style.backgroundColor = 'white';
    map.removeLayer(enchantmentTable);		
}
else
{
    enchantmentB.style.backgroundColor = 'rgb(28,172,120)';
    enchantmentTable.addTo(map);
}
}

function toggleMining()
{
if (copper.style.display == 'flex')
{
    copper.style.display = 'none';
    tin.style.display = 'none';
    clay.style.display = 'none';
    iron.style.display = 'none';
    sand.style.display = 'none';
    rune.style.display = 'none';
    coal.style.display = 'none';
    nickel.style.display = 'none';
    silver.style.display = 'none';
    rhodonite.style.display = 'none';
    salt.style.display = 'none';
    mithril.style.display = 'none';
    ice.style.display = 'none';
    adamantium.style.display = 'none';
    gold.style.display = 'none';
    crimson.style.display = 'none';


    mining.style.backgroundColor = 'white';
}
else
{
    copper.style.display = 'flex';
    tin.style.display = 'flex';
    clay.style.display = 'flex';
    iron.style.display = 'flex';
    sand.style.display = 'flex';
    rune.style.display = 'flex';
    coal.style.display = 'flex';
    nickel.style.display = 'flex';
    silver.style.display = 'flex';
    rhodonite.style.display = 'flex';
    salt.style.display = 'flex';
    mithril.style.display = 'flex';
    ice.style.display = 'flex';
    adamantium.style.display = 'flex';
    gold.style.display = 'flex';
    crimson.style.display = 'flex';

    mining.style.backgroundColor = 'rgb(28, 172, 120)';

    flounder.style.display = 'none';
    sardine.style.display = 'none';
    well.style.display = 'none';
    cod.style.display = 'none';
    stoneClam.style.display = 'none';
    squid.style.display = 'none';
    oyster.style.display = 'none';
    shrimp.style.display = 'none';
    trout.style.display = 'none';
    salmon.style.display = 'none';
    tuna.style.display = 'none';
    starfish.style.display = 'none';
    snake.style.display = 'none';
    stoneCrab.style.display = 'none';
    picklefish.style.display = 'none';
    catfish.style.display = 'none';
    giantsnail.style.display = 'none';
    clownfish.style.display = 'none';
    seahorse.style.display = 'none';
    urchin.style.display = 'none';
    crab.style.display = 'none';
    angler.style.display = 'none';
    seaturtle.style.display = 'none';
    pufferfish.style.display = 'none';
    mantaray.style.display = 'none';
    jellyfish.style.display = 'none';
    goliath.style.display = 'none';
    fishing.style.backgroundColor = 'rgb(255, 255, 255)';

    air.style.display = 'none';
    apprentice.style.display = 'none';
    earth.style.display = 'none';
    water.style.display = 'none';
    dark.style.display = 'none';
    dream.style.display = 'none';
    blood.style.display = 'none';
    alchemy.style.display = 'none';
    enchantment.style.display = 'none';

    altar.style.backgroundColor = 'white';

    log.style.display = 'none';
    birch.style.display = 'none';
    oak.style.display = 'none';
    spruce.style.display = 'none';
    willow.style.display = 'none';
    acacia.style.display = 'none';
    dreadknot.style.display = 'none';
    mahogany.style.display = 'none';
    baobab.style.display = 'none';
    bedlam.style.display = 'none';

    woodcutting.style.backgroundColor = 'white';
}
}


function toggleMithril()
{
var mithril = document.getElementById("mithrilButton")
ironButtonColor = getComputedStyle(document.getElementById("ironButton")).backgroundColor
mithrilButtonColor = getComputedStyle(document.getElementById("mithrilButton")).backgroundColor
coalButtonColor = getComputedStyle(document.getElementById("coalButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make mithril green and add layer
if(ironButtonColor == 'rgb(255, 255, 255)' && mithrilButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(coalironmithril) == false)
{
    mithril.style.backgroundColor = 'rgb(28,172,120)';
    coalironmithril.addTo(map);
}
//if maplayer exists and iron is green, just make mithril green
if(map.hasLayer(coalironmithril))
{
    mithril.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make mithril white
if(map.hasLayer(coalironmithril) && mithrilButtonColor == 'rgb(28, 172, 120)' && coalButtonColor == 'rgb(28, 172, 120)' || mithrilButtonColor == 'rgb(28, 172, 120)' && ironButtonColor == 'rgb(28, 172, 120)')
{
    mithril.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, iron is white, but mithril is green. Remove Layer.
if(map.hasLayer(coalironmithril) && coalButtonColor == 'rgb(255, 255, 255)' && mithrilButtonColor == 'rgb(28, 172, 120)' && ironButtonColor == 'rgb(255, 255, 255)')
{
    mithril.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(coalironmithril)
}
}

function toggleIron()
{
var iron = document.getElementById("ironButton")
ironButtonColor = getComputedStyle(document.getElementById("ironButton")).backgroundColor
mithrilButtonColor = getComputedStyle(document.getElementById("mithrilButton")).backgroundColor
coalButtonColor = getComputedStyle(document.getElementById("coalButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make iron green and add layer
if(ironButtonColor == 'rgb(255, 255, 255)' && mithrilButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(coalironmithril) == false)
{
    iron.style.backgroundColor = 'rgb(28,172,120)';
    coalironmithril.addTo(map);
}
//if maplayer exists and mithril is green, just make iron green
if(map.hasLayer(coalironmithril))
{
    iron.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make iron white
if(map.hasLayer(coalironmithril) && coalButtonColor == 'rgb(28, 172, 120)' && ironButtonColor == 'rgb(28, 172, 120)' || mithrilButtonColor == 'rgb(28, 172, 120)' && ironButtonColor == 'rgb(28, 172, 120)')
{
    iron.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, mithril is white, but iron is green. Remove Layer.
    if(map.hasLayer(coalironmithril) && mithrilButtonColor == 'rgb(255, 255, 255)' && ironButtonColor == 'rgb(28, 172, 120)' && coalButtonColor == 'rgb(255, 255, 255)')
{
    iron.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(coalironmithril)
}
}

function toggleCoal()
{
var coal = document.getElementById("coalButton")
ironButtonColor = getComputedStyle(document.getElementById("ironButton")).backgroundColor
mithrilButtonColor = getComputedStyle(document.getElementById("mithrilButton")).backgroundColor
coalButtonColor = getComputedStyle(document.getElementById("coalButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make iron green and add layer
if(coalButtonColor == 'rgb(255, 255, 255)' && mithrilButtonColor == 'rgb(255, 255, 255)' || ironButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(coalironmithril) == false)
{
    coal.style.backgroundColor = 'rgb(28,172,120)';
    coalironmithril.addTo(map);
}
//if maplayer exists and mithril is green, just make iron green
if(map.hasLayer(coalironmithril))
{
    coal.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make iron white
if(map.hasLayer(coalironmithril) && ironButtonColor == 'rgb(28, 172, 120)' && coalButtonColor == 'rgb(28, 172, 120)' || mithrilButtonColor == 'rgb(28, 172, 120)' && coalButtonColor == 'rgb(28, 172, 120)')
{
    coal.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, mithril is white, but iron is green. Remove Layer.
    if(map.hasLayer(coalironmithril) && mithrilButtonColor == 'rgb(255, 255, 255)' && coalButtonColor == 'rgb(28, 172, 120)' && ironButtonColor == 'rgb(255, 255, 255)')
{
    coal.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(coalironmithril)
}
}

function toggleCopper()
{
var copperB = document.getElementById("copperButton")
if(map.hasLayer(copper1))
{
    copperB.style.backgroundColor = 'white';
    map.removeLayer(copper1);		
}
else
{
    copperB.style.backgroundColor = 'rgb(28,172,120)';
    copper1.addTo(map);
}
}

function toggleTin()
{
var tinB = document.getElementById("tinButton")
if(map.hasLayer(tin1))
{
    tinB.style.backgroundColor = 'white';
    map.removeLayer(tin1);		
}
else
{
    tinB.style.backgroundColor = 'rgb(28,172,120)';
    tin1.addTo(map);
}
}

function toggleSalt()
{
var saltB = document.getElementById("saltButton")
if(map.hasLayer(salt1))
{
    saltB.style.backgroundColor = 'white';
    map.removeLayer(salt1);		
}
else
{
    saltB.style.backgroundColor = 'rgb(28,172,120)';
    salt1.addTo(map);
}
}

function toggleClay()
{
var clayB = document.getElementById("clayButton")
if(map.hasLayer(clay1))
{
    clayB.style.backgroundColor = 'white';
    map.removeLayer(clay1);		
}
else
{
    clayB.style.backgroundColor = 'rgb(28,172,120)';
    clay1.addTo(map);
}
}

function toggleSand()
{
var sandB = document.getElementById("sandButton")
if(map.hasLayer(sand1))
{
    sandB.style.backgroundColor = 'white';
    map.removeLayer(sand1);		
}
else
{
    sandB.style.backgroundColor = 'rgb(28,172,120)';
    sand1.addTo(map);
}
}

function toggleRune()
{
var runeB = document.getElementById("runeButton")
if(map.hasLayer(runeEssence1))
{
    runeB.style.backgroundColor = 'white';
    map.removeLayer(runeEssence1);		
}
else
{
    runeB.style.backgroundColor = 'rgb(28,172,120)';
    runeEssence1.addTo(map);
}
}

function toggleIce()
{
var iceB = document.getElementById("iceButton")
if(map.hasLayer(ice1))
{
    iceB.style.backgroundColor = 'white';
    map.removeLayer(ice1);		
}
else
{
    iceB.style.backgroundColor = 'rgb(28,172,120)';
    ice1.addTo(map);
}
}

function toggleCrimson()
{
var crimsonB = document.getElementById("crimsonButton")
if(map.hasLayer(crimson1))
{
    crimsonB.style.backgroundColor = 'white';
    map.removeLayer(crimson1);		
}
else
{
    crimsonB.style.backgroundColor = 'rgb(28,172,120)';
    crimson1.addTo(map);
}
}

function toggleAdamantium()
{
var adamantiumB = document.getElementById("adamantiumButton")
if(map.hasLayer(adamantium1))
{
    adamantiumB.style.backgroundColor = 'white';
    map.removeLayer(adamantium1);		
}
else
{
    adamantiumB.style.backgroundColor = 'rgb(28,172,120)';
    adamantium1.addTo(map);
}
}

function toggleNickel()
{
var nickel = document.getElementById("nickelButton")
nickelButtonColor = getComputedStyle(document.getElementById("nickelButton")).backgroundColor
rhodoniteButtonColor = getComputedStyle(document.getElementById("rhodoniteButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(nickelButtonColor == 'rgb(255, 255, 255)' && rhodoniteButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(nickelrhodonite) == false)
{
    nickel.style.backgroundColor = 'rgb(28,172,120)';
    nickelrhodonite.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(nickelrhodonite))
{
    nickel.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(nickelrhodonite) && nickelButtonColor == 'rgb(28, 172, 120)' && rhodoniteButtonColor == 'rgb(28, 172, 120)')
{
    nickel.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(nickelrhodonite) && rhodoniteButtonColor == 'rgb(255, 255, 255)' && nickelButtonColor == 'rgb(28, 172, 120)')
{
    nickel.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(nickelrhodonite)
}
}

function toggleRhodonite()
{
var rhodonite = document.getElementById("rhodoniteButton")
nickelButtonColor = getComputedStyle(document.getElementById("nickelButton")).backgroundColor
rhodoniteButtonColor = getComputedStyle(document.getElementById("rhodoniteButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(rhodoniteButtonColor == 'rgb(255, 255, 255)' && nickelButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(nickelrhodonite) == false)
{
    rhodonite.style.backgroundColor = 'rgb(28,172,120)';
    nickelrhodonite.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(nickelrhodonite))
{
    rhodonite.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(nickelrhodonite) && rhodoniteButtonColor == 'rgb(28, 172, 120)' && nickelButtonColor == 'rgb(28, 172, 120)')
{
    rhodonite.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(nickelrhodonite) && nickelButtonColor == 'rgb(255, 255, 255)' && rhodoniteButtonColor == 'rgb(28, 172, 120)')
{
    rhodonite.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(nickelrhodonite)
}
}

function toggleSilver()
{
var silver = document.getElementById("silverButton")
silverButtonColor = getComputedStyle(document.getElementById("silverButton")).backgroundColor
goldButtonColor = getComputedStyle(document.getElementById("goldButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(silverButtonColor == 'rgb(255, 255, 255)' && goldButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(silvergold) == false)
{
    silver.style.backgroundColor = 'rgb(28,172,120)';
    silvergold.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(silvergold))
{
    silver.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(silvergold) && silverButtonColor == 'rgb(28, 172, 120)' && goldButtonColor == 'rgb(28, 172, 120)')
{
    silver.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(silvergold) && goldButtonColor == 'rgb(255, 255, 255)' && silverButtonColor == 'rgb(28, 172, 120)')
{
    silver.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(silvergold)
}
}

function toggleGold()
{
var gold = document.getElementById("goldButton")
silverButtonColor = getComputedStyle(document.getElementById("silverButton")).backgroundColor
goldButtonColor = getComputedStyle(document.getElementById("goldButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(goldButtonColor == 'rgb(255, 255, 255)' && silverButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(silvergold) == false)
{
    gold.style.backgroundColor = 'rgb(28,172,120)';
    silvergold.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(silvergold))
{
    gold.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(silvergold) && goldButtonColor == 'rgb(28, 172, 120)' && silverButtonColor == 'rgb(28, 172, 120)')
{
    gold.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(silvergold) && silverButtonColor == 'rgb(255, 255, 255)' && goldButtonColor == 'rgb(28, 172, 120)')
{
    gold.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(silvergold)
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
if (log.style.display == 'flex')
{
    log.style.display = 'none';
    birch.style.display = 'none';
    oak.style.display = 'none';
    spruce.style.display = 'none';
    willow.style.display = 'none';
    acacia.style.display = 'none';
    dreadknot.style.display = 'none';
    mahogany.style.display = 'none';
    baobab.style.display = 'none';
    bedlam.style.display = 'none';

    woodcutting.style.backgroundColor = 'white';
}
else
{
    log.style.display = 'flex';
    birch.style.display = 'flex';
    oak.style.display = 'flex';
    spruce.style.display = 'flex';
    willow.style.display = 'flex';
    acacia.style.display = 'flex';
    dreadknot.style.display = 'flex';
    mahogany.style.display = 'flex';
    baobab.style.display = 'flex';
    bedlam.style.display = 'flex';

    woodcutting.style.backgroundColor = 'rgb(28, 172, 120)';

    copper.style.display = 'none';
    tin.style.display = 'none';
    clay.style.display = 'none';
    iron.style.display = 'none';
    sand.style.display = 'none';
    rune.style.display = 'none';
    coal.style.display = 'none';
    nickel.style.display = 'none';
    silver.style.display = 'none';
    rhodonite.style.display = 'none';
    salt.style.display = 'none';
    mithril.style.display = 'none';
    ice.style.display = 'none';
    adamantium.style.display = 'none';
    gold.style.display = 'none';
    crimson.style.display = 'none';


    mining.style.backgroundColor = 'white';

    flounder.style.display = 'none';
    sardine.style.display = 'none';
    well.style.display = 'none';
    cod.style.display = 'none';
    stoneClam.style.display = 'none';
    squid.style.display = 'none';
    oyster.style.display = 'none';
    shrimp.style.display = 'none';
    trout.style.display = 'none';
    salmon.style.display = 'none';
    tuna.style.display = 'none';
    starfish.style.display = 'none';
    snake.style.display = 'none';
    stoneCrab.style.display = 'none';
    picklefish.style.display = 'none';
    catfish.style.display = 'none';
    giantsnail.style.display = 'none';
    clownfish.style.display = 'none';
    seahorse.style.display = 'none';
    urchin.style.display = 'none';
    crab.style.display = 'none';
    angler.style.display = 'none';
    seaturtle.style.display = 'none';
    pufferfish.style.display = 'none';
    mantaray.style.display = 'none';
    jellyfish.style.display = 'none';
    goliath.style.display = 'none';
    fishing.style.backgroundColor = 'rgb(255, 255, 255)';

    air.style.display = 'none';
    apprentice.style.display = 'none';
    earth.style.display = 'none';
    water.style.display = 'none';
    dark.style.display = 'none';
    dream.style.display = 'none';
    blood.style.display = 'none';
    alchemy.style.display = 'none';
    enchantment.style.display = 'none';

    altar.style.backgroundColor = 'white';
}

}

function toggleLog()
{
var logB = document.getElementById("logButton")
if(map.hasLayer(log1))
{
    logB.style.backgroundColor = 'white';
    map.removeLayer(log1);		
}
else
{
    logB.style.backgroundColor = 'rgb(28,172,120)';
    log1.addTo(map);
}
}

function toggleBirch()
{
var birchB = document.getElementById("birchButton")
if(map.hasLayer(birch1))
{
    birchB.style.backgroundColor = 'white';
    map.removeLayer(birch1);		
}
else
{
    birchB.style.backgroundColor = 'rgb(28,172,120)';
    birch1.addTo(map);
}
}

function toggleOak()
{
var oakB = document.getElementById("oakButton")
if(map.hasLayer(oak1))
{
    oakB.style.backgroundColor = 'white';
    map.removeLayer(oak1);		
}
else
{
    oakB.style.backgroundColor = 'rgb(28,172,120)';
    oak1.addTo(map);
}
}

function toggleSpruce()
{
var spruceB = document.getElementById("spruceButton")
if(map.hasLayer(spruce1))
{
    spruceB.style.backgroundColor = 'white';
    map.removeLayer(spruce1);		
}
else
{
    spruceB.style.backgroundColor = 'rgb(28,172,120)';
    spruce1.addTo(map);
}
}

function toggleWillow()
{
var willowB = document.getElementById("willowButton")
if(map.hasLayer(willow1))
{
    willowB.style.backgroundColor = 'white';
    map.removeLayer(willow1);		
}
else
{
    willowB.style.backgroundColor = 'rgb(28,172,120)';
    willow1.addTo(map);
}
}

function toggleAcacia()
{
var acaciaB = document.getElementById("acaciaButton")
if(map.hasLayer(acacia1))
{
    acaciaB.style.backgroundColor = 'white';
    map.removeLayer(acacia1);		
}
else
{
    acaciaB.style.backgroundColor = 'rgb(28,172,120)';
    acacia1.addTo(map);
}
}

function toggleDreadknot()
{
var dreadknotB = document.getElementById("dreadknotButton")
if(map.hasLayer(dreadknot1))
{
    dreadknotB.style.backgroundColor = 'white';
    map.removeLayer(dreadknot1);		
}
else
{
    dreadknotB.style.backgroundColor = 'rgb(28,172,120)';
    dreadknot1.addTo(map);
}
}

function toggleMahogany()
{
var mahoganyB = document.getElementById("mahoganyButton")
if(map.hasLayer(mahogany1))
{
    mahoganyB.style.backgroundColor = 'white';
    map.removeLayer(mahogany1);		
}
else
{
    mahoganyB.style.backgroundColor = 'rgb(28,172,120)';
    mahogany1.addTo(map);
}
}

function toggleBaobab()
{
var baobabB = document.getElementById("baobabButton")
if(map.hasLayer(baobab1))
{
    baobabB.style.backgroundColor = 'white';
    map.removeLayer(baobab1);		
}
else
{
    baobabB.style.backgroundColor = 'rgb(28,172,120)';
    baobab1.addTo(map);
}
}

function toggleBedlam()
{
var bedlamB = document.getElementById("bedlamButton")
if(map.hasLayer(bedlam1))
{
    bedlamB.style.backgroundColor = 'white';
    map.removeLayer(bedlam1);		
}
else
{
    bedlamB.style.backgroundColor = 'rgb(28,172,120)';
    bedlam1.addTo(map);
}
}

function toggleTuna()
{
var tunaB = document.getElementById("tunaButton")
if(map.hasLayer(tuna1))
{
    tunaB.style.backgroundColor = 'white';
    map.removeLayer(tuna1);		
}
else
{
    tunaB.style.backgroundColor = 'rgb(28,172,120)';
    tuna1.addTo(map);
}
}

function toggleGoliath()
{
var goliathB = document.getElementById("goliathButton")
if(map.hasLayer(goliathgrouper))
{
    goliathB.style.backgroundColor = 'white';
    map.removeLayer(goliathgrouper);		
}
else
{
    goliathB.style.backgroundColor = 'rgb(28,172,120)';
    goliathgrouper.addTo(map);
}
}

function toggleMantaray()
{
var mantarayB = document.getElementById("mantarayButton")
if(map.hasLayer(mantaray1))
{
    mantarayB.style.backgroundColor = 'white';
    map.removeLayer(mantaray1);		
}
else
{
    mantarayB.style.backgroundColor = 'rgb(28,172,120)';
    mantaray1.addTo(map);
}
}

function togglePufferfish()
{
var pufferfishB = document.getElementById("pufferfishButton")
if(map.hasLayer(pufferfish1))
{
    pufferfishB.style.backgroundColor = 'white';
    map.removeLayer(pufferfish1);		
}
else
{
    pufferfishB.style.backgroundColor = 'rgb(28,172,120)';
    pufferfish1.addTo(map);
}
}


function toggleJellyfish()
{
var jellyfishB = document.getElementById("jellyfishButton")
if(map.hasLayer(jellyfish1))
{
    jellyfishB.style.backgroundColor = 'white';
    map.removeLayer(jellyfish1);		
}
else
{
    jellyfishB.style.backgroundColor = 'rgb(28,172,120)';
    jellyfish1.addTo(map);
}
}

function toggleSeaturtle()
{
var seaturtleB = document.getElementById("seaturtleButton")
if(map.hasLayer(seaturtle1))
{
    seaturtleB.style.backgroundColor = 'white';
    map.removeLayer(seaturtle1);		
}
else
{
    seaturtleB.style.backgroundColor = 'rgb(28,172,120)';
    seaturtle1.addTo(map);
}
}


function toggleAngler()
{
var anglerB = document.getElementById("anglerButton")
if(map.hasLayer(angler1))
{
    anglerB.style.backgroundColor = 'white';
    map.removeLayer(angler1);		
}
else
{
    anglerB.style.backgroundColor = 'rgb(28,172,120)';
    angler1.addTo(map);
}
}

function togglegiantSnail()
{
var giantsnailB = document.getElementById("giantsnailButton")
if(map.hasLayer(giantsnail1))
{
    giantsnailB.style.backgroundColor = 'white';
    map.removeLayer(giantsnail1);		
}
else
{
    giantsnailB.style.backgroundColor = 'rgb(28,172,120)';
    giantsnail1.addTo(map);
}
}

function togglePicklefish()
{
var picklefishB = document.getElementById("picklefishButton")
if(map.hasLayer(picklefish1))
{
    picklefishB.style.backgroundColor = 'white';
    map.removeLayer(picklefish1);		
}
else
{
    picklefishB.style.backgroundColor = 'rgb(28,172,120)';
    picklefish1.addTo(map);
}
}

function toggleCatfish()
{
var catfishB = document.getElementById("catfishButton")
if(map.hasLayer(catfish1))
{
    catfishB.style.backgroundColor = 'white';
    map.removeLayer(catfish1);		
}
else
{
    catfishB.style.backgroundColor = 'rgb(28,172,120)';
    catfish1.addTo(map);
}
}

function toggleStoneCrab()
{
var stoneCrabB = document.getElementById("stoneCrabButton")
if(map.hasLayer(stonecrab))
{
    stoneCrabB.style.backgroundColor = 'white';
    map.removeLayer(stonecrab);		
}
else
{
    stoneCrabB.style.backgroundColor = 'rgb(28,172,120)';
    stonecrab.addTo(map);
}
}

function toggleSardine()
{
var sardine = document.getElementById("sardineButton")
flounderButtonColor = getComputedStyle(document.getElementById("flounderButton")).backgroundColor
sardineButtonColor = getComputedStyle(document.getElementById("sardineButton")).backgroundColor
codButtonColor = getComputedStyle(document.getElementById("codButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make sardine green and add layer
if(flounderButtonColor == 'rgb(255, 255, 255)' && sardineButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(sardineFlounderCod1) == false)
{
    sardine.style.backgroundColor = 'rgb(28,172,120)';
    sardineFlounderCod1.addTo(map);
}
//if maplayer exists and flounder is green, just make sardine green
if(map.hasLayer(sardineFlounderCod1))
{
    sardine.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make sardine white
if(map.hasLayer(sardineFlounderCod1) && sardineButtonColor == 'rgb(28, 172, 120)' && codButtonColor == 'rgb(28, 172, 120)' || sardineButtonColor == 'rgb(28, 172, 120)' && flounderButtonColor == 'rgb(28, 172, 120)')
{
    sardine.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, flounder is white, but sardine is green. Remove Layer.
if(map.hasLayer(sardineFlounderCod1) && codButtonColor == 'rgb(255, 255, 255)' && sardineButtonColor == 'rgb(28, 172, 120)' && flounderButtonColor == 'rgb(255, 255, 255)')
{
    sardine.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(sardineFlounderCod1)
}
}

function toggleFlounder()
{
var flounder = document.getElementById("flounderButton")
flounderButtonColor = getComputedStyle(document.getElementById("flounderButton")).backgroundColor
sardineButtonColor = getComputedStyle(document.getElementById("sardineButton")).backgroundColor
codButtonColor = getComputedStyle(document.getElementById("codButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(flounderButtonColor == 'rgb(255, 255, 255)' && sardineButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(sardineFlounderCod1) == false)
{
    flounder.style.backgroundColor = 'rgb(28,172,120)';
    sardineFlounderCod1.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(sardineFlounderCod1))
{
    flounder.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(sardineFlounderCod1) && codButtonColor == 'rgb(28, 172, 120)' && flounderButtonColor == 'rgb(28, 172, 120)' || sardineButtonColor == 'rgb(28, 172, 120)' && flounderButtonColor == 'rgb(28, 172, 120)')
{
    flounder.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(sardineFlounderCod1) && sardineButtonColor == 'rgb(255, 255, 255)' && flounderButtonColor == 'rgb(28, 172, 120)' && codButtonColor == 'rgb(255, 255, 255)')
{
    flounder.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(sardineFlounderCod1)
}
}

function toggleCod()
{
var cod = document.getElementById("codButton")
flounderButtonColor = getComputedStyle(document.getElementById("flounderButton")).backgroundColor
sardineButtonColor = getComputedStyle(document.getElementById("sardineButton")).backgroundColor
codButtonColor = getComputedStyle(document.getElementById("codButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(codButtonColor == 'rgb(255, 255, 255)' && sardineButtonColor == 'rgb(255, 255, 255)' || flounderButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(sardineFlounderCod1) == false)
{
    cod.style.backgroundColor = 'rgb(28,172,120)';
    sardineFlounderCod1.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(sardineFlounderCod1))
{
    cod.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(sardineFlounderCod1) && flounderButtonColor == 'rgb(28, 172, 120)' && codButtonColor == 'rgb(28, 172, 120)' || sardineButtonColor == 'rgb(28, 172, 120)' && codButtonColor == 'rgb(28, 172, 120)')
{
    cod.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(sardineFlounderCod1) && sardineButtonColor == 'rgb(255, 255, 255)' && codButtonColor == 'rgb(28, 172, 120)' && flounderButtonColor == 'rgb(255, 255, 255)')
{
    cod.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(sardineFlounderCod1)
}
}

function toggleWell()
{
var well = document.getElementById("wellButton")
if(map.hasLayer(wishingWell1))
{
    well.style.backgroundColor = 'white';
    map.removeLayer(wishingWell1);		
}
else
{
    well.style.backgroundColor = 'rgb(28,172,120)';
    wishingWell1.addTo(map);
}
}

function toggleTrout()
{
var troutB = document.getElementById("troutButton")
if(map.hasLayer(trout1))
{
    troutB.style.backgroundColor = 'white';
    map.removeLayer(trout1);		
}
else
{
    troutB.style.backgroundColor = 'rgb(28,172,120)';
    trout1.addTo(map);
}
}


function toggleStoneClam()
{
var stoneClam = document.getElementById("stoneClamButton")
if(map.hasLayer(stoneClam1))
{
    stoneClam.style.backgroundColor = 'white';
    map.removeLayer(stoneClam1);		
}
else
{
    stoneClam.style.backgroundColor = 'rgb(28,172,120)';
    stoneClam1.addTo(map);
}
}

function toggleSalmon()
{
var salmonB = document.getElementById("salmonButton")
if(map.hasLayer(salmon1))
{
    salmonB.style.backgroundColor = 'white';
    map.removeLayer(salmon1);		
}
else
{
    salmonB.style.backgroundColor = 'rgb(28,172,120)';
    salmon1.addTo(map);
}
}

function toggleSquid()
{
var squid = document.getElementById("squidButton")
if(map.hasLayer(squidMarker1))
{
    squid.style.backgroundColor = 'white';
    map.removeLayer(squidMarker1);		
}
else
{
    squid.style.backgroundColor = 'rgb(28,172,120)';
    squidMarker1.addTo(map);
}
}

function toggleOyster()
{
var oyster = document.getElementById("oysterButton")
oysterButtonColor = getComputedStyle(document.getElementById("oysterButton")).backgroundColor
shrimpButtonColor = getComputedStyle(document.getElementById("shrimpButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(oysterButtonColor == 'rgb(255, 255, 255)' && shrimpButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(shrimpOyster1) == false)
{
    oyster.style.backgroundColor = 'rgb(28,172,120)';
    shrimpOyster1.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(shrimpOyster1))
{
    oyster.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(shrimpOyster1) && oysterButtonColor == 'rgb(28, 172, 120)' && shrimpButtonColor == 'rgb(28, 172, 120)')
{
    oyster.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(shrimpOyster1) && shrimpButtonColor == 'rgb(255, 255, 255)' && oysterButtonColor == 'rgb(28, 172, 120)')
{
    oyster.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(shrimpOyster1)
}
}

function toggleShrimp()
{
var shrimp = document.getElementById("shrimpButton")
oysterButtonColor = getComputedStyle(document.getElementById("oysterButton")).backgroundColor
shrimpButtonColor = getComputedStyle(document.getElementById("shrimpButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(shrimpButtonColor == 'rgb(255, 255, 255)' && oysterButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(shrimpOyster1) == false)
{
    shrimp.style.backgroundColor = 'rgb(28,172,120)';
    shrimpOyster1.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(shrimpOyster1))
{
    shrimp.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(shrimpOyster1) && shrimpButtonColor == 'rgb(28, 172, 120)' && oysterButtonColor == 'rgb(28, 172, 120)')
{
    shrimp.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(shrimpOyster1) && oysterButtonColor == 'rgb(255, 255, 255)' && shrimpButtonColor == 'rgb(28, 172, 120)')
{
    shrimp.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(shrimpOyster1)
}
}


function toggleClownfish()
{
var clownfish = document.getElementById("clownfishButton")
clownfishButtonColor = getComputedStyle(document.getElementById("clownfishButton")).backgroundColor
seahorseButtonColor = getComputedStyle(document.getElementById("seahorseButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(clownfishButtonColor == 'rgb(255, 255, 255)' && seahorseButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(clownfishseahorse) == false)
{
    clownfish.style.backgroundColor = 'rgb(28,172,120)';
    clownfishseahorse.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(clownfishseahorse))
{
    clownfish.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(clownfishseahorse) && clownfishButtonColor == 'rgb(28, 172, 120)' && seahorseButtonColor == 'rgb(28, 172, 120)')
{
    clownfish.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(clownfishseahorse) && seahorseButtonColor == 'rgb(255, 255, 255)' && clownfishButtonColor == 'rgb(28, 172, 120)')
{
    clownfish.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(clownfishseahorse)
}
}

function toggleSeahorse()
{
var seahorse = document.getElementById("seahorseButton")
clownfishButtonColor = getComputedStyle(document.getElementById("clownfishButton")).backgroundColor
seahorseButtonColor = getComputedStyle(document.getElementById("seahorseButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(seahorseButtonColor == 'rgb(255, 255, 255)' && clownfishButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(clownfishseahorse) == false)
{
    seahorse.style.backgroundColor = 'rgb(28,172,120)';
    clownfishseahorse.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(clownfishseahorse))
{
    seahorse.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(clownfishseahorse) && seahorseButtonColor == 'rgb(28, 172, 120)' && clownfishButtonColor == 'rgb(28, 172, 120)')
{
    seahorse.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(clownfishseahorse) && clownfishButtonColor == 'rgb(255, 255, 255)' && seahorseButtonColor == 'rgb(28, 172, 120)')
{
    seahorse.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(clownfishseahorse)
}
}





function toggleStarfish()
{
var starfishB = document.getElementById("starfishButton")
starfishButtonColor = getComputedStyle(document.getElementById("starfishButton")).backgroundColor
snakeButtonColor = getComputedStyle(document.getElementById("snakeButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(starfishButtonColor == 'rgb(255, 255, 255)' && snakeButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(starfishsnake) == false)
{
    starfishB.style.backgroundColor = 'rgb(28,172,120)';
    starfishsnake.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(starfishsnake))
{
    starfishB.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(starfishsnake) && snakeButtonColor == 'rgb(28, 172, 120)' && starfishButtonColor == 'rgb(28, 172, 120)')
{
    starfishB.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(starfishsnake) && snakeButtonColor == 'rgb(255, 255, 255)' && starfishButtonColor == 'rgb(28, 172, 120)')
{
    starfishB.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(starfishsnake)
}
}

function toggleSnake()
{
var snakeB = document.getElementById("snakeButton")
starfishButtonColor = getComputedStyle(document.getElementById("starfishButton")).backgroundColor
snakeButtonColor = getComputedStyle(document.getElementById("snakeButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(snakeButtonColor == 'rgb(255, 255, 255)' && starfishButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(starfishsnake) == false)
{
    snakeB.style.backgroundColor = 'rgb(28,172,120)';
    starfishsnake.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(starfishsnake))
{
    snakeB.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(starfishsnake) && starfishButtonColor == 'rgb(28, 172, 120)' && snakeButtonColor == 'rgb(28, 172, 120)')
{
    snakeB.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(starfishsnake) && starfishButtonColor == 'rgb(255, 255, 255)' && snakeButtonColor == 'rgb(28, 172, 120)')
{
    snakeB.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(starfishsnake)
}
}


function toggleUrchin()
{
var urchinB = document.getElementById("urchinButton")
urchinButtonColor = getComputedStyle(document.getElementById("urchinButton")).backgroundColor
crabButtonColor = getComputedStyle(document.getElementById("crabButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(urchinButtonColor == 'rgb(255, 255, 255)' && urchinButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(urchincrab) == false)
{
    urchinB.style.backgroundColor = 'rgb(28,172,120)';
    urchincrab.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(urchincrab))
{
    urchinB.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(urchincrab) && crabButtonColor == 'rgb(28, 172, 120)' && urchinButtonColor == 'rgb(28, 172, 120)')
{
    urchinB.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(urchincrab) && crabButtonColor == 'rgb(255, 255, 255)' && urchinButtonColor == 'rgb(28, 172, 120)')
{
    urchinB.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(urchincrab)
}
}

function toggleCrab()
{
var crabB = document.getElementById("crabButton")
urchinButtonColor = getComputedStyle(document.getElementById("urchinButton")).backgroundColor
crabButtonColor = getComputedStyle(document.getElementById("crabButton")).backgroundColor
//if both buttons are white, and maplayer does not exist, make flounder green and add layer
if(urchinButtonColor == 'rgb(255, 255, 255)' && crabButtonColor == 'rgb(255, 255, 255)' && map.hasLayer(urchincrab) == false)
{
    crabB.style.backgroundColor = 'rgb(28,172,120)';
    urchincrab.addTo(map);
}
//if maplayer exists and sardine is green, just make flounder green
if(map.hasLayer(urchincrab))
{
    crabB.style.backgroundColor = 'rgb(28,172,120)';
}
//if maplayer exists and both are green, make flounder white
if(map.hasLayer(urchincrab) && urchinButtonColor == 'rgb(28, 172, 120)' && crabButtonColor == 'rgb(28, 172, 120)')
{
    crabB.style.backgroundColor = 'rgb(255, 255, 255)';
}
//if map layer exists, sardine is white, but flounder is green. Remove Layer.
    if(map.hasLayer(urchincrab) && urchinButtonColor == 'rgb(255, 255, 255)' && crabButtonColor == 'rgb(28, 172, 120)')
{
    crabB.style.backgroundColor = 'rgb(255, 255, 255)'
    map.removeLayer(urchincrab)
}
}




map.on('click', function(e) {
alert(e.latlng);
}) 