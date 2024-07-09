export interface DescribeOnceTaskLeafRecordPageResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB393****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总记录数。
         * @example `16`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的记录数。
         * @example `6`
         */
        Count: number;
    };
    /**
     * 任务详情列表。
     */
    OnceTasks: {
        /**
         * 状态。
         * @example `0`
         */
        Status: string;
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
        TotalCount: string;
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
        FinishCount: string;
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
             * 镜像digest
             * @example `9e0dc29d872d2e386cc5c0c92b529a84e3acfade16f5cb1d054a2ee3c99****`
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
             * 集群名称。
             * @example `ACK-test-****`
             */
            ClusterName: string;
            /**
             * 耗时统计，JSON格式，展示各项的结束时间。
             * - **vul**：系统漏洞。
             * - **scaVul**：应用漏洞。
             * - **baseline**：基线。
             * - **binary**：二进制。
             * - **forbiddenPackageInfo**：禁止安装。
             * - **identificationInfo**：身份鉴别。
             * - **script**：恶意脚本。
             * - **sensitiveFile**：敏感文件。
             * - **sensitiveInfo**：AK检测。
             * - **webshell**：网站脚本。
             * @example `{"scaVul":"2023-09-04 09:37:21","identificationInfo":"2023-09-04 09:37:30","forbiddenPackageInfo":"2023-09-04 09:37:16","binary":"2023-09-04 09:37:25","baseline":"2023-09-04 09:37:19","sensitiveFile":"2023-09-04 09:38:34","vul":"2023-09-04 09:37:31","webshell":"2023-09-04 09:38:27","sensitiveInfo":"2023-09-04 09:37:16","script":"2023-09-04 09:39:44"}`
             */
            CostTimeInfo: string;
        };
    }[];
}
