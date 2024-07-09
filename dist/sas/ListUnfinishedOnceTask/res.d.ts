export interface ListUnfinishedOnceTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F5CF78A7-30AA-59DB-847F-13EE3AE7****`
     */
    RequestId: string;
    /**
     * 任务详情列表。
     */
    OnceTasks: {
        /**
         * 状态。
         * @example `1`
         */
        Status: number;
        /**
         * 任务运行的状态。取值：
         * - **INIT**：待启动
         * - **START**：已启动
         * - **SUCCESS**：已完成
         * - **TIMEOUT**：已超时
         * @example `SUCCESS`
         */
        StatusText: string;
        /**
         * 导出进度百分比（%）。
         * @example `75`
         */
        Progress: number;
        /**
         * 任务执行时间。
         * @example `1670307567000`
         */
        RealRunTime: number;
        /**
         * 任务名称。
         * @example `IMAGE_SCAN`
         */
        TaskName: string;
        /**
         * 任务是否完成。
         * - **0**：未完成
         * - **1**：已完成
         * @example `1`
         */
        Finish: number;
        /**
         * 总数，分页查询时生效。
         * @example `30`
         */
        TotalCount: number;
        /**
         * 结束时间。
         * @example `1670307567000`
         */
        EndTime: number;
        /**
         * 任务类型。
         * @example `IMAGE_SCAN`
         */
        TaskType: string;
        /**
         * 开始执行时间。
         * @example `1640102400000`
         */
        StartTime: number;
        /**
         * 执行结果。
         * @example `TASK_NOT_SUPPORT_REGION`
         */
        ResultInfo: string;
        /**
         * 任务目标。
         * @example `238cf050a7270dd6940602e70f1e5a11eeaf4e02035f445b7f613ff5e064****`
         */
        Target: string;
        /**
         * 任务ID。
         * @example `9fb50f2af8bb67c9fdb684194c83****`
         */
        TaskId: string;
        /**
         * 已完成的记录数。
         * @example `67`
         */
        FinishCount: number;
        /**
         * 扫描对象类型。
         * - **IMAGE_REPO**：镜像仓库。
         * - **IMAGE**：镜像。
         * @example `IMAGE`
         */
        TargetType: string;
        /**
         * 镜像扫描相关的信息。
         */
        TaskImageInfo: {
            /**
             * 镜像仓库ID。
             * @example `crr-r88w2vryp8m****`
             */
            RepoId: string;
            /**
             * 镜像digest。
             * @example `default_digest`
             */
            Digest: string;
            /**
             * 镜像标签。
             * @example `v1.20-002-a2*****`
             */
            Tag: string;
            /**
             * 镜像仓库的地域ID。
             * @example `cn-hangzhou`
             */
            RepoRegionId: string;
            /**
             * 镜像仓库名称。
             * @example `testyyy`
             */
            RepoName: string;
            /**
             * 镜像命名空间。
             * @example `bitn***`
             */
            RepoNamespace: string;
            /**
             * 服务器镜像所在的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 容器镜像。
             * @example `***s.com/sas_test/baseli***`
             */
            Image: string;
            /**
             * 镜像pod信息。
             * @example `expoit-law-****`
             */
            Pod: string;
            /**
             * 应用名称。
             * @example `ack-jenkins-****`
             */
            AppName: string;
            /**
             * 节点的名称。
             * @example `pztest****`
             */
            NodeName: string;
            /**
             * 节点IP地址。
             * @example `172.18.XXX.XXX`
             */
            NodeIp: string;
            /**
             * 节点实例ID。
             * @example `i-0xi5mxvtmfw9****`
             */
            NodeInstanceId: string;
            /**
             * 集群的ID。
             * @example `a765ba1435e7f9446065370e9a41****`
             */
            ClusterId: string;
            /**
             * 查询服务下某个集群的实例列表时所需要的参数。
             * @example `ACK-test-****`
             */
            ClusterName: string;
        };
    }[];
}
