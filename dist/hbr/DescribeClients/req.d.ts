export interface DescribeClientsRequest {
    /**
     * 备份仓库ID。
     * @example `v-0001vk0z******xdyr`
     */
    "VaultId"?: string;
    /**
     * 备份客户端ID。
     * @example `c-000ed600******6b0`
     */
    "ClientId"?: string;
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 备份客户端类型。取值为**ECS_AGENT**，表示SAP HANA备份客户端。
     * @example `ECS_AGENT`
     */
    "ClientType"?: string;
    /**
     * 数据源类型，取值为**HANA**，表示SAP HANA备份。
     * @example `HANA`
     */
    "SourceType"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0005ni1******2l87`
     */
    "ClusterId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmw6bxl7o5qyq`
     */
    "ResourceGroupId"?: string;
}
