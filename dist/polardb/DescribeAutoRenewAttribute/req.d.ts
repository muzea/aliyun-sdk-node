export interface DescribeAutoRenewAttributeRequest {
    /**
     * 地域ID。
     * >您可以通过接口[DescribeRegions](~~98041~~)查看地域ID详情。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID，支持传入多个集群ID，多个集群ID间用英文逗号（,）分隔。
     * @example `pc-****************`
     */
    "DBClusterIds"?: string;
    /**
     * 每页记录数，取值范围为30、50、100，默认值为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。取值为大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-re*********`
     */
    "ResourceGroupId"?: string;
}
