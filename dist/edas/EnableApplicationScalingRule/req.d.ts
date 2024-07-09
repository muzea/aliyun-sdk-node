export interface EnableApplicationScalingRuleRequest {
    /**
     * 应用ID，可调用[ListApplication](~~149390~~)接口获取。
     * @example `78194c76-3dca-418e-a263-cccd1ab4****`
     */
    "AppId"?: string;
    /**
     * 弹性伸缩策略的名称。
     * @example `cpu-trigger`
     */
    "ScalingRuleName"?: string;
}
