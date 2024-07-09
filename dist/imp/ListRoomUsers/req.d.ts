export interface ListRoomUsersRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 查询页码，从1开始，传空默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示个数，最大支持100，参数为空默认显示个数为50。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 房间ID，由字母、数字、下划线（_）和小数点（.）组成，最大长度36个字符。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
}
