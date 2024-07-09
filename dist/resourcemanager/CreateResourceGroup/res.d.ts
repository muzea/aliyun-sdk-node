export interface CreateResourceGroupResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
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
         * @example `Creating`
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
                 * @example `Creating`
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
         * @example `151266687691****`
         */
        AccountId: string;
        /**
         * 资源组唯一标识。
         * @example `my-project`
         */
        Name: string;
        /**
         * 资源组创建时间（UTC时间）。
         * @example `2021-06-05T14:39:13+08:00`
         */
        CreateDate: string;
        /**
         * 资源组ID。
         * @example `rg-9gLOoK****`
         */
        Id: string;
    };
}
