export interface ListResourceMembersResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 成功 false 失败
     * @example `true`
     */
    success: boolean;
    /**
     * 成员
     */
    resourceMembers: {
        /**
         * 账号id
         * @example `22212212`
         */
        accountId: string;
        /**
         * 角色部署组 hostGroup
         * - user 成员，使用权限
         * - admin 管理员，使用编辑权限
         * -  owner 拥有者，所有权限
         * 流水线 pipeline
         * - owner 拥有者，所有权限
         * - admin  查看、运行、编辑权限
         * -  member 运行权限
         * - viewer 查看权限
         * @example `admin`
         */
        roleName: string;
        /**
         * 用户名称
         * @example `张三`
         */
        username: string;
    }[];
}
