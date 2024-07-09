export interface GetGatewayPacketStatResponse {
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 无效上行包计数。
         * @example `0`
         */
        UplinkInvalid: number;
        /**
         * 有效上行包计数。
         * @example `0`
         */
        UplinkValid: number;
        /**
         * 有效下行包计数。
         * @example `0`
         */
        DownlinkValid: number;
        /**
         * 无效下行包计数。
         * @example `0`
         */
        DownlinkInvalid: number;
    };
}
