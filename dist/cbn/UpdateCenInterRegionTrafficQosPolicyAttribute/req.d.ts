export interface UpdateCenInterRegionTrafficQosPolicyAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改流量调度策略的名称和描述信息。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改流量调度策略的名称和描述信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 流量调度策略ID。
     * @example `qos-eczzew0v1kzrb5****`
     */
    "TrafficQosPolicyId": string;
    /**
     * 流量调度策略的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TrafficQosPolicyName"?: string;
    /**
     * 流量调度策略新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TrafficQosPolicyDescription"?: string;
}
