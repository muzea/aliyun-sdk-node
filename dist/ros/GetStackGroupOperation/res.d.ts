export interface GetStackGroupOperationResponse {
    /**
     * 请求ID。
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 资源栈组操作详情。
     */
    StackGroupOperation: {
        /**
         * 操作状态。
         * 取值：
         * - RUNNING：操作正在进行中。
         * - SUCCEEDED：操作成功。
         * - FAILED：操作失败。
         * - STOPPING：操作正在停止中。
         * - STOPPED：操作已停止。
         * @example `SUCCEEDED`
         */
        Status: string;
        /**
         * 资源栈组ID。
         * @example `fd0ddef9-9540-4b42-a464-94f77835****`
         */
        StackGroupId: string;
        /**
         * 操作动作。
         * 取值：
         * - CREATE：创建。
         * - UPDATE：更新。
         * - DELETE：删除。
         * - DETECT_DRIFT：偏差检测。
         * @example `DELETE`
         */
        Action: string;
        /**
         * 操作开始时间。
         * @example `2020-01-20T09:22:3`
         */
        CreateTime: string;
        /**
         * 是否保留资源栈。删除资源栈实例时可选择删除或保留它所指向的资源栈。
         * 取值：
         * - true：只删除资源栈实例，不删除相应的资源栈。
         * - false：删除资源栈实例和相应的资源栈，请您谨慎操作。
         * >仅在您执行删除资源栈实例的操作时，才会返回该参数。
         * @example `true`
         */
        RetainStacks: boolean;
        /**
         * 资源栈组名称。
         * @example `MyStackGroup`
         */
        StackGroupName: string;
        /**
         * 资源栈组操作ID。
         * @example `6da106ca-1784-4a6f-a7e1-e723863d****`
         */
        OperationId: string;
        /**
         * 操作描述。
         * >仅在您调用[CreateStackInstances](~~151338~~)执行创建资源栈实例操作时，指定了请求参数OperationDescription，此处才会返回该参数。
         * @example `Create stack instance in hangzhou`
         */
        OperationDescription: string;
        /**
         * 偏差检测的详情。
         * >仅在您执行偏差检测的操作时，才会返回该参数。
         */
        StackGroupDriftDetectionDetail: {
            /**
             * 偏差检测时间。
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
             * 偏差检测状态。
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
         * 操作设置。
         */
        OperationPreferences: {
            /**
             * 最大并发账号数。每个地域中可同时部署资源栈的账号数。
             * 取值范围：1~20。
             * >只能返回MaxConcurrentCount和MaxConcurrentPercentage其中一个参数。
             * @example `1`
             */
            MaxConcurrentCount: number;
            /**
             * 容错数。每个地域中资源栈可以失败的账号数，超过该数字将停止该地域中的操作。如果停止了一个地域中的操作，此操作在其他地域中不继续执行。
             * 取值范围：0~20。
             * >只能返回FailureToleranceCount和FailureTolerancePercentage其中一个参数。
             * @example `1`
             */
            FailureToleranceCount: number;
            /**
             * 最大并发账号百分比。每个地域中可同时部署资源栈的账号数占总账号数的百分比。
             * 取值范围：1~100。
             * >只能返回MaxConcurrentCount和MaxConcurrentPercentage其中一个参数。
             * @example `10`
             */
            MaxConcurrentPercentage: number;
            /**
             * 操作中按执行顺序排列的地域列表。
             */
            RegionIdsOrder: string[];
            /**
             * 容错百分比。每个地域中资源栈可以失败的账号数占总账号数的百分比，超过该百分比将停止该地域中的操作。
             * 取值范围：0~100。
             * >只能返回FailureToleranceCount和FailureTolerancePercentage其中一个参数。
             * @example `10`
             */
            FailureTolerancePercentage: number;
        };
        /**
         * 操作结束时间。
         * @example `2020-01-20T09:22:4`
         */
        EndTime: string;
        /**
         * 创建自助管理权限模式的资源栈组时，需指定的供管理员角色（AliyunROSStackGroupAdministrationRole）扮演的RAM执行角色名称。若不指定，则默认返回AliyunROSStackGroupExecutionRole。
         * @example `AliyunROSStackGroupExecutionRole`
         */
        ExecutionRoleName: string;
        /**
         * 创建自助管理权限模式的资源栈组时，指定的供ROS扮演的RAM管理员角色名称。若不指定，则默认返回AliyunROSStackGroupAdministrationRole。
         * @example `AliyunROSStackGroupAdministrationRole`
         */
        AdministrationRoleName: string;
        /**
         * 使用服务管理权限模式时，资源栈实例的部署目标。
         */
        DeploymentTargets: {
            /**
             * 资源目录的资源夹ID列表。
             */
            RdFolderIds: string[];
            /**
             * 资源目录中的成员账号ID列表。
             * >仅在您调用[UpdateStackInstances](~~151716~~)执行更新资源栈实例操作时，指定了请求参数AccountIds，此处才会返回该参数。
             */
            AccountIds: string[];
        };
    };
}
