export interface QueryLiveStreamingResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `stream push failed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 播放地址信息。
     */
    Data: {
        /**
         * 直播播放地址。
         * >播放地址有效期为10秒。
         * @example `rtmp://47.100.***.***:8000/live?token=dc1****120ce394ef94974/Eb****6RBe8l4_0`
         */
        Path: string;
        RelayDecryptKey: string;
        StunInfo: string;
    };
}
