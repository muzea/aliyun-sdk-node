export interface GetStackGroupResponse {
    /**
     * 请求ID。
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 资源栈组详情。
     */
    StackGroup: {
        /**
         * 资源栈组ID。
         * @example `fd0ddef9-9540-4b42-a464-94f77835****`
         */
        StackGroupId: string;
        /**
         * 资源栈组状态。
         * 取值：
         * - ACTIVE：激活。
         * - DELETED：已删除。
         * @example `ACTIVE`
         */
        Status: string;
        /**
         * 创建自助管理权限模式的资源栈组时，指定的供ROS扮演的RAM管理员角色名称。若不指定，则默认返回AliyunROSStackGroupAdministrationRole。
         * @example `AliyunROSStackGroupAdministrationRole`
         */
        AdministrationRoleName: string;
        /**
         * 资源栈组参数列表。
         */
        Parameters: {
            /**
             * 参数的名称。
             * @example `Amount`
             */
            ParameterKey: string;
            /**
             * 参数的值。
             * @example `12`
             */
            ParameterValue: string;
        }[];
        /**
         * 资源栈组描述。
         * @example `StackGroup Description`
         */
        Description: string;
        /**
         * 资源栈组名称。
         * @example `MyStackGroup`
         */
        StackGroupName: string;
        /**
         * 创建自助管理权限模式的资源栈组时，需指定的供管理员角色（AliyunROSStackGroupAdministrationRole）扮演的RAM执行角色名称。若不指定，则默认返回AliyunROSStackGroupExecutionRole。
         * @example `AliyunROSStackGroupExecutionRole`
         */
        ExecutionRoleName: string;
        /**
         * 模板主体的结构。
         * > 不建议使用该返回参数，建议使用TemplateContent代替。
         * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
         */
        TemplateBody: string;
        /**
         * 资源栈组最近一次成功完成偏差检测的详情。
         */
        StackGroupDriftDetectionDetail: {
            /**
             * 资源栈组偏差检测时间。
             * @example `2020-02-27T07:47:47`
             */
            DriftDetectionTime: string;
            /**
             * 资源栈实例的数量。
             * @example `2`
             */
            TotalStackInstancesCount: number;
            /**
             * 偏差检测失败的资源栈实例的数量。
             * @example `0`
             */
            FailedStackInstancesCount: number;
            /**
             * 资源栈组偏差检测状态。
             * 取值：
             * - COMPLETED：资源栈组偏差检测结束，所有资源栈实例均成功完成了偏差检测。
             * - FAILED：资源栈组偏差检测结束，失败的资源栈实例偏差检测数量超过了设定的阈值。
             * - PARTIAL_SUCCESS：资源栈组偏差检测结束，部分资源栈实例偏差检测失败，但失败数量没有超过阈值。
             * - IN_PROGRESS：资源栈组偏差检测进行中。
             * - STOPPED：用户取消了资源栈组的偏差检测。
             * @example `COMPLETED`
             */
            DriftDetectionStatus: string;
            /**
             * 资源栈组偏差状态。
             * 取值：
             * - DRIFTED：至少一个资源栈实例处于偏差状态。
             * - NOT_CHECKED：资源栈组未进行过成功的偏差检测。
             * - IN_SYNC：所有资源栈实例均处于同步状态。
             * @example `DRIFTED`
             */
            StackGroupDriftStatus: string;
            /**
             * 偏差检测中的资源栈实例的数量。
             * @example `0`
             */
            InProgressStackInstancesCount: number;
            /**
             * 处于同步状态的资源栈实例的数量。
             * @example `1`
             */
            InSyncStackInstancesCount: number;
            /**
             * 取消偏差检测的资源栈实例的数量。
             * @example `0`
             */
            CancelledStackInstancesCount: number;
            /**
             * 处于偏差状态的资源栈实例的数量。
             * @example `1`
             */
            DriftedStackInstancesCount: number;
        };
        /**
         * 资源组ID。取决于创建资源栈组时，指定的资源组ID。
         * @example `rg-acfmxazb4ph6aiy****`
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
         * >仅当PermissionModel为SERVICE_MANAGED时，才会返回此参数。
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
             * >仅当Enabled返回true时，才会返回此参数。
             * @example `true`
             */
            RetainStacksOnAccountRemoval: boolean;
        };
        /**
         * 资源目录中的目标资源夹ID列表。用于将资源栈实例部署在此资源夹中的所有账号中。
         * >仅当PermissionModel为SERVICE_MANAGED时，才会返回此参数。
         */
        RdFolderIds: string[];
        /**
         * 模板主体的结构，JSON格式。
         * 更多信息，请参见[模板语法](~~28857~~)。
         * @example `{
              "ROSTemplateFormatVersion": "2015-09-01"
        }`
         */
        TemplateContent: string;
        /**
         * 资源栈组创建时间。
         * @example `2024-06-14T02:13:50`
         */
        CreateTime: string;
        /**
         * 资源栈组更新时间。
         * @example `2024-06-15T02:01:00`
         */
        UpdateTime: string;
    };
}
