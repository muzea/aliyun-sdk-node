export interface DescribeTenantMetricsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户名称。
     * 长度为 2~20 个字符，支持英文字母、数字和下划线，区分大小写，必须以字母或下划线开头。 不可设置为 sys。
     * > <br>该参数后期会废弃，建议使用 TenantIdList。
     * @example `pay_online`
     */
    "TenantName"?: string;
    /**
     * 监控数据的起始时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:40:43Z`
     */
    "StartTime": string;
    /**
     * 监控数据的结束时间。
     * 该时间只支持 UTC 时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-06-13T15:45:43Z`
     */
    "EndTime": string;
    /**
     * 监控指标项。
     * <props="china">当前可支持的指标及说明请参考 [租户监控数据详情](~~212125~~)。</props>
     * <props="intl">当前可支持的指标及说明请参考 [租户监控数据详情](https://www.alibabacloud.com/help/zh/apsaradb-for-oceanbase/latest/view-tenant-statistics)。</props>
     * @example `tps`
     */
    "Metrics": string;
    /**
     * 租户 ID。
     * > <br>该参数后期会废弃，建议使用 TenantIdList。
     * @example `tfafd34fs****`
     */
    "TenantId"?: string;
    /**
     * 租户 ID 列表。
     * @example `[tdak3nac****,tdakc42df****]`
     */
    "TenantIdList": string;
}
