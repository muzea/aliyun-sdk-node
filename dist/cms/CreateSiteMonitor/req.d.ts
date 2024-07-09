export interface CreateSiteMonitorRequest {
    /**
     * 监控任务的URL或IP地址。
     * @example `https://www.aliyun.com`
     */
    "Address": string;
    /**
     * 监控任务的监控类型。
     * 目前站点监控任务的类型包括：HTTP（S）、PING、TCP、UDP、DNS、SMTP、POP3、FTP。
     * @example `HTTP`
     */
    "TaskType": string;
    /**
     * 监控任务的名称。
     * 长度4~100个字符，取值可包含英文字母、数字、下划线（_）和汉字。
     * @example `HanZhou_ECS1`
     */
    "TaskName": string;
    /**
     * 监控频率。
     * 取值：1分钟、5分钟、15分钟、30分钟和60分钟。
     * 默认值：1分钟。
     * @example `1`
     */
    "Interval"?: string;
    /**
     * 探针信息。如果该参数取值为空，则系统随机选择3个探测点。
     * 格式为JSONArray，例如：`[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`，分别对应北京、杭州、青岛。
     * 关于如何获取探测点信息，请参见[DescribeSiteMonitorISPCityList](~~115045~~)。
     * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
     */
    "IspCities"?: string;
    /**
     * 监控任务对应协议类型的高级扩展选项。不同监控任务的协议类型对应不同的扩展选项。
     * @example `{"time_out":5000}`
     */
    "OptionsJson"?: string;
    /**
     * 报警规则ID。
     * 关于如何获取云监控中已存在的报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `SystemDefault_acs_ecs_dashboard_InternetOutRate_Percent`
     */
    "AlertIds"?: string;
    /**
     * 自定义探测周期。只能选择周一至周日的某个时间段进行探测。
     * @example `{"start_hour":0,"end_hour":24, "days":[0], "time_zone":"Local"}`
     */
    "CustomSchedule"?: string;
}
