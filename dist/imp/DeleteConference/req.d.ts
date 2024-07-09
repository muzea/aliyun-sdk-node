export interface DeleteConferenceRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间ID，由创建房间接口返回。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
    /**
     * 操作者用户ID，仅支持英文和数字，最大长度36个字符。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 连麦资源的唯一标识ID。
     * @example `fb0f-****-4cb1`
     */
    "ConferenceId": string;
}
