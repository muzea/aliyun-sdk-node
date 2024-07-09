export interface DescribeProjectMetaResponse {
    /**
     * 请求ID。
     * @example `4C2061B2-3B1B-43BF-A4A4-C53426F479C0`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 分页大小。
     * @example `5`
     */
    PageSize: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 总记录条数。
     * @example `12`
     */
    Total: string;
    Resources: {
        /**
         * 云产品信息。
         */
        Resource: {
            /**
             * 命名空间，用于区分产品。格式：`acs_产品缩写`，详情请参见[云产品监控项](~~163515~~)。
             * @example `acs_cdn`
             */
            Namespace: string;
            /**
             * 描述信息。
             * @example `CDN`
             */
            Description: string;
            /**
             * 标签。根据标签过滤，标签为每个报警增加特殊标记。
             * 例如：报警所属产品的规格，是否能设置告警，格式：`[{"name":"标签名","value":"标签值"}、{"name":"标签名","value":"标签值"}]​`。常用的标签如下：
             * - alertUnit：报警的单位。
             *   为了避免原始上报数据的单位过小，而导致告警规则输入的值过大而增加的`alertUnit`标签，目前主要应用于云监控控制台。
             * - minAlertPeriod：最小上报周期。上报监控数据的时间间隔，通常为1分钟。
             * - metricCategory：产品的规格。例如： kvstore_sharding。
             *   部分阿里云产品分不同规格，定义在同一个namespace中，用该参数进行区分。
             * - is_alarm：能否设置告警规则。
             *   对于阿里云中云监控控制台的特殊标签，不建议您使用。
             * @example `[{"metricCategory":ecs}]`
             */
            Labels: string;
        }[];
    };
}
