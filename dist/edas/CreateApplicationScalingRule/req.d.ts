export interface CreateApplicationScalingRuleRequest {
    /**
     * 应用ID，可调用[ListApplication](~~149390~~)接口获取。
     * @example `78194c76-3dca-418e-a263-cccd1ab4****`
     */
    "AppId"?: string;
    /**
     * 弹性伸缩策略的名称。支持以小写字母开头，允许小写字母、数字、中划线（-）组成，长度为1~32字符的字符串。
     * @example `cpu-trigger`
     */
    "ScalingRuleName"?: string;
    /**
     * 弹性伸缩策略类型，仅支持**trigger**类型。
     * @example `trigger`
     */
    "ScalingRuleType"?: string;
    /**
     * 是否启用弹性伸缩策略。
     * - **true**：启用规则。
     * - **false**：禁用规则。
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
     * 触发器策略。设置为ScalingRuleTriggerDTO的JSON格式，具体样式，请参见请求参数补充说明。
     * @example `ScalingRuleTriggerDTO{......}`
     */
    "ScalingRuleTrigger"?: string;
    /**
     * 配置自定义弹性行为，具体数据结构参考样例。
     * @example `{
          "scaleUp": {
                "stabilizationWindowSeconds": "0",
                "selectPolicy": "Max",
                "policies": [
                      {
                            "type": "Pods",
                            "value": 5,
                            "periodSeconds": 15
                      }
                ]
          },
          "scaleDown": {
                "stabilizationWindowSeconds": "300",
                "selectPolicy": "Max",
                "policies": [
                      {
                            "type": "Percent",
                            "value": 200,
                            "periodSeconds": 15
                      }
                ]
          }
    }`
     */
    "ScalingBehaviour"?: string;
}
