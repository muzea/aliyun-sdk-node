export interface DescribeUsersResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 下一次查询的Token。NextToken为空表示没有下一次。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 便捷用户信息集合。
     */
    Users: {
        /**
         * 用户ID。
         * @example `4205**`
         */
        Id: number;
        /**
         * 用户名。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 邮箱。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 手机号，如未设置该参数则不返回该参数。
         * @example `1381111****`
         */
        Phone: string;
        /**
         * 状态。
         * @example `0`
         */
        Status: number;
        /**
         * 便捷账号类型，包括：
         * * 管理员激活类型，管理员设置用户名及用户密码，重置密码等用户通知将发送到管理员的邮箱或手机。
         * * 用户激活类型，管理员设置用户名及用户接收通知的邮件或手机，云桌面开通通知（含初始密码）等用户通知将发送到用户的邮件或手机。
         * @example `Normal`
         */
        OwnerType: string;
        /**
         * 用户的备注。
         * @example `测试专用用户`
         */
        Remark: string;
        /**
         * 用户归属的部门ID。
         * > 该参数即将废弃。
         * @example `org-4mdgc1cocc59z****`
         */
        OrgId: string;
        /**
         * 用户全局唯一ID。
         * @example `41fd1254d8f7****`
         */
        WyId: string;
        /**
         * 是否为用户管理员。如果创建的便捷用户是管理员激活类型，则必须指定一位用户管理员，终端用户通过客户端重置密码等通知将发送到该用户管理员的邮箱或手机，详情参见[创建便捷用户](~~214472~~)。
         * @example `true`
         */
        IsTenantManager: boolean;
        /**
         * 用户归属的用户组集合。
         */
        Groups: {
            /**
             * 用户组ID。
             * @example `ug-12341234****`
             */
            GroupId: string;
            /**
             * 用户组名称。
             * @example `用户组1`
             */
            GroupName: string;
        }[];
        /**
         * 用户归属的部门集合。
         */
        Orgs: {
            /**
             * 部门ID。
             * @example `org-4mdgc1cocc59z****`
             */
            OrgId: string;
            /**
             * 部门名称。
             * @example `部门1`
             */
            OrgName: string;
        }[];
        /**
         * 用户头像。
         * @example `https://cdn.*****`
         */
        Avatar: string;
        /**
         * 用户工作地址。
         * @example `杭州市***`
         */
        Address: string;
        /**
         * 用户工号。
         * @example `A10000**`
         */
        JobNumber: string;
        /**
         * 用户昵称。
         * @example `李**`
         */
        NickName: string;
    }[];
}
