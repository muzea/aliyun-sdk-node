export interface DescribeAccessControlListsRequest {
    /**
     * 访问控制策略名称。
     * @example `testAcl`
     */
    "AclName"?: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * IP版本，可以设置为**ipv4**或者**ipv6**。
     * @example `ipv6`
     */
    "AddressIPVersion"?: string;
}
