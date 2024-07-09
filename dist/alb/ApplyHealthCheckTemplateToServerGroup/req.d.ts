export interface ApplyHealthCheckTemplateToServerGroupRequest {
    /**
     * 模板ID。
     * @example `hct-bp1qjwo61pqz3ahltv****`
     */
    "HealthCheckTemplateId": string;
    /**
     * 后端服务器组ID。
     * @example `sgp-n80wyad08u0tox****`
     */
    "ServerGroupId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * -  **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
}
