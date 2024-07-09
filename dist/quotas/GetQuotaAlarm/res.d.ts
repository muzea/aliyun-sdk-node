export interface GetQuotaAlarmResponse {
    /**
     * 请求ID。
     * @example `81B9D511-F3DD-43B1-9A81-1795DDB52ADF`
     */
    RequestId: string;
    /**
     * 配额告警详情。
     */
    QuotaAlarm: {
        /**
         * 配额告警阈值的百分比。
         * @example `50`
         */
        ThresholdPercent: number;
        /**
         * 配额告警类型。取值：
         * - used：配额已使用量告警。
         * - usable：配额剩余可用量告警。
         * @example `used`
         */
        ThresholdType: string;
        /**
         * 配额维度。
         * @example `{"regionId":"cn-hangzhou"}`
         */
        QuotaDimension: any;
        /**
         * 配额告警创建时间。
         * @example `2021-01-21T03:47:28Z`
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
         * 告警通知渠道。
         */
        NotifyChannels: string[];
        /**
         * 配额用量。
         * @example `28`
         */
        QuotaUsage: number;
        /**
         * 配额值。
         * @example `804`
         */
        QuotaValue: number;
        /**
         * 配额告警ID。
         * @example `78d7e436-4b25-4897-84b5-d7b656bb****`
         */
        AlarmId: string;
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
        /**
         * 配额中心将告警信息通过HTTP协议的POST请求发送到指定公网的URL地址。
         * @example `https://alert.aliyun.com/callback`
         */
        Webhook: string;
    };
}
