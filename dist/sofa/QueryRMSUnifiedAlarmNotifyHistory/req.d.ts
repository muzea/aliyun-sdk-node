export interface QueryRMSUnifiedAlarmNotifyHistoryRequest {
    /**
     *
     * 发送状态
     * @example `0`
     */
    "Status"?: number;
    /**
     *
     * 通知渠道
     * @example `DD_WEBHOOK`
     */
    "Channel"?: string;
    /**
     * 通知人id
     * @example `1`
     */
    "Subscriber"?: string;
    /**
     * 当前页
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页条数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 工作区名
     * @example `acgatewayprod`
     */
    "WorkspaceName": string;
    /**
     *
     * 事件id
     * @example `355400_1670410905000_598877597`
     */
    "EventId"?: string;
    /**
     *
     * 开始时间
     * @example `1660730580000`
     */
    "StartTime": number;
    /**
     * 结束时间
     * @example `1668160800150`
     */
    "EndTime": number;
    /**
     * 查询告警内容
     * @example `asd`
     */
    "Keyword"?: string;
    /**
     * 告警规则 ID
     * @example `22`
     */
    "AlarmRuleId"?: number;
    /**
     * 告警状态
     * @example `2`
     */
    "AlarmStatus"?: number;
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
     * @example `{\"DatasourceType\":\"CUSTOM\",\"AlarmTargetType\":\"APP\",\"AlarmTargetIdentify\":\"prod-app-acrbasis\"，\"Datasource\":\"SPM@@15984\"}`
     */
    "AlarmStackInfoJsonStr"?: string;
    /**
     * 大盘告警查询参数
     */
    "DashboardQueryParamJsonStr"?: string;
    /**
     * 根据通知对象过滤
     */
    "AlarmSubscribers"?: {
        /**
         *
         * 订阅者来源
         * @example `LOCAL`
         */
        SubscriberSource: string;
        /**
         * 订阅者类型
         * @example `USER_GROUP`
         */
        SubscriberType: string;
        /**
         * 订阅者
         * @example `1`
         */
        Subscriber: string;
        /**
         * 订阅者uuid
         * @example `839f5cf92ab3435385ef3949c001a7a8`
         */
        SubscriberUuid: string;
        /**
         * 告警对象的名称
         * @example `mike`
         */
        SubscriberName: string;
    }[];
}
