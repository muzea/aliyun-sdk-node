export interface ListClustersMetaResponse {
    /**
     * 每页显示的条数。可能值：1~50
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `DD517102-B314-4665-BDAC-A32DE7834D02`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Clusters: {
        /**
         * 集群简要信息数组。
         */
        ClusterInfoSimple: {
            /**
             * 集群状态。可能值：
             * - uninit：未初始化
             * - creating：创建中
             * - Init：初始化中
             * - running：运行中
             * - exception：异常
             * - releasing：释放中
             * @example `running`
             */
            Status: string;
            /**
             * VPC ID。
             * @example `vpc-b3f3edefefeep0760yju****`
             */
            VpcId: string;
            /**
             * 调度服务器类型。可能值：
             * - pbs
             * - slurm
             * - opengridscheduler
             * - deadline
             * @example `pbs`
             */
            SchedulerType: string;
            /**
             * 集群部署模式。可能值：
             * - Standard：账号节点、调度节点、登录节点、计算节点分离部署。
             * - Advanced：HA模式部署。
             * - Simple：账号节点和调度节点混合部署在一个节点上，登录节点和计算节点分离部署。
             * - Tiny：账号节点、调度节点、登录节点混合部署在一个节点上，计算节点分离部署。
             * @example `Standard`
             */
            DeployMode: string;
            /**
             * 是否启用弹性伸缩组。可能值：
             * - true：启用
             * - false：未启用
             * @example `false`
             */
            IsComputeEss: boolean;
            /**
             * 操作系统镜像标签。
             * @example `CentOS_7.2_64`
             */
            OsTag: string;
            /**
             * 账户服务器类型。可能值：
             * - nis
             * - ldap
             * @example `nis`
             */
            AccountType: string;
            /**
             * 集群描述。
             * @example `clusterdescription`
             */
            Description: string;
            /**
             * 集群名称。
             * @example `cluster1`
             */
            Name: string;
            /**
             * 集群ID。
             * @example `ehpc-hz-jeJki6****`
             */
            Id: string;
            /**
             * 集群所在位置。可能值：
             * - OnPremise：混合云集群。
             * - PublicCloud：公有云集群。
             * @example `PublicCloud`
             */
            Location: string;
            /**
             * 集群客户端版本。
             * @example `1.0.64`
             */
            ClientVersion: string;
            /**
             * 集群是否使用了插件，取值范围：
             * - true：是
             * - false：否
             * 默认值：false
             * @example `false`
             */
            HasPlugin: boolean;
            /**
             * EHPC版本。
             * @example `1.0.0`
             */
            EhpcVersion: string;
        }[];
    };
}
