export interface DescribeTaskResponse {
    /**
     * 请求id
     * @example `A7FD7411-9395-52E8-AF42-EB3A4A55446D`
     */
    RequestId: string;
    /**
     * 集群id
     * @example `i119982311660892626523`
     */
    ClusterId: string;
    /**
     * 集群名称
     * @example `Standard_Cluster`
     */
    ClusterName: string;
    /**
     * 任务状态
     * @example `running`
     */
    TaskState: string;
    /**
     * 任务类型
     * @example `cut_cluster`
     */
    TaskType: string;
    /**
     * 任务失败信息
     * @example `Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]`
     */
    Message: string;
    /**
     * 执行步骤
     */
    Steps: {
        /**
         * 步骤名称
         * @example `create_vpd`
         */
        StepName: string;
        /**
         * 步骤执行状态
         * @example `execution_success`
         */
        StepState: string;
        /**
         * 步骤类型
         * @example `normal`
         */
        StepType: string;
        /**
         * 子任务
         */
        SubTasks: {
            /**
             * 任务id
             * @example `i158805051661047928377`
             */
            TaskId: string;
            /**
             * 任务类型
             * @example `cut_node_sub_task`
             */
            TaskType: string;
            /**
             * 创建时间
             * @example `2022-11-30T2:00:00.852Z`
             */
            CreateTime: string;
            /**
             * 更新时间
             * @example `2022-11-30T02:20:14.852Z`
             */
            UpdateTime: string;
            /**
             * 子任务失败信息
             * @example `Releasing [prod_main_mid_26e234cf] in region [cn-beijing] with weight [0]`
             */
            Message: string;
            /**
             * 任务执行状态
             * @example `running`
             */
            TaskState: string;
        }[];
        /**
         * 阶段标记
         * @example `节点缩容`
         */
        StageTag: string;
        /**
         * 步骤失败信息
         * @example `get taskinfo failed`
         */
        Message: string;
        /**
         * 开始时间
         * @example `2022-11-30T2:00:00.852Z`
         */
        StartTime: string;
        /**
         * 更新时间
         * @example `2022-11-30T02:20:14.852Z`
         */
        UpdateTime: string;
    }[];
    /**
     * 开始时间
     * @example `2022-11-30T02:00:00.852Z`
     */
    CreateTime: string;
    /**
     * 更新时间
     * @example `2022-11-30T03:40:14.852Z`
     */
    UpdateTime: string;
    /**
     * 节点ID列表
     */
    NodeIds: string[];
}
