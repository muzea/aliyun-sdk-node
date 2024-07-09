export interface DescribeTenantsRequest {
    /**
     * Oceanbase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户名称。
     * 长度为 2~20 个字符，支持英文字母、数字和下划线，区分大小写，必须以字母或下划线开头。 不可设置为 sys。
     * @example `pay_online`
     */
    "TenantName"?: string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100
     * - 默认值：10
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
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId"?: string;
    /**
     * 查询列表的筛选关键字。
     * @example `pay`
     */
    "SearchKey"?: string;
}
