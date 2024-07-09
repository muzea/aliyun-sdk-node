export interface QueryRMSUnifiedAlarmEventRequest {
    /**
     * 工作空间名称
     */
    "WorkspaceName": string;
    /**
     * 当前页
     */
    "CurrentPage"?: number;
    /**
     * 分页大小
     */
    "PageSize"?: number;
    /**
     * 告警级别
     */
    "AlarmLevel"?: number;
    /**
     *
     * 触发状态
     */
    "Status"?: number;
    /**
     * 告警对象类型
     */
    "AlarmTargetType"?: string;
    /**
     * 按告警内容查询
     */
    "Keyword"?: string;
    /**
     * 开始时间
     */
    "StartTime": number;
    /**
     * 结束时间
     */
    "EndTime": number;
    /**
     *
     * 告警规则 ID
     */
    "AlarmRuleId"?: number;
    /**
     * 根据应用栈过滤 json格式 包含字段如下：
     * datasource_type	STRING	否	["CUSTOM","STACK","TABLE]
     * 是应用监控，还是自定义监控
     * datasource	STRING	否	MM@@2000464
     * 数据源
     * alarm_target_type	STRING	否	["APP","HOST"]
     * 应用类型
     * alarm_target_identify	STRING	否	RMS-monitorprod
     * 应用名称
     */
    "AlarmStackInfoJsonStr"?: string;
    /**
     * 告警规则uuid
     */
    "AlarmRuleUuid"?: string;
    /**
     * 按告警对象搜索
     */
    "AlarmTargetKeyword"?: string;
    /**
     * 告警状态
     */
    "AlarmStatusRepeatList"?: number[];
}
