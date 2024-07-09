export interface ListPermissionsResponse {
    /**
     * 请求ID。
     * @example `2AE63638-5420-56DC-B******8174039A0`
     */
    RequestId: string;
    /**
     * 权限列表。
     */
    Permissions: {
        /**
         * 权限点的名字，同地域内唯一。权限点介绍，请参见[角色及权限列表](https://pai.console.aliyun.com/?spm=api-workbench.API%20Explorer.0.0.7a862392uO09Se&regionId=cn-shanghai#/workspace/permission)。
         * 例如示例值PaiDLC:GetTensorboard，指的是页面中DLC功能模块的查看Tensorboard详情权限。
         * @example `PaiDLC:GetTensorboard`
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
    }[];
    /**
     * 符合过滤条件的数量。
     * @example `1`
     */
    TotalCount: number;
}
