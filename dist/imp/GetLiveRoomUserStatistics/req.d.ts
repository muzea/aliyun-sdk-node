export interface GetLiveRoomUserStatisticsRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 直播资源的唯一标识ID。
     * @example `b7f2****ebb3`
     */
    "LiveId": string;
    /**
     * 查询页码，从1开始，参数为空默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 每页显示个数，最大支持50，参数为空默认显示个数为10。
     * @example `25`
     */
    "PageSize"?: string;
}
