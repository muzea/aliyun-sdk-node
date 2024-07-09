export interface UpdateListenerLogConfigRequest {
    /**
     * 应用型负载均衡实例监听ID。
     * @example `lsn-o4u54y73wq7b******`
     */
    "ListenerId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会更新监听的日志配置。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回**HTTP_2xx**状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 访问日志是否开启携带自定义头字段。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * > 只有实例访问日志开关**AccessLogEnabled**打开时，才能设置此参数为**true**。
     * @example `true`
     */
    "AccessLogRecordCustomizedHeadersEnabled"?: boolean;
    /**
     * Xtrace配置信息。
     */
    "AccessLogTracingConfig"?: {
        /**
         * Xtrace功能状态。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * > 只有实例访问日志开关**AccessLogEnabled**打开时，才能设置此参数为**true**。
         * @example `true`
         */
        TracingEnabled: boolean;
        /**
         * Xtrace采样率。
         * 取值范围：**1~10000**。
         * > **TracingEnabled**为**true**时有效。
         * @example `100`
         */
        TracingSample: number;
        /**
         * Xtrace类型，取值为**Zipkin**。
         * > **TracingEnabled**为**true**时有效。
         * @example `Zipkin`
         */
        TracingType: string;
    };
}
