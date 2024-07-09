export interface QueryRMSUnifiedAlarmHistoryRequest {
    /**
     * 工作空间名称
     * @example `SOFAStack杭州金区-生产`
     */
    "WorkspaceName": string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * > 查询开始时间需在数据库实例SQL洞察存储时长范围内，最大不能早于当前时间90天。
     * @example `1668911820000`
     */
    "Start": number;
    /**
     * 查询数据的终止日期，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，最晚只能查询到当天凌晨0点的数据。
     * @example `1662516900000`
     */
    "End": number;
    /**
     * 当前页
     * @example `2`
     */
    "CurrentPage"?: number;
    /**
     * 分页参数，分页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 告警对象类型
     * @example `APP`
     */
    "AlarmTargetType"?: string;
    /**
     * 告警对象
     * @example `PlanetKms`
     */
    "AlarmTarget"?: string;
    /**
     * 告警级别
     * @example `1`
     */
    "AlarmLevel"?: number;
    /**
     * 告警状态
     * @example `1`
     */
    "Status"?: number;
    /**
     * 根据应用过滤告警历史json格式 包含字段如下：
     * datasource_type	STRING	否	["CUSTOM","STACK","TABLE]
     * 是应用监控，还是自定义监控
     * datasource	STRING	否	MM@@2000464
     * 数据源
     * alarm_target_type	STRING	否	["APP","HOST"]
     * 应用类型
     * alarm_target_identify	STRING	否	RMS-monitorprod
     * 应用名称
     * @example `{\"DatasourceType\":\"STACK\",\"AlarmTargetType\":\"APP\",\"AlarmTargetIdentify\":\"prod-app-twc-universal\"}`
     */
    "AlarmStackInfoJsonStr"?: string;
}
