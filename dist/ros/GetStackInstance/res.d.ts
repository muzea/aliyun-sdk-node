export interface GetStackInstanceResponse {
    /**
     * 请求ID。
     * @example `B8A6B693-82C8-419D-8796-DE99EC33CFF9`
     */
    RequestId: string;
    /**
     * 资源栈详情。
     */
    StackInstance: {
        /**
         * 资源栈的状态。
         * 取值：
         * - CURRENT：资源栈是最新的。
         * - OUTDATED：资源栈不是资源栈组最新的。可能原因如下：
         *     - 在创建资源栈（CreateStackInstances）操作期间，创建对应的资源栈失败。
         *     - 在更新资源栈（UpdateStackInstances或UpdateStackGroup）操作期间，更新对应的资源栈失败，或只更新了部分资源栈。
         *     - 创建或更新操作未完成。
         * @example `CURRENT`
         */
        Status: string;
        /**
         * 资源栈组ID。
         * @example `fd0ddef9-9540-4b42-a464-94f77835****`
         */
        StackGroupId: string;
        /**
         * 资源栈ID。
         * >仅当资源栈状态为CURRENT时，才会返回该参数。
         * @example `35ad60e3-6a92-42d8-8812-f0700d45****`
         */
        StackId: string;
        /**
         * 资源栈组最近一次成功完成偏差检测的时间。
         * >仅当资源栈组做过偏差检测，才会返回该参数。
         * @example `2020-02-27T07:47:47`
         */
        DriftDetectionTime: string;
        /**
         * 资源栈组最近一次成功完成偏差检测的状态。
         * 取值：
         * - DRIFTED：资源栈处于偏差状态。
         * - NOT_CHECKED：资源栈未进行过成功的偏差检测。
         * - IN_SYNC：资源栈处于同步状态。
         * >仅当资源栈组做过偏差检测，才会返回该参数。
         * @example `IN_SYNC`
         */
        StackDriftStatus: string;
        /**
         * 状态原因描述。
         * >仅当资源栈的实例状态为OUTDATED时，才会返回该参数。
         * @example `User initiated stop`
         */
        StatusReason: string;
        /**
         * 覆盖参数列表。
         */
        ParameterOverrides: {
            /**
             * 覆盖参数的名称。
             * @example `Amount`
             */
            ParameterKey: string;
            /**
             * 覆盖参数的值。
             * @example `1`
             */
            ParameterValue: string;
        }[];
        /**
         * 资源栈组名称。
         * @example `MyStackGroup`
         */
        StackGroupName: string;
        /**
         * 资源栈所属目标账号ID。
         * @example `151266687691****`
         */
        AccountId: string;
        /**
         * 资源栈所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 资源目录的资源夹ID。
         * >仅限使用服务管理权限模式的资源栈组，才会返回该参数。
         * @example `fd-4PvlVLOL8v`
         */
        RdFolderId: string;
        /**
         * 资源栈输出列表。
         * > 当OutputOption取值为Enabled时返回该参数。
         */
        Outputs: any[];
    };
}
