export interface DescribeAccessControlListAttributeResponse {
    /**
     * 访问控制策略ID。
     * @example `acl-uf6fpfdg3b5muska7uqem`
     */
    AclId: string;
    /**
     * 本次请求的ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * 访问控制策略名称。
     * @example `testAcl`
     */
    AclName: string;
    AclEntrys: {
        /**
         * 访问控制策略的信息列表。
         */
        AclEntry: {
            /**
             * 访问控制策略条目。
             * @example `192.168.1.0/24`
             */
            AclEntryIp: string;
            /**
             * 访问控制条目备注。
             * @example `default`
             */
            AclEntryComment: string;
        }[];
    };
    /**
     * IP版本，可以设置为**ipv4**或者**ipv6**。
     * @example `ipv4`
     */
    AddressIPVersion: string;
}
