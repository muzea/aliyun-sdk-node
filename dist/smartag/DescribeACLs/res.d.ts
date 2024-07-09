export interface DescribeACLsResponse {
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `660F303F-C88E-4026-BC6A-FC24B78FD7EA`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    Acls: {
        /**
         * 访问控制实例信息列表。
         */
        Acl: {
            /**
             * 访问控制实例绑定的智能接入网关实例数量。
             * @example `0`
             */
            SagCount: string;
            /**
             * 访问控制实例ID。
             * @example `acl-xhwhyuo43l*******`
             */
            AclId: string;
            /**
             * 访问控制实例名称。
             * @example `test`
             */
            Name: string;
            /**
             * 访问控制实例所属资源组ID。
             * @example `rg-acfm2iu4fnc****`
             */
            ResourceGroupId: string;
            /**
             * 访问控制实例支持绑定的智能接入网关实例类型。取值：
             * - **acl-hardware**：智能接入网关硬件实例。
             * - **acl-software**：智能接入网关App实例。
             * @example `acl-hardware`
             */
            AclType: string;
        }[];
    };
}
