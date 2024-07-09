export interface DescribeUsersPasswordResponse {
    /**
     * 请求ID。
     * @example `F7B4B17B-5C8A-514C-AA4D-F8090E3A63E9`
     */
    RequestId: string;
    /**
     * 云电脑的授权用户列表。
     */
    DesktopUsers: {
        /**
         * 用户的展示名称。
         * @example `demo_user01_1488****`
         */
        DisplayName: string;
        /**
         * 用户的密码。
         * @example `3q8p-NDey-2Nac-TWcQ-****`
         */
        Password: string;
        /**
         * 用户ID。
         * @example `demo_user01`
         */
        EndUserId: string;
    }[];
}
