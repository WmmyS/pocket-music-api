export {};
/**
 * @swagger
 * components:
 *   schemas:
 *     Music:
 *       type: object
 *       required:
 *         - ytid
 *         - title
 *         - author
 *         - description
 *         - url
 *         - tambnail
 *         - time
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the music.
 *         ytid:
 *           type: string
 *           description: Youtube music code.
 *         title:
 *           type: string
 *           description: The title of music.
 *         author:
 *           type: string
 *           description: Author name.
 *         description:
 *           type: string
 *           description: Description of music.
 *         url:
 *           type: string
 *           description: Music link.
 *         tambnail:
 *           type: string
 *           description: Image link on youtube
 *         time:
 *           type: string
 *           description: Time of music.
 *       example:
 *          ytid: codeExample
 *          title: Livin' On A Prayer
 *          author: Bon Jovi
 *          description: Music video by Bon Jovi performing Livin' On A Prayer. (C) 1986 The Island Def Jam Music Group
 *          url: https://www.youtube.com/watch?v=lDK9QqIzhwk&ab_channel=BonJoviVEVO
 *          tambnail: //example.com
 *          time: 4:08
 */
