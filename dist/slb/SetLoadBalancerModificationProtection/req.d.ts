export interface SetLoadBalancerModificationProtectionRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1b6c719dfa08e*****`
     */
    "LoadBalancerId": string;
    /**
     * 传统型负载均衡修改保护状态：
     * - **NonProtection**：不限制修改保护，设置后会清空之前设置的**ModificationProtectionReason**。
     * - **ConsoleProtection**：实例控制台修改保护状态。
     * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
     * @example `ConsoleProtection`
     */
    "ModificationProtectionStatus": string;
    /**
     * 设置修改保护状态的原因，长度为1~80个字符，必须以字母或中文开头，支持数字、半角句号（.）、下划线（_）和短划线（-）。
     * > 仅在**ModificationProtectionStatus**为**ConsoleProtection**时有效。
     * @example `配置变更`
     */
    "ModificationProtectionReason"?: string;
}
