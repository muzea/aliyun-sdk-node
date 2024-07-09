export interface ListGroupsForUserResponse {
    /**
     * 请求ID。
     * @example `7158A935-FB5E-49A7-8E52-FDA5B2B67247`
     */
    RequestId: string;
    Groups: {
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
             * 用户组名称。
             * @example `Test-Team`
             */
            GroupName: string;
            /**
             * 用户组ID。
             * @example `740317625433843****`
             */
            GroupId: string;
            /**
             * 备注。
             * @example `测试团队`
             */
            Comments: string;
            /**
             * RAM用户加入时间。
             * @example `2020-10-20T06:57:00Z`
             */
            JoinDate: string;
        }[];
    };
}
