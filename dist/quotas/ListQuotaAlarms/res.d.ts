export interface ListQuotaAlarmsResponse {
    /**
     * 配额用量告警总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 配额用量告警详情。
     */
    QuotaAlarms: {
        /**
         * 配额用量告警阈值的百分比。
         * @example `80`
         */
        ThresholdPercent: number;
        /**
         * 配额告警类型。取值：
         * - used：已使用量告警。
         * - usable：剩余可用量告警。
         * @example `used`
         */
        ThresholdType: string;
        /**
         * 配额维度。
         * @example `{"regionId":"cn-hangzhou"}`
         */
        QuotaDimensions: any;
        /**
         * 创建配额用量告警的时间。
         * @example `2020-11-27T07:23:34Z`
         */
        CreateTime: string;
        /**
         * 配额ID。
         * @example `q_hvnoqv`
         */
        QuotaActionCode: string;
        /**
         * 告警名称。
         * @example `规则创建数量告警`
         */
        AlarmName: string;
        /**
         * 告警通知对象。取值：accountContact。
         * @example `accountContact`
         */
        NotifyTarget: string;
        /**
         * 配额告警通知渠道。
         */
        NotifyChannels: string[];
        /**
         * 已使用配额。
         * @example `73`
         */
        QuotaUsage: number;
        /**
         * 配额值。
         * @example `200`
         */
        QuotaValue: number;
        /**
         * 告警ID。
         * @example `a2efa7fc-832f-47bb-8054-39e28012****`
         */
        AlarmId: string;
        /**
         * 配额用量告警阈值的数值。
         * @example `160`
         */
        Threshold: number;
        /**
         * 云服务名称缩写。
         * @example `config`
         */
        ProductCode: string;
        /**
         * Webhook地址。
         * @example `https://www.aliyun.com/webhook`
         */
        WebHook: string;
        /**
         * 是否达到配额告警阈值。取值：
         * - false
         * - true
         * @example `false`
         */
        ExceedThreshold: boolean;
    }[];
    /**
     * 用来标记当前调用返回读取到的位置。
     * > 该参数返回为空，表示数据已读取完毕。
     * @example `1`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `87F3B755-3BD2-4C76-B36A-93247002918C`
     */
    RequestId: string;
    /**
     * 本次请求返回的最大记录条数。
     * @example `1`
     */
    MaxResults: number;
}
