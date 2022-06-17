export {};
/**
 * @swagger
 * components:
 *   schemas:
 *     Playlist:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - gender
 *         - musics
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of playlist.
 *         title:
 *           type: string
 *           description: The title of playlist.
 *         gender:
 *           type: string
 *           description: Gender.
 *         musics:
 *           type: Music[]
 *           description: list of musics.
 *       example:
 *          name: Rock List
 *          gender: Rock 80
 *          musics: [
 *            {
 *              title: Livin On A Prayer,
 *              author: Bon Jovi,
 *              time: 4:08
 *            }
 *          ]
 */
