export interface DescribeNetworkAclsRequest {
    /**
     * 网络ACL的ID。
     * @example `nacl-bp1lhl0taikrbgnh****`
     */
    "NetworkAclId"?: string;
    /**
     * 网络ACL的名称。
     * @example `acl-1`
     */
    "NetworkAclName"?: string;
    /**
     * 关联实例的ID。
     * @example `n-5****`
     */
    "ResourceId"?: string;
    /**
     * 安全组列表的页码。起始值：**1**。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: string;
}
