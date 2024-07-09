export interface JoinRoomRequest {
    /**
     * 双录质检应用id
     * @example `4a29b426-742f-4078-8386-79b440b***`
     */
    "AppId": string;
    /**
     * mrtc 房间 ID
     * @example `66194***681868`
     */
    "RoomId": string;
    /**
     * mrtc 视频流或音频流ID
     * @example `12312***2412`
     */
    "StreamId"?: string;
    /**
     * mrtc 房间密码
     * @example `006f4***b269`
     */
    "RoomToken"?: string;
}
