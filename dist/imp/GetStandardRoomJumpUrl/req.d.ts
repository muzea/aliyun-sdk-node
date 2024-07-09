export interface GetStandardRoomJumpUrlRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 用户UserId，在AppId下单独唯一。小写英文、数字、下划线（_）和小数点（.）组成，最大长度32个字符。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 终端设备类型，通过控制台创建和查询。小写英文和数字，长度32个字符。
     * @example `06***9c`
     */
    "AppKey": string;
    /**
     * 选择获取链接的平台类型。取值：
     * - win：Windows端。
     * - web： Web端。
     * - mac：Mac端。
     * @example `web`
     */
    "Platform": string;
    /**
     * 业务场景类型。取值：
     * - live：互动直播。
     * - class：互动课堂。
     * @example `live`
     */
    "BizType": string;
    /**
     * 资源ID。根据业务场景类型来定：
     * - 互动直播场景传入直播ID(LiveId)。
     * - 互动课堂场景传入课程ID(ClassId)。
     * @example `b7f2-****-ebb3`
     */
    "BizId": string;
    /**
     * 用户用于显示的昵称，英文大小写字母、汉字、数字、下划线（_）、短横线（-）、小数点（.）和@组成。长度为1到36个字符。
     * @example `James`
     */
    "UserNick": string;
}
