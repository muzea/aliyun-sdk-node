export interface ListProjectsResponse {
    /**
     * 请求ID。
     * @example `20658801****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    PageResult: {
        /**
         * 当前的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回结果的总条数。
         * @example `68`
         */
        TotalCount: number;
        /**
         * DataWorks工作空间的结果列表。
         */
        ProjectList: {
            /**
             * 工作空间的状态码。
             * - AVAILABLE：状态取值为0，表示正常。
             * - DELETED：状态取值为1，表示已删除。
             * - INITIALIZING：状态取值为2，表示初始化。
             * - INIT_FAILED：状态取值为3，表示初始化失败。
             * - FORBIDDEN：状态取值为4，表示手动禁用。
             * - DELETING：状态取值为5，表示删除中。
             * - DEL_FAILED：状态取值为6，表示删除失败。
             * - FROZEN：状态取值为7，表示欠费冻结。
             * - UPDATING：状态取值为8，表示项目更新（为项目添加并初始化计算引擎）中。
             * - UPDATE_FAILED：状态取值为9，表示项目更新（为项目添加并初始化计算引擎）失败。
             * @example `AVAILABLE`
             */
            ProjectStatusCode: string;
            /**
             * 工作空间的状态。
             * - AVAILABLE：状态取值为0，表示正常。
             * - DELETED：状态取值为1，表示已删除。
             * - INITIALIZING：状态取值为2，表示初始化。
             * - INIT_FAILED：状态取值为3，表示初始化失败。
             * - FORBIDDEN：状态取值为4，表示手动禁用。
             * - DELETING：状态取值为5，表示删除中。
             * - DEL_FAILED：状态取值为6，表示删除失败。
             * - FROZEN：状态取值为7，表示欠费冻结。
             * - UPDATING：状态取值为8，表示项目更新（为项目添加并初始化计算引擎）中。
             * - UPDATE_FAILED：状态取值为9，表示项目更新（为项目添加并初始化计算引擎）失败。
             * @example `0`
             */
            ProjectStatus: number;
            /**
             * 工作空间的显示名称。
             * @example `test_project`
             */
            ProjectName: string;
            /**
             * 工作空间的名称。
             * @example `test_project`
             */
            ProjectIdentifier: string;
            /**
             * 工作空间的ID。
             * @example `466230`
             */
            ProjectId: number;
            /**
             * 工作空间的详细描述信息。
             * @example `test_describe`
             */
            ProjectDescription: string;
            /**
             * 工作空间所有者的用户ID。
             * @example `13969939245****`
             */
            ProjectOwnerBaseId: string;
            /**
             * 资源组ID。
             * @example `rg-acfmzbn7****`
             */
            ResourceManagerResourceGroupId: string;
            /**
             * 工作空间绑定的标签列表。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `key`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `value`
                 */
                Value: string;
            }[];
            /**
             * 是否禁用开发角色，取值如下：
             * -  **false**：开启开发角色。
             * -  **true**：禁用开发角色。
             * @example `true`
             */
            DisableDevelopment: boolean;
            /**
             * 访问MaxCompute引擎是否使用代理账号。
             * - **false**：不使用。
             * - **true**：使用。
             * @example `true`
             */
            UseProxyOdpsAccount: boolean;
            /**
             * MaxCompute表的可见性权限，取值如下：
             * - **0**：租户内用户不可见MaxCompute表。
             * - **1**：租户内用户可见MaxCompute表。
             * @example `1`
             */
            TablePrivacyMode: number;
            /**
             * 是否为默认工作空间，取值如下：
             * - **1**：是。
             * - **0**：否。
             * @example `1`
             */
            IsDefault: number;
        }[];
    };
}
