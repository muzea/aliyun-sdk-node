export interface ListAlarmHistoriesResponse {
    /**
     * 本次请求返回的全部记录条数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 用来标记返回查询数据的位置。空表示数据已经查询完毕。
     * @example `1`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `CB38DDF9-B1E0-48C1-9966-19C443C2841E`
     */
    RequestId: string;
    /**
     * 本次查询返回的最大记录条数。
     * @example `4`
     */
    MaxResults: number;
    /**
     * 配额告警历史记录详情。
     */
    AlarmHistories: {
        /**
         * 已使用配额。
         * @example `31`
         */
        QuotaUsage: number;
        /**
         * 配额告警阈值的百分比。
         * @example `80`
         */
        ThresholdPercent: number;
        /**
         * 配额告警创建时间。
         * @example `2021-01-24T09:20:09Z`
         */
        CreateTime: string;
        /**
         * 配额ID。
         * @example `q_security-groups`
         */
        QuotaActionCode: string;
        /**
         * 配额告警名称。
         * @example `安全组总数量上限`
         */
        AlarmName: string;
        /**
         * 配额告警通知对象。
         * @example `accountContact`
         */
        NotifyTarget: string;
        /**
         * 配额告警通知渠道。
         */
        NotifyChannels: string[];
        /**
         * 配额告警阈值的数值。
         * @example `29`
         */
        Threshold: number;
        /**
         * 云服务名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
    }[];
}
