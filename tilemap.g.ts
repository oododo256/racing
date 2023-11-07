// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "testtrack":
            case "level1":return tiles.createTilemap(hex`100010000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0a0b0b0b0b0b0b0b0b0b0b0b0b0c0d0d0907070707030e0e0407070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0d09070707070101010107070707080d0b07070707070101010107070707070b0202020202020601010502020202020202020202020202060502020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.skillmap.islandTile4,sprites.skillmap.islandTile5,sprites.skillmap.islandTile3,sprites.skillmap.islandTile0,sprites.skillmap.islandTile1,sprites.skillmap.islandTile2,sprites.castle.tilePath5,sprites.vehicle.roadIntersection3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "track":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
