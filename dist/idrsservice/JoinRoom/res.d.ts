export interface JoinRoomResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D15744FC-97D2-5D61-A18C-8CC4FA0A3***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误消息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * mrtc 房间 ID
         * @example `641981583353***`
         */
        RoomId: string;
        /**
         * mrtc 视频流或音频流ID
         * @example `12312***412`
         */
        StreamId: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
