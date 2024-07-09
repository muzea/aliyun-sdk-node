export interface DeleteSceneRuleRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 场景联动规则ID。调用[QuerySceneRule](~~169498~~)接口获取场景联动规则ID。
     * @example `f041397879ad4d89822811d741******`
     */
    "RuleId": string;
}
