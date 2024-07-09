export interface OpenSensitiveFileScanResponse {
    /**
     * 修改敏感文件扫描开关返回信息。
     */
    Data: {
        /**
         * 开关操作。取值：
         * - **on**：打开。
         * - **off**：关闭。
         * @example `on`
         */
        SwitchOn: string;
    };
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B4A4C081-7F06-5481-9323-02A5419B9423`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
