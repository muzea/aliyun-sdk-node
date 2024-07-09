export interface QuerySummarySceneRuleLogRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 场景联动规则ID。调用[QuerySceneRule](~~169498~~)接口获取场景联动规则ID。
     * @example `fec565038d7544978d9aed5c1a******`
     */
    "RuleId": string;
    /**
     * 场景联动规则日志的开始时间，单位为秒，输入Unix时间戳。
     * > 最多可查询近一个月（30天）的规则执行日志。
     * @example `1582372973`
     */
    "StartTime": number;
    /**
     * 场景联动规则日志的结束时间，单位为秒，输入Unix时间戳。
     * > 最多可查询近一个月（30天）的规则执行日志。
     * @example `1582373873`
     */
    "EndTime": number;
    /**
     * 场景联动规则的执行结果。
     * - 0：表示失败。
     * - 1：表示成功。
     * @example `2`
     */
    "Status": string;
    /**
     * 返回结果中每页显示的记录数量。最大取值30，最小取值1，默认取值是10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "CurrentPage": number;
}
