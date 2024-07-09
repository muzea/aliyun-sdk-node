export interface ListPermissionApplyOrdersResponse {
    /**
     * 请求ID。
     * @example `0bc1ec92159376****`
     */
    RequestId: string;
    /**
     * 权限申请单的分页查询结果。
     */
    ApplyOrders: {
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 返回的权限申请单总数。
         * @example `150`
         */
        TotalCount: number;
        /**
         * 权限申请单列表。
         */
        ApplyOrder: {
            /**
             * 提交申请单的阿里云用户UID。
             * @example `267842600408993176`
             */
            ApplyBaseId: string;
            /**
             * 申请单的提交时间，显示为一个unix时间戳。
             * @example `1615284086000`
             */
            ApplyTimestamp: number;
            /**
             * 申请单ID。
             * @example `ad8da78d-8135-455e-9486-27cf213fc140`
             */
            FlowId: string;
            /**
             * 申请单的状态。取值如下：
             * - 1：待审批。
             * - 2：审批通过，授权成功。
             * - 3：审批通过，授权失败。
             * - 4：审批拒绝。
             * @example `2`
             */
            FlowStatus: number;
            /**
             * 申请单的内容。
             */
            ApproveContent: {
                /**
                 * 申请的原因。用于管理员进行评估审批。
                 * @example `I need to use this table`
                 */
                ApplyReason: string;
                /**
                 * 申请单类型。目前仅支持取值为1，表示对象ACL权限申请。
                 * @example `1`
                 */
                OrderType: number;
                /**
                 * 申请对象的内容。
                 */
                ProjectMeta: {
                    /**
                     * 申请权限的MaxCompute项目所属的DataWorks工作空间名称。
                     * @example `aWorkspaceName`
                     */
                    WorkspaceName: string;
                    /**
                     * 申请的对象信息。
                     */
                    ObjectMetaList: {
                        /**
                         * 申请的表名称。
                         * @example `aTableName`
                         */
                        ObjectName: string;
                        Actions: string[];
                    }[];
                };
            };
        }[];
    };
}
