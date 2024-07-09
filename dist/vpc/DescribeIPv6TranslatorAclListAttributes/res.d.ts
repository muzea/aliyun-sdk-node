export interface DescribeIPv6TranslatorAclListAttributesResponse {
    /**
     * 访问控制策略组ID。
     * @example `ipv6transacl-bp1de2****`
     */
    AclId: string;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页码条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的条目总数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 访问控制策略组名称。
     * @example `acl1`
     */
    AclName: string;
    AclEntries: {
        /**
         *  访问控制策略组列表。
         */
        AclEntry: {
            /**
             *  访问控制策略组条目的备注信息。
             * @example `client IP`
             */
            AclEntryComment: string;
            /**
             *  访问控制策略组条目的ID。
             * @example `ipv6transaclentry-bp105jrs****`
             */
            AclEntryId: string;
            /**
             * 访问控制策略组条目的IP地址。
             * @example `12ab:0:0:XXXX::0102/128`
             */
            AclEntryIp: string;
        }[];
    };
}
