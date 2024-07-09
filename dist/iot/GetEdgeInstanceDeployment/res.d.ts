export interface GetEdgeInstanceDeploymentResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `6B72291A-9492-445E-81D9-335D2D3E44C0`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 部署单创建的Unix时间戳。
         * @example `1581912859713`
         */
        GmtCreateTimestamp: number;
        /**
         * 部署单类型。
         * - deploy：部署。
         * - reset：重置。
         * @example `deploy`
         */
        Type: string;
        /**
         * 部署单当前状态。
         * - 0：未开始（init）。
         * - 1：正在进行中（processing）。
         * - 2：成功（success）。
         * - 3：失败（failure）。
         * @example `2`
         */
        Status: number;
        /**
         * 部署单ID。
         * @example `9261e308a9504fde9b4cf8462b0b****`
         */
        DeploymentId: string;
        /**
         * 部署单描述。
         * @example `deploy_1561543948874`
         */
        Description: string;
        /**
         * 部署单最后一次更新的Unix时间戳。
         * @example `1581912859713`
         */
        GmtModifiedTimestamp: number;
        /**
         * 部署完成时间。
         * @example `2019-06-26 18:12:35`
         */
        GmtCompleted: string;
        /**
         * 部署单创建时间。
         * @example `2019-06-26 18:12:29`
         */
        GmtCreate: string;
        /**
         * 部署完成的Unix时间戳。
         * @example `1581912859713`
         */
        GmtCompletedTimestamp: number;
        /**
         * 部署单最后一次更新时间。
         * @example `2019-06-26 18:12:35`
         */
        GmtModified: string;
        /**
         * 部署任务列表。
         */
        TaskList: {
            /**
             * 部署任务创建的Unix时间戳。
             * @example `1581912859713`
             */
            GmtCreateTimestamp: number;
            /**
             * 部署任务当前状态。
             * - 0：初始状态（init）。
             * - 1：正在进行中（processing）。
             * - 2：成功（success）。
             * - 3：失败（failure）。
             * @example `2`
             */
            Status: number;
            /**
             * 部署任务当前阶段。
             * - 0：未开始（init）。
             * - 8：正在装配（assembly）。
             * - 16：正在打包（package）。
             * - 24：正在分发（dispatcher）。
             * - 32：已完成（finish）。
             * @example `32`
             */
            Stage: number;
            /**
             * 网关设备ID。
             * @example `jQWf3MVgQjMzcwsY****000101`
             */
            GatewayId: string;
            /**
             * 部署任务最后一次更新的Unix时间戳。
             * @example `1581912859713`
             */
            GmtModifiedTimestamp: number;
            /**
             * 部署任务完成时间。
             * @example `2019-06-26 18:12:35`
             */
            GmtCompleted: string;
            /**
             * 部署任务创建时间。
             * @example `2019-06-26 18:12:29`
             */
            GmtCreate: string;
            /**
             * 部署任务完成的Unix时间戳。
             * @example `1581912859713`
             */
            GmtCompletedTimestamp: number;
            /**
             * 部署任务最后一次更新时间。
             * @example `2019-06-26 18:12:35`
             */
            GmtModified: string;
            /**
             * 部署任务ID。
             * @example `49ea651529014bf8b5645d5f9062****`
             */
            TaskId: string;
            /**
             * 部署快照列表。
             */
            ResourceSnapshotList: {
                /**
                 * 当前状态。
                 * - 0：未开始（init）。
                 * - 1：正在进行（processing）。
                 * - 2：成功（success）。
                 * - 3：失败（failure）。
                 * @example `2`
                 */
                Status: number;
                /**
                 * 部署单快照创建的Unix时间戳。
                 * @example `1581912859713`
                 */
                GmtCreateTimestamp: number;
                /**
                 * 部署单快照当前阶段。
                 * - 0：初始状态（init）。
                 * - 8：正在编译（assembly）。
                 * - 16：正在打包（package）。
                 * - 24：正在分发（dispatcher）。
                 * - 32：已完成（finish）。
                 * @example `32`
                 */
                Stage: number;
                /**
                 * 部署单快照最后一次更新的Unix时间戳。
                 * @example `1581912859713`
                 */
                GmtModifiedTimestamp: number;
                /**
                 * 部署单快照最后一次更新时间。
                 * @example `2019-06-26 18:12:34`
                 */
                GmtModified: string;
                /**
                 * 资源部署日志。
                 * @example `[{\"resourceId\":\"device_config\",\"code\":\"0\",\"stage\":0,\"level\":\"INFO\",\"message\":\"init success\",\"resourceType\":\"DEVICE_CONFIG\",\"timestamp\":1561543949858},{\"resourceId\":\"device_config\",\"code\":\"0\",\"stage\":8,\"level\":\"INFO\",\"message\":\"assembly success\",\"resourceType\":\"DEVICE_CONFIG\",\"timestamp\":1561543951419},{\"resourceId\":\"device_config\",\"code\":\"0\",\"stage\":16,\"level\":\"INFO\",\"message\":\"package success\",\"resourceType\":\"DEVICE_CONFIG\",\"timestamp\":1561543952591},{\"resourceId\":\"device_config\",\"code\":\"0\",\"stage\":32,\"level\":\"INFO\",\"message\":\"download success\",\"resourceType\":\"DEVICE_CONFIG\",\"timestamp\":1561543954149}]`
                 */
                Log: string;
                /**
                 * 操作类型。
                 * - 0：部署（deploy）。
                 * - 1：删除（delete）。
                 * @example `0`
                 */
                OperateType: number;
                /**
                 * 资源类型。
                 * @example `device_config`
                 */
                ResourceType: string;
                /**
                 * 部署快照ID。
                 * @example `ab576e84a43043d7840cbcebf4a5****`
                 */
                SnapshotId: string;
                /**
                 * 部署单快照完成时间。
                 * @example `2019-06-26 18:12:34`
                 */
                GmtCompleted: string;
                /**
                 * 部署单快照创建时间。
                 * @example `2019-06-26 18:12:29`
                 */
                GmtCreate: string;
                /**
                 * 部署单快照完成的Unix时间戳。
                 * @example `1581912859713`
                 */
                GmtCompletedTimestamp: number;
                /**
                 * 资源ID。
                 * @example `device_config`
                 */
                ResourceId: string;
                /**
                 * 资源名称。
                 * @example `device_config`
                 */
                ResourceName: string;
            }[];
        }[];
    };
}
