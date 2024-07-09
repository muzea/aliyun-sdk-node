export interface GetProductQuotaResponse {
    /**
     * 请求ID。
     * @example `8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3`
     */
    RequestId: string;
    /**
     * 配额详情。
     */
    Quota: {
        /**
         * 配额单位。
         * > 每个配额的单位不同。例如：容器服务Kubernetes版的配额`q_cbdch3`（最大集群数）单位为Cluster，云服务器ECS的配额`q_security-groups`（安全组总数量上限）单位为个。
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
         * @example `26`
         */
        TotalUsage: number;
        /**
         * 配额调整范围。
         */
        ApplicableRange: number[];
        /**
         * 无
         */
        SupportedRange: number[];
        /**
         * 配额类型。取值：
         * - privilege：特权。
         * - normal：普通。
         * @example `normal`
         */
        QuotaType: string;
        /**
         * 配额描述。
         * @example `当前账户可拥有的安全组的最大数量`
         */
        QuotaDescription: string;
        /**
         * 配额周期。
         */
        Period: {
            /**
             * 配额周期的取值。
             * @example `1`
             */
            PeriodValue: number;
            /**
             * 配额周期的单位。取值：
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
         * @example `acs:quotas:cn-hangzhou:120886317861****:quota/ecs/q_security-groups/`
         */
        QuotaArn: string;
        /**
         * 配额调整类型。取值：
         * - continuous：连续。
         * - discontinuous：间断。
         * @example `continuous`
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
             * @example `801`
             */
            Quota: string;
            /**
             * 配额单位。
             * > 每个配额的单位不同。例如：容器服务Kubernetes版的配额`q_cbdch3`（最大集群数）单位为Cluster，云服务器ECS的配额`q_security-groups`（安全组总数量上限）单位为个。
             * @example `个`
             */
            QuotaUnit: string;
            /**
             * 配额用量。
             * @example `26`
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
         * - true：可调整。
         * - false：不可调整。
         * @example `true`
         */
        Adjustable: boolean;
        /**
         * 配额名称。
         * @example `安全组总数量上限`
         */
        QuotaName: string;
        /**
         * 配额不可调整原因。取值：
         * - nonactivated：未开通服务。
         * - applicationProcess：配额申请处理中。
         * - limitReached：已达配额上限。
         * - supportTicketRequired：需要提工单申请。
         * @example `limitReached`
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
         * @example `801`
         */
        TotalQuota: number;
        /**
         * 云产品名称缩写。
         * @example `ecs`
         */
        ProductCode: string;
        /**
         * 配额生效的UTC时间。
         * @example `2022-09-28T06:06:00Z`
         */
        EffectiveTime: string;
        /**
         * 配额失效的UTC时间。
         * @example `2022-09-29T06:06:00Z`
         */
        ExpireTime: string;
        /**
         * 配额种类。取值：
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
    };
}
