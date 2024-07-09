export interface DescribeGroupedContainerInstancesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D`
     */
    RequestId: string;
    /**
     * 数据分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的容器资产的数量。默认值为**20**，表示每页显示20条容器资产信息。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的容器资产的总数量。
         * @example `25`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的容器资产信息的条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 查询到的容器资产信息的列表。
     */
    GroupedContainerInstanceList: {
        /**
         * 风险的等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * @example `low`
         */
        RiskLevel: string;
        /**
         * 容器集群的主机IP。
         * @example `172.114.XX.XX`
         */
        HostIp: string;
        /**
         * 容器组名称。
         * @example `csi-plugin-2n****`
         */
        Pod: string;
        /**
         * 风险状态。取值：
         * - **NO**：无风险。
         * - **YES**：有风险。
         * @example `NO`
         */
        RiskStatus: string;
        /**
         * 创建集群时间戳，单位为毫秒。
         * @example `1600076893000`
         */
        CreateTime: number;
        /**
         * 集群的命名空间。
         * @example `kube-system`
         */
        Namespace: string;
        /**
         * 集群的运行状态。取值：
         * - **running**：集群正在运行。
         * - **stopped**：集群已经停止运行。
         * - **deleted**：集群已经被删除。
         * - **delete_failed**：删除集群失败。
         * - **failed**：创建集群失败。
         * @example `running`
         */
        CusterState: string;
        /**
         * 服务器实例的ID。
         * @example `i-8vb9ul5xec4tua4q****`
         */
        InstanceId: string;
        /**
         * 实例所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 应用名称。
         * @example `oss-liveness-probe`
         */
        AppName: string;
        /**
         * 查询到的容器组数量、应用数量、集群数量或命名空间数量。
         * @example `9`
         */
        InstanceCount: number;
        /**
         * 集群的类型。取值：
         * - **Kubernetes**：Kubernetes专有版。
         * - **ManagedKubernetes**：标准托管集群（边缘集群）。
         * - **Ask**：标准Serverless集群。
         * @example `ManagedKubernetes`
         */
        ClusterType: string;
        /**
         * 集群名称。
         * @example `test`
         */
        ClusterName: string;
        /**
         * 容器组IP。
         * @example `172.114.XX.XX`
         */
        PodIp: string;
        /**
         * 在当前容器组、应用、命名空间或集群中检测出的漏洞数量。
         * @example `1`
         */
        VulCount: number;
        /**
         * 在当前容器组、应用、命名空间或集群中检测出的告警数量。
         * @example `1`
         */
        AlarmCount: number;
        /**
         * 存在风险的实例数量。
         * @example `1`
         */
        RiskInstanceCount: number;
        /**
         * 集群ID。
         * @example `cf3824769c85441b4bf3****`
         */
        ClusterId: string;
        /**
         * 容器镜像。
         * @example `registry-vpc.ap-southeast-5.aliyuncs.com/log-service-release/sls-connector:1.1.77`
         */
        Image: string;
        /**
         * 镜像仓库命名空间。
         * @example `name001`
         */
        ImageRepoNamespace: string;
        /**
         * 镜像仓库名称。
         * @example `test-003`
         */
        ImageRepoName: string;
        /**
         * 镜像仓库标签。
         * @example `dev-20220512-2`
         */
        ImageRepoTag: string;
        /**
         * 镜像digest值。
         * @example `58e58c013f70bbfde140c8a55c1078074b3483479428d4069aa946827fd566cf`
         */
        ImageDigest: string;
        /**
         * 镜像UUID。
         * @example `e4bdec1d9ba7e0967111a7ea467c****`
         */
        ImageUuid: string;
        /**
         * 在当前容器组、应用、命名空间或集群中检测出的基线总数。
         * @example `20`
         */
        HcCount: number;
        /**
         * 集群日志审计同步开关。取值：
         * - **0**：关闭。
         * - **1**：开启。
         * @example `1`
         */
        SyncOpen: number;
        /**
         * 集群日志审计同步状态。取值：
         * - **0**：同步失败。
         * - **1**：同步成功。
         * @example `1`
         */
        SyncStatus: number;
    }[];
}
