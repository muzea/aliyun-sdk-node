export interface UpdateGroupResponse {
    /**
     * 用户组信息。
     */
    Group: {
        /**
         * 用户组的名称。
         * @example `NewTestGroup`
         */
        GroupName: string;
        /**
         * 用户组的描述。
         * @example `This is a group.`
         */
        Description: string;
        /**
         * 用户组的创建时间。
         * @example `2021-11-01T02:38:27Z`
         */
        CreateTime: string;
        /**
         * 用户组的类型。取值：
         * - Manual：手动创建。
         * - Synchronized：外部同步。
         * @example `Manual`
         */
        ProvisionType: string;
        /**
         * 用户组的修改时间。
         * @example `2021-11-01T06:06:11Z`
         */
        UpdateTime: string;
        /**
         * 用户组的ID。
         * @example `g-00jqzghi2n3o5hkh****`
         */
        GroupId: string;
    };
    /**
     * 请求ID。
     * @example `F723DE01-6276-5DC4-9B1F-9CBE3E1748B2`
     */
    RequestId: string;
}
