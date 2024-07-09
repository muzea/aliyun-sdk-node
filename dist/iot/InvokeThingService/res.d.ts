export interface InvokeThingServiceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功，但不代表调用的服务执行成功。执行情况，以设备端日志为准。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 同步调用服务，返回的调用结果。
         * 异步调用服务，不返回此参数。
         * @example `{"param1":1}`
         */
        Result: string;
        /**
         * 云端向设备下发服务调用的消息ID。
         * @example `abcabcabc1234****`
         */
        MessageId: string;
    };
}
