export interface ModifySiteMonitorRequest {
    /**
     * 监控任务的URL或IP地址。
     * @example `http://www.aliyun.com`
     */
    "Address"?: string;
    /**
     * 监控任务ID。
     * @example `2c8dbdf9-a3ab-46a1-85a4-f094965e****`
     */
    "TaskId": string;
    /**
     * 监控任务名称。长度4~100个字符，取值可包含英文字母、数字、下划线（_）和汉字。
     * @example `HanZhou_ECS2`
     */
    "TaskName"?: string;
    /**
     * 监控频率。取值：1、5、15。单位：分钟。默认值：1。
     * @example `1`
     */
    "Interval"?: string;
    /**
     * 探针信息。格式为JSONArray，例如：`[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`，`city`分别对应北京、杭州和青岛。
     * > 您可以通过DescribeSiteMonitorISPCityList接口获取探测点信息，请参见[DescribeSiteMonitorISPCityList](~~115045~~)。如果该参数取值为空，则系统随机选择3个探测点。
     * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
     */
    "IspCities"?: string;
    /**
     * 监控任务对应协议类型的高级扩展选项。不同监控任务的协议类型对应不同的扩展选项。
     * @example `{"time_out":5000}`
     */
    "OptionsJson"?: string;
    /**
     * 报警规则ID。云监控中已存在的报警规则ID，可通过DescribeMetricRuleList接口查询，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `49f7c317-7645-4cc9-94fd-ea42e122****`
     */
    "AlertIds"?: string;
    /**
     * 监控指标的单位。
     * 单位：毫秒（ms）。
     * @example `ms`
     */
    "IntervalUnit"?: string;
    /**
     * 自定义探测周期。只能选择周一至周日的某个时间段进行探测。
     * @example `{"start_hour":0,"end_hour":24, "days":[0], "time_zone":"Local"}`
     */
    "CustomSchedule"?: string;
}
