export interface GetGroupResponse {
    /**
     * 用户组信息。
     */
    Group: {
        /**
         * 用户组的名称。
         * @example `TestGroup`
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
         * @example `2021-11-01T02:38:27Z`
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
     * @example `768F908D-A66A-5A5D-816C-20C93CBBFEE3`
     */
    RequestId: string;
}
