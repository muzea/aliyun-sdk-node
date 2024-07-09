export interface GetJobResponse {
    /**
     * 任务ID。
     * @example `dlc*******`
     */
    JobId: string;
    /**
     * 任务类型。由[CreateJob](~~459672~~) API中的JobType指定。
     * @example `TFJob`
     */
    JobType: string;
    /**
     * 任务名称。
     * @example `tf-mnist-test`
     */
    DisplayName: string;
    /**
     * 任务提交人的阿里云UID。
     * @example `12*********`
     */
    UserId: string;
    /**
     * 任务运行状态，可能值：
     * - Created
     * - Creating
     * - Queuing
     * - Dequeued
     * - Running
     * - Stopping
     * - Succeeded
     * - Failed
     * - Stopped
     * @example `Stopped`
     */
    Status: string;
    /**
     * 任务所属工作空间ID。
     * @example `268`
     */
    WorkspaceId: string;
    /**
     * 任务所属工作空间名称。
     * @example `dlc-workspace`
     */
    WorkspaceName: string;
    /**
     * 任务运行所在的资源组ID。
     * @example `r******`
     */
    ResourceId: string;
    /**
     * 任务运行时使用的资源级别。
     * @example `L0`
     */
    ResourceLevel: string;
    /**
     * 状态详情码，对当前状态（Status）下的子状态的一个分类。
     * @example `JobStoppedByUser`
     */
    ReasonCode: string;
    /**
     * 状态详情的详细描述。
     * @example `Job is stopped by user.`
     */
    ReasonMessage: string;
    /**
     * 任务中的节点配置，参考CreateJob API中的**JobSpecs**。
     */
    JobSpecs: any[];
    /**
     * 每个节点的启动命令。
     * @example `python /root/code/mnist.py`
     */
    UserCommand: string;
    /**
     * 数据源列表。
     */
    DataSources: {
        /**
         * 数据源ID。
         * @example `d*******`
         */
        DataSourceId: string;
        /**
         * 本地挂载路径，可选参数，默认为空（表示使用数据源中挂载路径）。
         * @example `/mnt/data/`
         */
        MountPath: string;
        /**
         * 数据源路径
         * @example `oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/`
         */
        Uri: string;
    }[];
    /**
     * 代码源。
     */
    CodeSource: {
        /**
         * 代码源ID。
         * @example `code******`
         */
        CodeSourceId: string;
        /**
         * 代码分支。
         * @example `master`
         */
        Branch: string;
        /**
         * 代码CommitID。
         * @example `44da109b59f8596152987eaa8f3b2487xxxxxx`
         */
        Commit: string;
        /**
         * 本地挂载路径。
         * @example `/mnt/data`
         */
        MountPath: string;
    };
    /**
     * 需要安装的Python三方库列表。
     */
    ThirdpartyLibs: string[];
    /**
     * 三方库（requirements.txt）文件所在文件夹。
     * @example `/root/code/`
     */
    ThirdpartyLibDir: string;
    /**
     * 环境变量配置。
     */
    Envs: any;
    /**
     * 任务创建时间（UTC）。
     * @example `2021-01-12T14:35:01Z`
     */
    GmtCreateTime: string;
    /**
     * 任务提交到集群的时间（UTC）。
     * @example `2021-01-12T14:36:01Z`
     */
    GmtSubmittedTime: string;
    /**
     * 任务开始运行的时间（UTC）。
     * @example `2021-01-12T14:36:21Z`
     */
    GmtRunningTime: string;
    /**
     * 任务正常结束的时间（UTC）。
     * @example `2021-01-12T15:36:08Z`
     */
    GmtSuccessedTime: string;
    /**
     * 任务停止的时间（UTC）。
     * @example `2021-01-12T15:36:08Z`
     */
    GmtStoppedTime: string;
    /**
     * 任务运行失败的时间（UTC）。
     * @example `2021-01-12T15:36:08Z`
     */
    GmtFailedTime: string;
    /**
     * 任务结束时间（UTC）。
     * @example `2021-01-12T15:36:08Z`
     */
    GmtFinishTime: string;
    /**
     * 任务运行时长，单位：秒。
     * @example `3602`
     */
    Duration: number;
    /**
     * 任务运行中的所有节点。
     */
    Pods: {
        /**
         * 节点类型，与CreateJob中的JobSpecs中的某个JobSpec对应。
         * @example `Worker`
         */
        Type: string;
        /**
         * 节点ID，可用于GetPodLogs和GetPodEvents API获取节点的详细日志和事件。
         * @example `Worker`
         */
        PodId: string;
        /**
         * Pod UID。
         * @example `fe846462-af2c-4521-bd6f-96787a57591d`
         */
        PodUid: string;
        /**
         * 节点状态。可能值：
         * - Pending
         * - Running
         * - Succeeded
         * - Failed
         * - Unknown
         * @example `Running`
         */
        Status: string;
        /**
         * 节点的网络IP地址。
         * @example `10.0.1.2`
         */
        Ip: string;
        /**
         * Pod创建时间（UTC）。
         * @example `2021-01-12T14:36:01Z`
         */
        GmtCreateTime: string;
        /**
         * 节点启动时间（UTC）。
         * @example `2021-01-12T14:36:01Z`
         */
        GmtStartTime: string;
        /**
         * 节点结束时间（UTC）。
         * @example `2021-01-12T15:36:05Z`
         */
        GmtFinishTime: string;
        /**
         * 历史Pods。
         */
        HistoryPods: {
            /**
             * Pod类型。
             * @example `Worker`
             */
            Type: string;
            /**
             * Pod ID。
             * @example `Worker`
             */
            PodId: string;
            /**
             * Pod UID。
             * @example `fe846462-af2c-4521-bd6f-96787a57591d`
             */
            PodUid: string;
            /**
             * Pod状态。
             * @example `Failed`
             */
            Status: string;
            /**
             * Pod IP。
             * @example `10.0.1.3`
             */
            Ip: string;
            /**
             * Pod创建时间（UTC）。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtCreateTime: string;
            /**
             * Pod启动时间（UTC）。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtStartTime: string;
            /**
             * Pod结束时间（UTC）。
             * @example `2021-01-12T14:36:01Z`
             */
            GmtFinishTime: string;
            /**
             * Pod子状态，例如抢占状态。取值如下：
             * - Normal
             * - Evicted
             * @example `Normal`
             */
            SubStatus: string;
            /**
             * Pod资源使用类型。
             * @example `Normal`
             */
            ResourceType: string;
        }[];
        /**
         * Pod子状态，例如抢占状态。取值如下：
         * - Normal
         * - Evicted
         * @example `Normal`
         */
        SubStatus: string;
        /**
         * Pod资源使用类型。
         * @example `Normal`
         */
        ResourceType: string;
    }[];
    /**
     * 请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-xxxxxxxx`
     */
    RequestId: string;
    /**
     * 作业额外参数配置。
     */
    Settings: any;
    /**
     * 集群ID。
     * @example `a*****`
     */
    ClusterId: string;
    /**
     * 弹性任务参数。
     */
    ElasticSpec: any;
    /**
     * 是否开启debugger任务。
     * @example `false`
     */
    EnabledDebugger: boolean;
    /**
     * 任务的优先级。可能值为1~9。
     * @example `1`
     */
    Priority: number;
    /**
     * 作业子状态，例如抢占重试状态。
     * @example `Restarting`
     */
    SubStatus: string;
    /**
     * 作业已使用的重试次数和最大重试次数。
     * @example `0/10`
     */
    RestartTimes: string;
    StatusHistory: any[];
    TenantId: string;
    /**
     * 资源类型，可选值：ECS，Lingjun，ACS
     * @example `ECS`
     */
    ResourceType: string;
}
