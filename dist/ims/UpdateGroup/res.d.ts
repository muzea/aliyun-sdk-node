export interface UpdateGroupResponse {
    /**
     * 用户组信息。
     */
    Group: {
        /**
         * 用户组显示名称。
         * @example `Test-Team`
         */
        DisplayName: string;
        /**
         * 用户组ID。
         * @example `740317625433843****`
         */
        GroupId: string;
        /**
         * 更新时间。
         * @example `2020-10-20T03:44:27Z`
         */
        UpdateDate: string;
        /**
         * 用户组名称。
         * @example `Test-Team`
         */
        GroupName: string;
        /**
         * 备注。
         * @example `测试团队`
         */
        Comments: string;
        /**
         * 创建时间。
         * @example `2020-10-19T16:15:17Z`
         */
        CreateDate: string;
    };
    /**
     * 请求ID。
     * @example `CDA656E3-3CE9-4A03-A8A3-B42A0C3C3287`
     */
    RequestId: string;
}
