export interface ListProductQuotasResponse {
    /**
     * 本次请求返回的全部记录条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 用来标记返回查询数据的位置。空表示数据已经查询完毕。
     * @example `AAAAAd98/tlL5GF2aM7UMKQGM8LZesIPr0CbfxASQvHV/pwcmVKNfdBbW8OPld3NvG9Cy8+dNcyFzyUttQA3IONfBhRGpXFyiVoTgK+dupBsP2mX`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `D0131FD5-5397-44FE-BF5A-4B7165B813CC`
     */
    RequestId: string;
    /**
     * 配额详情。
     */
    Quotas: {
        /**
         * 配额单位。
         * @example `个`
         */
        QuotaUnit: string;
        /**
         * 配额ID。
         * @example `q_security-groups`
         */
        QuotaActionCode: string;
        /**
         * 配额用量。
         * @example `1009`
         */
        TotalUsage: number;
        /**
         * 无。
         */
        ApplicableRange: number[];
        /**
         * 无。
         */
        SupportedRange: number[];
        /**
         * 配额类型。取值：
         * - privilege：特权。
         * - normal：普通。
         * @example `privilege`
         */
        QuotaType: string;
        /**
         * 配额描述。
         * @example `当前账户可拥有的安全组的最大数量`
         */
        QuotaDescription: string;
        /**
         * 配额计算周期。
         */
        Period: {
            /**
             * 配额计算周期的取值。
             * @example `{}`
             */
            PeriodValue: number;
            /**
             * 配额计算周期的单位。取值：
             * - second：秒。
             * - minute：分钟。
             * - hour：小时。
             * - day：天。
             * - week：周。
             * @example `day`
             */
            PeriodUnit: string;
        };
        /**
         * 配额ARN。
         * @example `acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups`
         */
        QuotaArn: string;
        /**
         * 配额调整类型。取值：
         * - continuous：连续。
         * - discontinuous：间断。
         * @example `discontinuous`
         */
        ApplicableType: string;
        /**
         * 配额详情。
         */
        QuotaItems: {
            /**
             * 配额类别。取值：
             * - BaseQuota：保障配额。
             * - ReservedQuota：预留配额。
             * @example `BaseQuota`
             */
            Type: string;
            /**
             * 配额值。
             * @example `1009`
             */
            Quota: string;
            /**
             * 配额单位。
             * @example `个`
             */
            QuotaUnit: string;
            /**
             * 配额用量。
             * @example `1009`
             */
            Usage: string;
        }[];
        /**
         * 配额维度。格式：`{"regionId":"地域"}`。
         * @example `{"regionId":"cn-hangzhou"}`
         */
        Dimensions: any;
        /**
         * 配额是否可调整。取值：
         * - true：配额可调整。
         * - false：配额不可调整。
         * @example `true`
         */
        Adjustable: boolean;
        /**
         * 配额名称。
         * @example `ecs.g5.2xlarge`
         */
        QuotaName: string;
        /**
         * 配额不可调整原因。取值：
         * - nonactivated：未开通服务。
         * - applicationProcess：配额申请处理中。
         * - limitReached：已达配额上限。
         * @example `applicationProcess`
         */
        UnadjustableDetail: string;
        /**
         * 是否显示“已使用”的配额。取值：
         * - true：显示“已使用”的配额。
         * - false：不显示“已使用”的配额。
         * @example `true`
         */
        Consumable: boolean;
        /**
         * 配额值。
         * @example `200`
         */
        TotalQuota: number;
        /**
         * 云产品名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 配额生效的UTC时间。
         * @example `2022-09-28T06:07:00Z`
         */
        EffectiveTime: string;
        /**
         * 配额失效的UTC时间。
         * @example `2022-09-29T06:07:00Z`
         */
        ExpireTime: string;
        /**
         * 配额类型。
         * - CommonQuota：通用配额。
         * - FlowControl：API速率配额。
         * - WhiteListLabel：权益配额。
         * @example `CommonQuota`
         */
        QuotaCategory: string;
        /**
         * 申请配额调整理由示例。
         * @example `申请业务：xxx
        业务规模预计增长：50%`
         */
        ApplyReasonTips: string;
        /**
         * 是否为全局配额。取值：
         * - true：该配额项为所有Region共用。
         * - false：该配额项为每个Region独立。
         * @example `true`
         */
        GlobalQuota: boolean;
        /**
         * 配额用量在云监控（CloudMonitor）中的监控信息。
         * > 空表示云监控中无此配额监控数据。
         */
        UsageMetric: {
            /**
             * CloudMonitor监控数据命名空间。
             * @example `acs_quotas_flowcontrol`
             */
            MetricNamespace: string;
            /**
             * CloudMonitor监控项名称。
             * @example `Usage`
             */
            MetricName: string;
            /**
             * CloudMonitor监控维度。
             * 格式：`key:value`键值对形式的集合，例如：
             * `{"productCode":"***","metricKey":"***","regionId":"***","label":"***"}`。
             */
            MetricDimensions: any;
        };
    }[];
    /**
     * 本次查询返回的最大记录条数。
     * @example `1`
     */
    MaxResults: number;
}
