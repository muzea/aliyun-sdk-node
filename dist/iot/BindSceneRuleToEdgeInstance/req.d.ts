export interface BindSceneRuleToEdgeInstanceRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 边缘实例的ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * @example `llL44UVXUqb9m5******`
     */
    "InstanceId": string;
    /**
     * 场景联动规则ID。调用[QuerySceneRule](~~169498~~)接口获取场景联动规则ID。
     * @example `f041397879ad4d89822811d741******`
     */
    "RuleId": string;
}
