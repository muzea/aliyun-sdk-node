export interface GetPermissionResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 权限点的名字，同地域内唯一。权限点介绍，请参见[角色及权限列表](https://pai.console.aliyun.com/?spm=api-workbench.API%20Explorer.0.0.7a862392uO09Se&regionId=cn-shanghai#/workspace/permission)。
     * @example `PaiDLC:ListJobs`
     */
    PermissionCode: string;
    /**
     * 权限规则列表。
     */
    PermissionRules: {
        /**
         * 访问类型，可能值：
         * - PUBLIC：当前工作空间所有成员都可以操作。
         * - PRIVATE：只有创建者可以操作。
         * - ANY：创建者和非创建者都可以操作。
         * @example `PRIVATE`
         */
        Accessibility: string;
        /**
         * 存取类型。
         * 当Accessibility为PUBLIC，所有用户都能操作，此值无效；
         * 当Accessibility为PRIVATE，EntityAccessType支持如下值：
         * - CREATOR：只有创建者可以操作。
         * - ANY：创建者和非创建者都可以操作。
         * @example `CREATOR`
         */
        EntityAccessType: string;
    }[];
}
