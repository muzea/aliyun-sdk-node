export interface GetResourceGroupResponse {
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF5189484043`
     */
    RequestId: string;
    /**
     * 资源组信息。
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
        RegionStatuses: {
            /**
             * 各个地域的资源组状态。
             */
            RegionStatus: {
                /**
                 * 资源组状态。取值：
                 * - Creating：创建中。
                 * - OK：创建成功。
                 * - PendingDelete：等待删除。
                 * - Deleting：删除中。
                 * @example `OK`
                 */
                Status: string;
                /**
                 * 地域ID。
                 * @example `cn-qingdao`
                 */
                RegionId: string;
            }[];
        };
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
    };
}
