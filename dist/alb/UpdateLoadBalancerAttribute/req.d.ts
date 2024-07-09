export interface UpdateLoadBalancerAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改应用型负载均衡实例的属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回`HTTP_2xx`状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 应用型负载均衡实例ID。
     * @example `alb-o9ulmq5hgn68jk****`
     */
    "LoadBalancerId": string;
    /**
     * 应用型负载均衡实例的名称，长度为2~128个英文或中文字符，必须以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `alb-instance-test`
     */
    "LoadBalancerName"?: string;
    /**
     * 修改保护配置。
     */
    "ModificationProtectionConfig"?: {
        /**
         * 长度为2~128个英文或中文字符，必须以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * 仅在**ModificationProtectionStatus**为**ConsoleProtection**有效且合法。
         * @example `托管实例`
         */
        Reason: string;
        /**
         * 应用型负载均衡修改保护状态。取值：
         * - **NonProtection**：不保护，表示不允许传入**ModificationProtectionReason**。如果配置了**ModificationProtectionReason**，则清空其配置信息。
         * - **ConsoleProtection**：控制台修改保护，此时允许传入**ModificationProtectionReason**。
         * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
         * @example `ConsoleProtection`
         */
        Status: string;
    };
}
