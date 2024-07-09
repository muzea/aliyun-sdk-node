export interface ListResourceGroupsResponse {
    /**
     * 符合请求参数条件的数据总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `4B450CA1-36E8-4AA2-8461-86B42BF4CC4E`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    ResourceGroups: {
        /**
         * 资源组列表。
         */
        ResourceGroup: {
            /**
             * 资源组显示名称。
             * @example `my-project`
             */
            DisplayName: string;
            /**
             * 资源组状态。取值：
             * - Creating：创建中。
             * - OK：创建成功。
             * - PendingDelete：等待删除。
             * @example `OK`
             */
            Status: string;
            /**
             * 资源组所属的阿里云账号ID。
             * @example `123456789****`
             */
            AccountId: string;
            /**
             * 资源组唯一标识。
             * @example `my-project`
             */
            Name: string;
            /**
             * 资源组创建时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
            /**
             * 资源组ID。
             * @example `rg-9gLOoK****`
             */
            Id: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `k1`
                     */
                    TagKey: string;
                    /**
                     * 标签值。
                     * @example `v1`
                     */
                    TagValue: string;
                }[];
            };
        }[];
    };
}
