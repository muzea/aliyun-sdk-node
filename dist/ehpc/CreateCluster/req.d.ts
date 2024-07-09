export interface CreateClusterRequest {
    /**
     * 可用区ID。
     * 您可以调用[ListRegions](~~188593~~)和[DescribeZones](~~25610~~)接口获取可以使用E-HPC的可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 集群名称，长度为2~64个字符。
     * @example `test`
     */
    "Name": string;
    /**
     * 集群描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `TestDescription`
     */
    "Description"?: string;
    /**
     * E-HPC产品版本，默认为最新版本。
     * @example `1.0.0`
     */
    "EhpcVersion"?: string;
    /**
     * 集群客户端版本，默认为最新版本。
     * 您可以调用[ListCurrentClientVersion](~~87223~~)查询当前最新客户端版本号。
     * @example `1.0.64`
     */
    "ClientVersion"?: string;
    /**
     * 操作系统镜像标签。
     * @example `CentOS_7.2_64`
     */
    "OsTag"?: string;
    /**
     * 域账号服务类型。取值范围：
     * - nis
     * - ldap
     * 默认值：nis。
     * @example `nis`
     */
    "AccountType"?: string;
    /**
     * 本地集群域名。
     * 仅当AccoutType取值为Idap时，支持配置该参数。
     * @example `ldap`
     */
    "Domain"?: string;
    /**
     * 调度器类型。取值范围：
     * - pbs
     * - slurm
     * - opengridscheduler
     * - deadline
     * 默认值：pbs。
     * @example `pbs`
     */
    "SchedulerType"?: string;
    /**
     * 指定新创建集群所属的安全组ID。
     * 您可以调用[DescribeSecurityGroups](~~25556~~)查询当前地域可以使用的安全组。
     * @example `sg-bp13n61xsydodfyg****`
     */
    "SecurityGroupId"?: string;
    /**
     * 如果不使用已有安全组，则使用此名称创建新安全组，应用默认安全组策略。
     * @example `ehpc-SecurityGroup`
     */
    "SecurityGroupName"?: string;
    /**
     * 集群所属的VPC ID。
     * 您可以调用[DescribeVpcs](~~35739~~)查询已创建的VPC信息。
     * @example `vpc-b3f3edefefeep0760yju****`
     */
    "VpcId"?: string;
    /**
     * VPC中交换机ID。E-HPC当前仅支持VPC网络。
     * 您可以调用[DescribeVSwitches](~~35748~~)查询已创建的交换机的相关信息。
     * @example `vsw-bp1lfcjbfb099rrjn****`
     */
    "VSwitchId"?: string;
    /**
     * 共享存储类型，目前仅支持配置为`nas`，表示NAS文件系统。
     * @example `nas`
     */
    "VolumeType"?: string;
    /**
     * 阿里云NAS实例ID。如果该参数为空，创建集群的流程会默认创建一个性能型的NAS实例。
     * 您可以调用[ListFileSystemWithMountTargets](~~204364~~)查询可用的NAS的VPC挂载点。
     * @example `008b64****`
     */
    "VolumeId"?: string;
    /**
     * 共享存储的协议类型。取值范围：
     * - NFS
     * - SMB
     * 默认值：NFS。
     * @example `NFS`
     */
    "VolumeProtocol"?: string;
    /**
     * NAS的VPC挂载点。VolumeMountpoint有以下限制：
     * - 如果VolumeId参数为空，VolumeMountpoint可以为空，创建集群的流程会默认创建一个VPC挂载点。
     * - 如果VolumeId参数不为空，VolumeMountpoint为必填，您可以调用[ListFileSystemWithMountTargets](~~204364~~)查询可用的NAS的VPC挂载点。
     * @example `008b648bcb-s****.cn-hangzhou.nas.aliyuncs.com`
     */
    "VolumeMountpoint"?: string;
    /**
     * 采用mount命令手动挂载NFS文件系统时的挂载参数。
     *     <props="china">具体请参见[手动挂载NFS文件系统](https://help.aliyun.com/document_detail/90529.html#section-jyi-hyd-hbr)。</props>
     * <props="intl">具体请参见[手动挂载NFS文件系统](https://www.alibabacloud.com/help/en/nas/latest/mount-an-nfs-file-system-on-a-linux-ecs-instance#section-jyi-hyd-hbr)。</props>
     * @example `-t nfs -o vers=4`
     */
    "VolumeMountOption"?: string;
    /**
     * 挂载共享存储的远程目录。
     * @example `NasMountpoint:/RemoteDirectory`
     */
    "RemoteDirectory"?: string;
    /**
     * 集群部署模式。取值范围：
     * - Standard：账号节点、调度节点、登录节点、计算节点分离部署。
     * - Simple：账号节点和调度节点混合部署在一个节点上，登录节点和计算节点分离部署。
     * - Tiny：账号节点、调度节点、登录节点混合部署在一个节点上，计算节点分离部署。
     * 默认值：Standard。
     * @example `Simple`
     */
    "DeployMode"?: string;
    /**
     * 是否开启高可用。取值范围：
     * - true：开启。
     * - false：不开启。
     * 默认值：false。
     * >若开启高可用则集群中的每种管控角色将会使用主备2个节点。
     * @example `true`
     */
    "HaEnable"?: boolean;
    /**
     * 集群中所有节点的付费类型，取值范围：
     * - PostPaid：按量付费。
     * - PrePaid：包年包月。
     * 若选择包年包月类型，默认开启自动续费。
     * @example `PostPaid`
     */
    "EcsChargeType"?: string;
    /**
     * 登录节点的root密码。
     * > 建议使用HTTPS协议调用API避免密码泄露。
     * 密码格式要求：
     * - 长度为8至30个字符。
     * - 必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是`( ) ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ‘ < > , . ? / `。
     * > 集群的登录凭证支持密码和密钥对两种，Password和KeyPairName二者必选其一，如果二者都指定，则Password优先级高。
     * @example `123****`
     */
    "Password"?: string;
    /**
     * 登录节点绑定的密钥对名称。关于如何创建密钥对，请参见[创建密钥对](~~51793~~)。
     * > 集群的登录凭证支持密码和密钥对两种，Password和KeyPairName二者必选其一，如果二者都指定，则Password优先级高。
     * @example `test`
     */
    "KeyPairName"?: string;
    /**
     * 镜像类型。取值范围：
     * - system：公共镜像
     * - self：自定义镜像
     * - others：共享镜像
     * 默认值：system。
     * @example `self`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 镜像ID。
     * 您可以调用[ListImages](~~87213~~)和[ListCustomImages](~~87215~~)查询E-HPC可以使用的镜像ID。
     * @example `centos_7_02_64_20G_alibase_20170818****`
     */
    "ImageId"?: string;
    /**
     * 集群管控节点数量。取值范围：1~2。
     * @example `1`
     */
    "EcsOrder.Manager.Count"?: number;
    /**
     * 集群管控节点规格。
     * 您可以调用[ListPreferredEcsTypes](~~188592~~)接口获取推荐的节点规格信息。
     * @example `ecs.n1.tiny`
     */
    "EcsOrder.Manager.InstanceType"?: string;
    /**
     * 集群计算节点数量。取值范围：0~99。
     * @example `1`
     */
    "EcsOrder.Compute.Count"?: number;
    /**
     * 集群计算节点规格。
     * 您可以调用[ListPreferredEcsTypes](~~188592~~)接口获取推荐的节点规格信息。
     * @example `ecs.n1.tiny`
     */
    "EcsOrder.Compute.InstanceType"?: string;
    /**
     * 集群登录节点数量，仅支持配置1。
     * @example `1`
     */
    "EcsOrder.Login.Count"?: number;
    /**
     * 集群登录节点规格。
     * 您可以调用[ListPreferredEcsTypes](~~188592~~)接口获取推荐的节点规格信息。
     * @example `ecs.n1.tiny`
     */
    "EcsOrder.Login.InstanceType"?: string;
    /**
     * SCC实例ID。
     * 如果配置该参数，则将已有的SCC实例纳管到新创建的SCC集群中。
     * @example `00b648b****`
     */
    "SccClusterId"?: string;
    /**
     * 计算节点竞价策略。取值范围：
     * - NoSpot：正常按量付费节点。
     * - SpotWithPriceLimit：设置上限价格的抢占式节点。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式节点。
     * 默认值：NoSpot。
     * @example `NoSpot`
     */
    "ComputeSpotStrategy"?: string;
    /**
     * 计算节点每小时最高价格。最大支持3位小数，参数ComputeSpotStrategy取值为SpotWithPriceLimit时生效。
     * @example `0.034`
     */
    "ComputeSpotPriceLimit"?: string;
    /**
     * 计算节点是否支持超线程。取值范围：
     * - true：支持。
     * - false：不支持。
     * 默认值：true。
     * @example `true`
     */
    "ComputeEnableHt"?: boolean;
    /**
     * 购买集群节点的时长。单位由`PeriodUnit`指定，取值范围：
     * <props="china">
     * - 当参数PriceUnit取值为Year时：1~3。
     * - 当参数PriceUnit取值为Month时：1~9。
     * - 当参数PriceUnit取值为Hour时：1。
     * - 当参数PriceUnit取值为Week时：1~4。
     * </props>
     * <props="intl">
     * - 当参数PriceUnit取值为Year时：1~3。
     * - 当参数PriceUnit取值为Month时：1~9。
     * - 当参数PriceUnit取值为Hour时：1。
     * </props>
     * 默认值：1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买集群节点的时长单位。取值范围：
     * <props="china">
     * - Year
     * - Month
     * - Hour
     * - Week
     * </props>
     * <props="intl">
     * - Year
     * - Month
     * - Hour
     * </props>
     * 默认值：Month。
     * @example `Year`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动续费。取值范围：
     * - true：自动续费。
     * - false：不自动续费。
     * 默认值：false。
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 每次自动续费的时长，当参数AutoRenew取值true时生效。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 上传到OSS的作业文件的URL地址。
     * @example `https://ehpc-tianshui.oss-cn-beijing.aliyuncs.com/test-u****​/testlist_ehpc.sh`
     */
    "InputFileUrl"?: string;
    /**
     * 计算节点加入的队列名称。
     * @example `workq`
     */
    "JobQueue"?: string;
    /**
     * 系统盘的云盘种类。取值范围：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - cloud_essd：ESSD云盘。
     * - cloud：普通云盘，已售罄。
     * 默认值：cloud_ssd。
     * @example `cloud_ssd`
     */
    "SystemDiskType"?: string;
    /**
     * 系统盘大小。单位：GB。
     * 取值范围：40~500。
     * 默认值：40。
     * @example `40`
     */
    "SystemDiskSize"?: number;
    /**
     * 是否开启远程可视化。取值范围：
     * - true：开启。
     * - false：不开启。
     * 默认值：false。
     * @example `false`
     */
    "RemoteVisEnable"?: string;
    /**
     * 资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)查询资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 登录节点是否使用弹性公网IP。默认值：false。
     * @example `true`
     */
    "WithoutElasticIp"?: boolean;
    /**
     * 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：
     * - PL0：单盘最高随机读写IOPS 1万。
     * - PL1：单盘最高随机读写IOPS 5万。
     * - PL2：单盘最高随机读写IOPS 10万。
     * - PL3：单盘最高随机读写IOPS 100万。
     * 默认值：PL1。
     * 关于如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
     * @example `PL0`
     */
    "SystemDiskLevel"?: string;
    /**
     * 是否启用自动伸缩。取值范围：
     * - true：启用。
     * - false：未启用。
     * 默认值：false。
     * @example `false`
     */
    "IsComputeEss"?: boolean;
    /**
     * 集群版本号。
     * 默认值：1.0。
     * @example `1.0`
     */
    "ClusterVersion"?: string;
    /**
     * 应用软件信息。
     */
    "Application"?: {
        /**
         * 应用软件的标签。
         * N的取值范围：0~100
         * 您可以调用[ListSoftwares](~~87216~~)查询应用软件标签。
         * @example `OpenMPI_11.1`
         */
        Tag: string;
    }[];
    /**
     * 挂载的共享存储信息。
     */
    "AdditionalVolumes"?: {
        /**
         * 挂载共享存储的节点作业所处队列。
         * N的取值范围：1~10。
         * @example `high`
         */
        JobQueue: string;
        /**
         * 挂载的NAS实例ID。
         * N的取值范围：1~10。
         * @example `extreme-00b88****`
         */
        VolumeId: string;
        /**
         * 共享存储挂载到新NAS上的节点信息。
         */
        Roles: {
            /**
             * 共享存储挂载到新NAS上的节点类型。
             * AdditionalVolumes.N.Roles中N的取值范围：1~10。
             * Roles.N.Name中N的取值范围：0~8。
             * @example `["Compute"]`
             */
            Name: string;
        }[];
        /**
         * 挂载的NAS的VPC挂载点。
         * N的取值范围：1~10。
         * @example `0088****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com`
         */
        VolumeMountpoint: string;
        /**
         * NAS的挂载选项。
         * N的取值范围：1~10。
         * @example `-t nfs -o vers=4.0`
         */
        VolumeMountOption: string;
        /**
         * 挂载的共享存储的远程目录。
         * N的取值范围：1~10。
         * @example `/test`
         */
        RemoteDirectory: string;
        /**
         * 挂载的共享存储类型。目前仅支持NAS。
         * N的取值范围：1~10
         * @example `nas`
         */
        VolumeType: string;
        /**
         * 挂载的共享存储的本地挂载目录。
         * N的取值范围：1~10。
         * @example `/ff`
         */
        LocalDirectory: string;
        /**
         * 挂载的共享存储协议类型。取值范围：
         * - NFS
         * - SMB
         * N的取值范围：1~10。
         * 默认值：NFS。
         * @example `NFS`
         */
        VolumeProtocol: string;
        /**
         * 挂载的共享存储的集群类型，只能配置PublicCloud。
         * N的取值范围：1~10。
         * @example `PublicCloud`
         */
        Location: string;
    }[];
    /**
     * 安装后脚本信息。
     */
    "PostInstallScript"?: {
        /**
         * 安装后脚本的执行参数。
         * N的取值范围：0~16。
         * @example `bashfile.sh`
         */
        Args: string;
        /**
         * 安装后脚本的下载地址。
         * N的取值范围：0~16。
         * @example `/opt/job.sh`
         */
        Url: string;
    }[];
    /**
     * 插件模式配置，仅当SchedulerType为custom生效。
     * 格式为JSON字符串，包含pluginMod、pluginLocalPath、pluginOssPath三个参数，具体参数说明如下：
     * - pluginMod：插件模式，支持以下两种模式：
     *
     *   - oss模式：将从OSS上下载插件解压到本地pluginLocalPath中。
     *   - image模式：默认插件已经放置到pluginLocalPath。
     * - pluginLocalPath：插件存放的本地路径，建议在oss模式下选择共享存储目录，image模式下选择非共享存储目录。
     * - pluginOssPath：插件放置在OSS上的远程路径，仅当pluginMod等于oss生效。
     * @example `{"pluginMod": "oss","pluginLocalPath": "/opt/plugin","pluginOssPath": "https://bucket.oss-cn-hangzhou.aliyuncs.com/plugin/plugin.tgz"}`
     */
    "Plugin"?: string;
    /**
     * 是否不安装Agent客户端。
     * - true：不安装。
     * - false：安装。
     * 默认值：false。
     * @example `false`
     */
    "WithoutAgent"?: boolean;
    /**
     * 是否不使用NAS作为共享存储。取值范围：
     * - true：不使用NAS。
     * - false：使用NAS。
     * 默认值：false。
     * @example `false
    `
     */
    "WithoutNas"?: boolean;
    /**
     * 实例RAM角色名称。
     * 您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
     * @example `testRamRoleName`
     */
    "RamRoleName"?: string;
    /**
     * 弹性网卡的通讯模式。取值范围：
     * - Standard：使用TCP通讯模式。
     * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
     * @example `Standard`
     */
    "NetworkInterfaceTrafficMode"?: string;
    /**
     * 部署集ID。
     * 您可以通过[DescribeDeploymentSets](~~91313~~)获取部署集ID，当前仅支持网络低时延策略的部署集。
     * @example `ds-bp1frxuzdg87zh4pzq****`
     */
    "DeploymentSetId"?: string;
    /**
     * 授权实例角色的节点名称详情。
     * @example `Standard`
     */
    "RamNodeTypes"?: string[];
    /**
     * 标签数组。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 自定义组件服务。
     */
    "AddOns"?: {
        /**
         * 组件名称。
         * @example `cromwell`
         */
        Name: string;
        /**
         * 组件版本号。
         * @example `85`
         */
        Version: string;
        /**
         * 部署模式。取值范围：local，ecs。
         * @example `local`
         */
        DeployMode: string;
        /**
         * 数据库类型。取值范围：Mysql，null。
         * @example `Mysql`
         */
        DBType: string;
        /**
         * 配置文件路径。
         * @example `/usr/local/addon/cromwell/cromwell.conf`
         */
        ConfigFile: string;
        /**
         * 自定义组件访问端口。
         * @example `10000`
         */
        Port: number;
        /**
         * 自定义组件是否自启动。取值范围：true，false。
         * @example `true`
         */
        DefaultStart: boolean;
    }[];
}
