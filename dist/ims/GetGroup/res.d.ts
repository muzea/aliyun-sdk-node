export interface GetGroupResponse {
    /**
     * 用户组信息。
     */
    Group: {
        /**
         * 用户组显示名称。
         * @example `Dev-Team`
         */
        DisplayName: string;
        /**
         * 用户组ID。
         * @example `740317625433843****`
         */
        GroupId: string;
        /**
         * 更新时间。
         * @example `2020-10-19T16:15:17Z`
         */
        UpdateDate: string;
        /**
         * 用户组名称。
         * @example `Dev-Team`
         */
        GroupName: string;
        /**
         * 备注。
         * @example `开发团队`
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
     * @example `86ECEC3C-7262-4C3C-94B4-A98F7CC1F060`
     */
    RequestId: string;
}
