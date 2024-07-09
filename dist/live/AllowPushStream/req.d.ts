export interface AllowPushStreamRequest {
    /**
     * 业务方App ID。
     * @example `live-app`
     */
    "AppId": string;
    /**
     * 房间ID。
     * 长度为：1~16。由大写字母（A~Z）、小写字母（a~z）、数字和短横线（-）组成。
     * @example `live-room`
     */
    "RoomId": string;
}
