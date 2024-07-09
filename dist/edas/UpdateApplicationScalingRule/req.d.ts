export interface UpdateApplicationScalingRuleRequest {
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
    /**
     * 弹性策略类型，当前仅支持以下类型：
     * * trigger：触发器类型。
     * @example `trigger`
     */
    "ScalingRuleType"?: string;
    /**
     * 弹性策略的启用状态。
     * - **true**：启用
     * - **false**：禁用
     * @example `true`
     */
    "ScalingRuleEnable"?: boolean;
    /**
     * 此参数已废弃。
     * @example `1`
     */
    "ScalingRuleMetric"?: string;
    /**
     * 此参数已废弃。
     * @example `1`
     */
    "ScalingRuleTimer"?: string;
    /**
     * 触发器策略，为ScalingRuleTriggerDTO的JSON格式，具体样式，请参见请求参数补充说明。
     * @example `ScalingRuleTriggerDTO{......}`
     */
    "ScalingRuleTrigger"?: string;
    /**
     * 配置自定义弹性行为，具体数据结构参考样例。
     * @example `{"scaleUp":{"stabilizationWindowSeconds":"0","selectPolicy":"Max","policies":[{"type":"Pods","value":5,"periodSeconds":15}]},"scaleDown":{"stabilizationWindowSeconds":"300","selectPolicy":"Max","policies":[{"type":"Percent","value":200,"periodSeconds":15}]}}`
     */
    "ScalingBehaviour"?: string;
}
