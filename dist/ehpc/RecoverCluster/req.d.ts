export interface RecoverClusterRequest {
    /**
     * 指定重置并修复的集群ID。并且，集群状态必须为exception（异常）时才能修复。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID及集群状态。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 操作系统镜像标签。
     * 您可以通过[ListImages](~~87213~~)和[ListCustomImages](~~87215~~)查询E-HPC支持的镜像标签。
     * @example `CentOS_7.2_64`
     */
    "OsTag"?: string;
    /**
     * 账户服务类型。取值范围：
     * - nis
     * - ldap
     * 默认值：nis
     * @example `nis`
     */
    "AccountType"?: string;
    /**
     * 调度服务器类型。取值范围：
     * - pbs
     * - slurm
     * - opengridscheduler
     * - deadline
     * 默认值：pbs
     * @example `pbs`
     */
    "SchedulerType"?: string;
    /**
     * 镜像类型。取值范围：
     * - system：公共镜像
     * - self：自定义镜像
     * - others：共享镜像
     * 默认值：system
     * @example `system`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 镜像ID。
     * 您可以通过[ListImages](~~87213~~)和[ListCustomImages](~~87215~~)查询E-HPC可安装的镜像。
     * @example `m-bp18133n0335yq****`
     */
    "ImageId"?: string;
    /**
     * 集群所使用的客户端版本号，默认为最新版本。
     * 您可以调用[ListCurrentClientVersion](~~87223~~)查询当前最新客户端版本号。
     * @example `1.0.76`
     */
    "ClientVersion"?: string;
}
