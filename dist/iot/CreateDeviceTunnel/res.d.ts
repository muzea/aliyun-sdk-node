export interface CreateDeviceTunnelResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `	iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回安全隧道的基本信息。
     */
    Data: {
        /**
         * 安全隧道ID。
         * @example `d4098041-***`
         */
        TunnelId: string;
        /**
         * 通过安全隧道访问对应设备，建立WebSocket的URL。
         * @example `wss://secure-tunnel-ws.iot.aliyun.test/tunnel/1834248a-37b7-4fd2-***​/source`
         */
        SourceURI: string;
        /**
         * 通过安全隧道访问对应设备的认证Token，用于WebSocket建连的认证阶段，详细说明，请参见[安全隧道使用流程](~~312333~~)。
         * @example `521c43e4-a6da-***`
         */
        SourceAccessToken: string;
    };
}
