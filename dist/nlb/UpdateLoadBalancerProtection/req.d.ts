export interface UpdateLoadBalancerProtectionRequest {
    /**
     * 是否开启删除保护。取值：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    "DeletionProtectionEnabled"?: boolean;
    /**
     * 输入开启删除保护的原因。长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * > 仅在**DeletionProtectionEnabled**为**true**时该参数有效且合法。
     * @example `实例使用中`
     */
    "DeletionProtectionReason"?: string;
    /**
     * 网络型负载均衡修改保护状态。取值：
     * - **NonProtection**：不保护，表示不允许传入**ModificationProtectionReason**。如果配置了保护配置的**ModificationProtectionReason**，则清空其配置信息。
     * - **ConsoleProtection**：控制台修改保护，此时允许传入**ModificationProtectionReason**。
     * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
     * @example `ConsoleProtection`
     */
    "ModificationProtectionStatus"?: string;
    /**
     * 输入开启修改保护的原因。长度为2~128个英文或中文字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * > 仅在**Status**为**ConsoleProtection**时该参数有效且合法。
     * @example `托管实例`
     */
    "ModificationProtectionReason"?: string;
    /**
     * 网络型负载均衡实例ID。
     * @example `nlb-83ckzc8d4xlp8o****`
     */
    "LoadBalancerId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新修改保护和删除保护。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
