export interface ListGroupsForUserResponse {
    /**
     * 请求ID。
     * @example `DA772B52-BF9F-54CA-AC77-AA7A2DA89D46`
     */
    RequestId: string;
    Groups: {
        /**
         * 用户组信息。
         */
        Group: {
            /**
             * 用户组ID。
             * @example `g-zYtroLrgbZR1****`
             */
            GroupId: string;
            /**
             * 用户组名称。
             * @example `Dev-Team`
             */
            GroupName: string;
            /**
             * 备注信息。
             * @example `开发团队`
             */
            Comments: string;
            /**
             * 加入时间。
             * @example `2015-01-23T12:33:18Z`
             */
            JoinDate: string;
        }[];
    };
}
