export interface QueryDeviceSubTopicResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
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
     * 调用成功后，返回的设备已订阅Topic信息。
     */
    TopicList: {
        /**
         * 已订阅的设备Topic。
         * @example `/hf768****​/device1/user/test`
         */
        TopicName: string;
        /**
         * 订阅Topic的时间，单位为毫秒。
         * @example `1662039965873`
         */
        Timestamp: number;
    }[];
}
