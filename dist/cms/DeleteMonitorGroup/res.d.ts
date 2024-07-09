export interface DeleteMonitorGroupResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `CA35B3AE-4FFD-4A33-AE67-67EF68711EFA`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 被删除应用分组列表。
     */
    Group: {
        /**
         * 应用分组名称。
         * @example `ECS_test`
         */
        GroupName: string;
        ContactGroups: {
            /**
             * 报警联系组。
             */
            ContactGroup: {
                /**
                 * 报警联系组名称。
                 * @example `ECS_Group`
                 */
                Name: string;
            }[];
        };
    };
}
