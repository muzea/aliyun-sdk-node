export interface ListStackGroupsResponse {
    /**
     * 资源栈组列表。
     */
    StackGroups: {
        /**
         * 资源栈组ID。
         * @example `fd0ddef9-9540-4b42-a464-94f77835****`
         */
        StackGroupId: string;
        /**
         * 资源栈组状态。
         * 取值：
         * - ACTIVE：已激活。
         * - DELETED：已删除。
         * @example `ACTIVE`
         */
        Status: string;
        /**
         * 资源栈组最近一次成功执行偏差检测的时间。
         * @example `2020-02-27T07:47:47`
         */
        DriftDetectionTime: string;
        /**
         * 资源栈组描述。
         * @example `My Stack Group`
         */
        Description: string;
        /**
         * 资源栈组在最近一次成功执行的偏差检测中的偏差状态。
         * 取值：
         * - DRIFTED：存在偏差。
         * - NOT_CHECKED：未检测偏差。
         * - IN_SYNC：不存在偏差。
         * @example `IN_SYNC`
         */
        StackGroupDriftStatus: string;
        /**
         * 资源栈组名称。
         * @example `MyStackGroup`
         */
        StackGroupName: string;
        /**
         * 资源栈组的标签。
         */
        Tags: {
            /**
             * 资源栈组的标签键。
             * @example `usage1`
             */
            Key: string;
            /**
             * 资源栈组的标签值。
             * @example `test1`
             */
            Value: string;
        }[];
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxcj****`
         */
        ResourceGroupId: string;
        /**
         * 授权模式。
         * 取值：
         * - SELF_MANAGED：自助管理权限模式。
         * - SERVICE_MANAGED：服务管理权限模式。
         * >关于资源栈组的授权模式，请参见[概览](~~154578~~)。
         * @example `SELF_MANAGED`
         */
        PermissionModel: string;
        /**
         * 自动部署设置信息。
         */
        AutoDeployment: {
            /**
             * 启用或者禁用自动部署。
             * 取值：
             * - true：启用自动部署。启用自动部署后，如果目标资源夹中新增了成员账号，资源栈组会自动将资源栈实例部署到目标资源夹中新增账户的指定地域下。如果从目标资源夹中删除账户，资源栈组将从此账户的指定地域中删除资源栈实例。
             * - false：禁用自动部署。禁用自动部署后，目标资源夹中成员账号变动时资源栈实例不会发生变化。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 目标资源夹中删除成员账号时，是否保留成员账号中的资源栈。
             * 取值：
             * - true：保留资源栈。
             * - false：删除资源栈。
             * >仅当Enabled返回true时，才会返回RetainStacksOnAccountRemoval。
             * @example `true`
             */
            RetainStacksOnAccountRemoval: boolean;
        };
        /**
         * 资源栈组创建时间。
         * @example `2024-01-05T05:38:31`
         */
        CreateTime: string;
        /**
         * 资源栈组更新时间。
         * @example `2024-02-15T16:40:25`
         */
        UpdateTime: string;
    }[];
    /**
     * 资源栈组总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询时设置的页码。
     * @example `1`
     */
    PageNumber: number;
}
