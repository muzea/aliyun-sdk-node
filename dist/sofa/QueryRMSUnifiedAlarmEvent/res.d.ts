export interface QueryRMSUnifiedAlarmEventResponse {
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
     * 分页大小
     */
    PageSize: number;
    /**
     * 总条数
     */
    TotalCount: number;
    /**
     * 告警事件详情
     */
    UnifiedAlarmEventList: {
        /**
         * 触发状态
         */
        Status: number;
        /**
         * 告警对象类型
         */
        AlarmTargetType: string;
        /**
         * 告警产生时间
         */
        AlarmStartTime: string;
        /**
         * 静默剩余时间
         */
        SilenceRemainTime: number;
        /**
         * 数据源名称
         */
        DataSourceName: string;
        /**
         * 	告警类型
         */
        AlarmType: string;
        /**
         *
         * 告警恢复时间
         */
        AlarmRecoverTime: string;
        /**
         * 报警规则id
         */
        AlarmRuleId: number;
        /**
         * 报警历史id
         */
        AlarmHistoryId: number;
        /**
         * 报警内容
         */
        AlarmContent: string;
        /**
         * 告警数据源跳转url
         */
        AlarmUrl: string;
        /**
         * 网页的绝对路径，包含域名
         */
        AlarmUrlWithDomain: string;
        /**
         * 目标对象是否删除
         */
        AlarmTargetDeleted: boolean;
        /**
         * 告警级别
         */
        AlarmLevel: number;
        /**
         * 告警事件id
         */
        AlarmEventId: string;
        /**
         * 告警对象
         */
        AlarmTarget: string;
        /**
         * 报警历史详情列表。
         */
        AlarmHistoryList: {
            /**
             * 告警对象类型
             */
            AlarmTargetType: string;
            /**
             * 触发状态
             */
            Status: number;
            /**
             * 数据源名称
             */
            DataSourceName: string;
            /**
             * 告警类型
             */
            AlarmType: string;
            /**
             * 修改时间
             */
            GmtModified: string;
            /**
             * 告警事件id
             */
            EventId: string;
            /**
             * 工作空间ID
             */
            WorkspaceId: number;
            /**
             * 告警规则唯一标识
             */
            UniqueIdentity: string;
            /**
             * 告警时间
             */
            AlarmTime: number;
            /**
             * 报警规则id
             */
            AlarmRuleId: number;
            /**
             * 创建时间
             */
            GmtCreate: string;
            /**
             * 告警详情
             */
            AlarmDetail: string;
            /**
             * 告警数据源跳转url
             */
            AlarmUrl: string;
            /**
             * 报警内容
             */
            AlarmContent: string;
            /**
             * 网页的绝对路径，包含域名
             */
            AlarmUrlWithDomain: string;
            /**
             * 目标对象是否删除
             */
            AlarmTargetDeleted: boolean;
            /**
             * 告警级别
             */
            AlarmLevel: number;
            /**
             * 主键ID
             */
            Id: number;
            /**
             * 租户id
             */
            TenantId: number;
            /**
             * 告警对象
             */
            AlarmTarget: string;
            /**
             * 报警规则名称
             */
            AlarmRuleName: string;
        }[];
    }[];
}
