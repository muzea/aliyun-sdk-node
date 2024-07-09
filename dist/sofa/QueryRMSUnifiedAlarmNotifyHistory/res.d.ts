export interface QueryRMSUnifiedAlarmNotifyHistoryResponse {
    /**
     * 当前页
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 请求ID
     * @example `B4C10721-BD3E-5F45-AF3C-880715462315`
     */
    RequestId: string;
    /**
     * 结果描述
     * @example `Rpc error`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 每页大小
     * @example `20`
     */
    PageSize: number;
    /**
     * 总条数
     * @example `84`
     */
    TotalCount: number;
    /**
     * 报警通知历史
     */
    AlarmNotifyHistories: {
        /**
         *
         * 告警静默期
         * @example `20`
         */
        AlarmSilenceTime: number;
        /**
         * 通知状态
         * @example `0`
         */
        Status: number;
        /**
         * 描述消息发送错误原因
         * @example `Specified private IP address is duplicated.`
         */
        ErrorMessage: string;
        /**
         *
         * 告警类型
         * @example `APP`
         */
        AlarmType: string;
        /**
         * 修改时间
         * @example `2020-03-18 21:47:32`
         */
        GmtModified: string;
        /**
         * 消息内容
         */
        NotifyContent: string;
        /**
         * 报警规则id
         * @example `5839`
         */
        AlarmRuleId: number;
        /**
         * 订阅人
         * @example `400`
         */
        Subscriber: string;
        /**
         * 通知渠道
         * @example `DD_WEBHOOK`
         */
        Channel: string;
        /**
         *
         * 目标对象是否删除
         */
        AlarmTargetDeleted: boolean;
        /**
         * 告警级别
         * @example `1`
         */
        AlarmLevel: number;
        /**
         * 报警事件id
         * @example `356454_1670377620000_1650847553`
         */
        AlarmEventId: string;
        /**
         *
         * 告警规则名
         * @example `bvtcase测试`
         */
        AlarmRuleName: string;
        /**
         * 告警对象类型
         * @example `APP`
         */
        AlarmTargetType: string;
        /**
         * 订阅人的类型
         * @example `USER_GROUP`
         */
        SubscriberType: string;
        /**
         * 报警状态
         * @example `2`
         */
        AlarmStatus: number;
        /**
         * 数据源名称
         * @example `交易成功量`
         */
        DataSourceName: string;
        AlarmRuleUuid: string;
        /**
         * 工作空间ID
         * @example `1`
         */
        WorkspaceId: number;
        /**
         * 订阅者来源
         * @example `LOCAL`
         */
        SubscriberSource: string;
        /**
         * 报警时间。
         * @example `1671076740000`
         */
        AlarmTime: number;
        /**
         *
         * 聚合条数
         * @example `1`
         */
        AggCount: number;
        /**
         * 告警对象
         * @example `monitorprod`
         */
        AlarmTargetIdentify: string;
        /**
         * 报警发送记录id
         * @example `27313821`
         */
        AlarmHistoryId: number;
        /**
         * 创建时间
         * @example `2020-03-13 02:25:08`
         */
        GmtCreate: string;
        /**
         * 告警数据源跳转url
         * @example `/rms/sofacloud/sofa_app/view/a?workspaceName=b&amp;tenantName=c`
         */
        AlarmUrl: string;
        /**
         *
         * 网页的绝对路径，包含域名
         * @example `http://www.alipay.com/rms/sofacloud/sofa_app/view/a?workspaceName=b&amp;tenantName=c`
         */
        AlarmUrlWithDomain: string;
        /**
         * 调用链ID，用于精确查询调用信息。
         * @example `0a6481081662012458401682123`
         */
        TraceId: string;
        /**
         * 属性 ID
         * @example `73738`
         */
        Id: number;
        /**
         * 租户ID
         * @example `1`
         */
        TenantId: number;
        /**
         * 订阅者名称
         * @example `mike`
         */
        SubscriberName: string;
    }[];
    /**
     * 告警通知历史中对应的通知对象
     */
    AlarmNotifySubs: {
        /**
         * 订阅者来源
         * @example `LOCAL`
         */
        SubscriberSource: string;
        /**
         * 订阅者
         * @example `400`
         */
        Subscriber: string;
        /**
         * 订阅者uuid
         * @example `839f5cf92ab3435385ef3949c001a7a8`
         */
        SubscriberUuid: string;
        /**
         * 订阅者类型
         * @example `USER_GROUP`
         */
        SubscriberType: string;
        /**
         * 订阅者名称
         * @example `mike`
         */
        SubscriberName: string;
    }[];
}
