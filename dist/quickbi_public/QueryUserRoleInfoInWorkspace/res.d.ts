export interface QueryUserRoleInfoInWorkspaceResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 用户的预置空间角色信息。
     */
    Result: {
        /**
         * 预置角色编码。
         * @example `role_workspace_admin`
         */
        RoleCode: string;
        /**
         * 预置角色名称。
         * @example `空间管理员`
         */
        RoleName: string;
        /**
         * 预置角色ID。取值范围：
         * - 25：空间管理员
         * - 26：空间开发者
         * - 27：空间分析师
         * - 30：空间查看者
         * @example `25`
         */
        RoleId: number;
    };
}
