export interface DescribeIPv6TranslatorAclListsResponse {
    /**
     * 每页条目数。
     * @example `10`
     */
    PageSize: number;
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
     * 查询的条目总数。
     * @example `20`
     */
    TotalCount: number;
    Ipv6TranslatorAcls: {
        /**
         * 查询到的访问控制策略组列表。
         */
        IPv6TranslatorAcl: {
            /**
             * 访问控制策略组的名称。
             * @example `acl1`
             */
            AclName: string;
            /**
             * 访问控制策略组的ID。
             * @example `ipv6transacl-bp1de2****`
             */
            AclId: string;
        }[];
    };
}
