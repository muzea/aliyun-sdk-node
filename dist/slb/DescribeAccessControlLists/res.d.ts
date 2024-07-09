export interface DescribeAccessControlListsResponse {
    /**
     * 列表的页码，起始值**1**，默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值：**50**，默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `3CB646EF-6147-4566-A9D9-CE8FBE86F971`
     */
    RequestId: string;
    /**
     * 已创建的访问控制组策略组个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页展示的访问控制策略组个数。
     * @example `1`
     */
    Count: number;
    Acls: {
        /**
         * 查询到的访问控制策略组列表。
         */
        Acl: {
            /**
             * 访问控制策略组ID。
             * @example `acl-bp1l0kk4gxce43k*****`
             */
            AclId: string;
            /**
             * 关联的负载均衡实例的IP地址类型。
             * @example `ipv4`
             */
            AddressIPVersion: string;
            /**
             * 访问控制策略组名称。
             * @example `rule1`
             */
            AclName: string;
            /**
             * 资源组ID。
             * @example `rg-jfenfbp1lhl0****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 访问控制策略组标签列表。取值：是一个Json string，其结构是一个JsonList。
                 */
                Tag: {
                    /**
                     * 资源的标签值。
                     * @example `1`
                     */
                    TagValue: string;
                    /**
                     * 资源的标签键。
                     * @example `test`
                     */
                    TagKey: string;
                }[];
            };
            /**
             * 传统型负载均衡实例的创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2022-08-31T02:49:05Z`
             */
            CreateTime: string;
        }[];
    };
}
