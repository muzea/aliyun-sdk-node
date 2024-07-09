export interface ModifyParameterRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 参数及其值的JSON串，参数的值都是字符串类型。格式：{"参数名称1":"参数值1","参数名称2":"参数值2"...}。可调用DescribeParameterTemplates查询参数名称和参数值。
     * >传入该参数，则无需传入参数**ParameterGroupId**。
     * @example `{"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}`
     */
    "Parameters"?: string;
    /**
     * 修改参数是否重启数据库，取值：
     * * **true**：强制重启（若修改的参数当中，有需要重启的参数，则必须传入true，否则修改将不生效）。
     * * **false**：不强制重启。
     * 默认值：**false**。
     * @example `false`
     */
    "Forcerestart"?: boolean;
    /**
     * 参数模板ID。
     * > * 传入该参数，则无需传入参数**Parameters**。
     * > * 如果应用参数模板需要重启实例，需要传入参数**Forcerestart**。
     * @example `rpg-****`
     */
    "ParameterGroupId"?: string;
    /**
     * 修改参数的执行时间，取值：
     * * **Immediately**：默认值，立即执行。
     * * **MaintainTime**：实例可运维时间段内执行。可调用ModifyDBInstanceMaintainTime接口修改可运维时间段。
     * * **ScheduleTime**：手动指定执行时间。传入该值需要同时传入**SwitchTime**参数。
     * @example `ScheduleTime`
     */
    "SwitchTimeMode"?: string;
    /**
     * 指定修改参数的执行时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >该时间必须大于当前时间（执行调用的时间）。
     * @example `2022-05-06T09:24:00Z`
     */
    "SwitchTime"?: string;
}
