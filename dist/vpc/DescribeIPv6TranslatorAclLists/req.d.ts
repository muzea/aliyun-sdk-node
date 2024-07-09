export interface DescribeIPv6TranslatorAclListsRequest {
    /**
     * 访问控制策略组的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  访问控制策略组ID。
     * @example `ipv6transacl-bp1de2****`
     */
    "AclId"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     *  访问控制策略组的名称。
     * @example `acl1`
     */
    "AclName"?: string;
}
