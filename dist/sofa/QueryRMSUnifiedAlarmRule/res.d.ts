export interface QueryRMSUnifiedAlarmRuleResponse {
    /**
     * 当前页
     */
    CurrentPage: number;
    /**
     * 请求id
     */
    RequestId: string;
    /**
     * 结果描述
     */
    ResultMessage: string;
    /**
     * 结果码
     */
    ResultCode: string;
    /**
     * 每页大小
     */
    PageSize: number;
    /**
     * 总条数
     */
    TotalCount: number;
    /**
     * 报警规则信息
     */
    AlarmRules: {
        /**
         * 启停状态 1：打开 0:闭合
         */
        Status: number;
        /**
         * 通知模板id
         */
        NotifyTplId: number;
        /**
         * 通知渠道 "["ddWebhook","sms","phone","email"]"
         */
        Channels: string;
        /**
         * 告警触发时通知 1:勾选 0:不勾选
         */
        NotifyFiring: number;
        /**
         * 修改时间
         */
        GmtModified: string;
        /**
         * 告警无数据时通知 1:勾选 0:不勾选
         */
        NotifyEmpty: number;
        /**
         * 规则创建者
         */
        Creator: string;
        /**
         * 通知时间
         */
        NotifyTimeFilter: string;
        /**
         * 修改人
         */
        Modifier: string;
        /**
         * 告警恢复时通知 1:勾选 0:不勾选
         */
        NotifyRecovered: number;
        /**
         * 暂停开始时间
         */
        SuspendedStartTime: number;
        /**
         * 软删除
         */
        Deleted: number;
        /**
         * 暂停的原因
         */
        SuspendedReason: string;
        /**
         * 	触发周期
         */
        PendingHit: number;
        /**
         * 规则名称
         */
        Name: string;
        /**
         * 恢复周期
         */
        RecoveredHit: number;
        /**
         * 指标无数据触发告警 是个开关 1:打开 0:关闭
         */
        AlarmEmpty: number;
        /**
         * 通知静默时间
         */
        SilenceTime: number;
        /**
         * 告警状态
         */
        AlarmStatus: number;
        /**
         * 应急处理人
         */
        Emergency: string;
        /**
         * 标识告警规则迁移之前的 ID
         */
        SourceId: string;
        /**
         * 暂停结束时间
         */
        SuspendedEndTime: number;
        /**
         * 检测频率
         */
        Step: number;
        /**
         * 工作空间id
         */
        WorkspaceId: number;
        /**
         * 告警规则唯一标识
         */
        UniqueIdentity: string;
        /**
         * 时区
         */
        TimeZone: string;
        /**
         * 应急处理链接
         */
        EmergencyUrl: string;
        /**
         * 创建时间
         */
        GmtCreate: string;
        /**
         * 规则类型
         */
        Category: string;
        /**
         * 告警级别
         */
        Level: number;
        /**
         * 主键id
         */
        Id: number;
        /**
         * 租户id
         */
        TenantId: number;
        /**
         * 规则配置信息
         */
        RuleConfig: string;
        /**
         * 告警触发条件
         */
        ConditionsDes: string[];
    }[];
}
