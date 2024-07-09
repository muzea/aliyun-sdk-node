export interface DescribeAccessControlListsResponse {
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本次请求的ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `3`
     */
    TotalCount: number;
    Acls: {
        /**
         * 访问控制策略组列表。
         */
        Acl: {
            /**
             * 访问控制策略名称。
             * @example `testAcl`
             */
            AclName: string;
            /**
             * 访问控制策略ID。
             * @example `acl-3nsohdozz0ru8fi5onwz1`
             */
            AclId: string;
            /**
             * 访问控制策略组的IP版本。
             * - **IPv4**。
             * - **IPv6**。
             * @example `ipv4`
             */
            AddressIPVersion: string;
        }[];
    };
}
