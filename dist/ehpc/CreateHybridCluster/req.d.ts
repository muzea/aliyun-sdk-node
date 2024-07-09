export interface CreateHybridClusterRequest {
    /**
     * 可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 集群名称。长度2~64字符，只允许包含中文、字母、数字、短划线（-）和下划线（_），必须以字母或中文开头。
     * @example `hybridcluster`
     */
    "Name": string;
    /**
     * 集群描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
     * 默认值：空
     * @example `TestDescription`
     */
    "Description"?: string;
    /**
     * E-HPC产品版本号。默认使用最新版本。
     * @example `1.0.0`
     */
    "EhpcVersion"?: string;
    /**
     * 集群客户端版本。默认使用最新版本。
     * @example `1.0.64`
     */
    "ClientVersion"?: string;
    /**
     * 操作系统镜像标签，您可以调用[ListImages](~~87213~~)接口查询。
     * @example `CentOS_7.2_64`
     */
    "OsTag": string;
    /**
     * 域账号服务类型。取值范围：
     * - nis
     * - ldap
     * 默认值：nis
     * @example `nis`
     */
    "Domain"?: string;
    /**
     * 集群所在的位置。位置固定为混合云集群，取值：OnPremise。
     * @example `OnPremise`
     */
    "Location"?: string;
    /**
     * 使用已有安全组ID创建集群。
     * > 当指定该参数时，不能同时指定`SecurityGroupName`参数。
     * @example `sg-bp13n61xsydodfyg****`
     */
    "SecurityGroupId"?: string;
    /**
     * 如果不使用已有安全组，则使用此名称创建新安全组，应用默认策略。
     * > 当指定该参数时，不能同时指定`SecurityGroupId`参数。
     * @example `ehpc-SecurityGroup`
     */
    "SecurityGroupName"?: string;
    /**
     * 集群所属的VPC ID。
     * @example `vpc-b3f3edefefeep0760yju****`
     */
    "VpcId": string;
    /**
     * 交换机ID。
     * @example `vsw-bp1lfcjbfb099rrjn****`
     */
    "VSwitchId": string;
    /**
     * 混合云集群云上管理节点规格。目前仅支持代理模式。
     * @example `ecs.n1.tiny`
     */
    "EcsOrder.Manager.InstanceType"?: string;
    /**
     * 集群计算节点实例规格。
     * @example `ecs.n1.tiny`
     */
    "EcsOrder.Compute.InstanceType": string;
    /**
     * 文件系统类型。目前仅支持NAS。
     * @example `NAS`
     */
    "VolumeType"?: string;
    /**
     * 存储实例ID。目前不支持自动创建阿里云NAS实例。
     * @example `008b64****`
     */
    "VolumeId"?: string;
    /**
     * 共享存储的协议类型。目前仅支持NFS。
     * @example `NFS`
     */
    "VolumeProtocol"?: string;
    /**
     * NAS的VPC挂载点。目前不支持自动创建阿里云NAS挂载点。
     * @example `008b648bcb-s****.cn-hangzhou.nas.aliyuncs.com`
     */
    "VolumeMountpoint"?: string;
    /**
     * 挂载文件系统的远程目录。
     * @example `/RemoteDirectory`
     */
    "RemoteDirectory"?: string;
    /**
     * 本地共享存储协议。目前仅支持NFS。
     * @example `NFS`
     */
    "OnPremiseVolumeProtocol"?: string;
    /**
     * 本地文件系统挂载点。
     * @example `RemoteNasDomain.com`
     */
    "OnPremiseVolumeMountPoint"?: string;
    /**
     * 本地文件系统挂载路径。
     * @example ` /RemoteDirectory`
     */
    "OnPremiseVolumeRemotePath"?: string;
    /**
     * 本地文件系统挂载到云上节点的路径。
     * @example `/OnCloudDirectory`
     */
    "OnPremiseVolumeLocalPath"?: string;
    /**
     * 登录节点的root密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
     * `() ~ ! @ # $ % ^ & * - = + | { } [ ] : ; ‘ < > , . ? / `
     * > 建议使用HTTPS协议调用API避免密码泄露。
     * @example `123****`
     */
    "Password"?: string;
    /**
     * 密钥对名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * >如果您要使用ECS密钥对功能，具体操作，请参见[创建密钥对](~~51793~~)。
     * @example `test`
     */
    "KeyPairName"?: string;
    /**
     * 扩容节点默认加入的队列。
     * @example `workq`
     */
    "JobQueue"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 代理节点管理线下节点模式。取值范围：
     * - SSH：表示SSH登录方式管理。
     * - CA：表示云助手方式下发管理。
     * @example `SSH`
     */
    "HybridClusterOpMode"?: string;
    /**
     * 业务镜像是否已预安装调度器。取值范围：
     * - true：已预安装，创建或扩容节点时无需执行安装调度器流程。
     * - false：未预安装，创建或扩容节点时需要执行安装调度器流程。
     * @example `true`
     */
    "SchedulerPreInstall"?: boolean;
    /**
     * 计算节点抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * 默认值：NoSpot
     * @example `NoSpot`
     */
    "ComputeSpotStrategy"?: string;
    /**
     * 计算节点下ECS实例的每小时最高价格。支持最多3位小数，参数ComputeSpotStrategy取值为SpotWithPriceLimit时生效。
     * @example `0.034`
     */
    "ComputeSpotPriceLimit"?: number;
    /**
     * 镜像类型。取值范围：
     * - system：公共镜像
     * - self：自定义镜像
     * - others：共享镜像
     * - marketplace：镜像市场镜像
     * @example `system`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 镜像ID。
     * @example `wi_1607_x64_dtc_zh_40G_alibase****`
     */
    "ImageId"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 集群是否支持多操作系统。取值范围：
     * - true：支持多操作系统。
     * - false：不支持多操作系统。
     * 默认值：false
     * @example `false`
     */
    "MultiOs"?: boolean;
    /**
     * 本地集群节点信息。
     */
    "Nodes"?: {
        /**
         * 本地集群节点的调度器类型。取值范围：
         * - pbs
         * - slurm
         * - opengridscheduler
         * - deadline
         * 默认值：pbs
         * @example `pbs`
         */
        SchedulerType: string;
        /**
         * 本地集群节点的IP地址。
         * @example `00b648b****`
         */
        IpAddress: string;
        /**
         * 本地集群节点的主机名称。
         * @example `test1`
         */
        HostName: string;
        /**
         * 本地集群节点的角色。取值范围：
         * - Manager：管控节点
         * - Login：登录节点
         * - Compute：计算节点
         * @example `Compute`
         */
        Role: string;
        /**
         * 本地集群节点的域账号服务类型。取值范围：
         * - nis
         * - ldap
         * 默认值：nis
         * @example `nis`
         */
        AccountType: string;
        /**
         * 本地集群节点的配置目录。
         * @example `/opt/sge/default/`
         */
        Dir: string;
    }[];
    /**
     * 应用软件信息列表。
     */
    "Application"?: {
        /**
         * 应用软件的标签。
         * @example `OpenMPI_11.1`
         */
        Tag: string;
    }[];
    /**
     * 安装后脚本信息列表。
     */
    "PostInstallScript"?: {
        /**
         * 安装后脚本的执行参数。
         * @example `bash file.sh`
         */
        Args: string;
        /**
         * 安装后脚本的全路径。
         * @example `/opt/job.sh`
         */
        Url: string;
    }[];
    /**
     * 插件模式配置，仅当SchedulerType为custom生效。
     * 格式为JSON字符串，包含pluginMod、pluginLocalPath、pluginOssPath三个参数，具体参数说明如下：
     * - pluginMod：插件模式，支持以下两种模式：
     *     - oss模式：将从OSS上下载插件解压到本地pluginLocalPath中。
     *     -  image模式：默认插件已经放置到pluginLocalPath。
     * - pluginLocalPath：插件存放的本地路径，建议在oss模式下选择共享存储目录，image模式下选择非共享存储目录。
     * - pluginOssPath：插件放置在OSS上的远程路径，仅当pluginMod等于oss生效。
     * @example `{"pluginMod": "oss","pluginLocalPath": "/opt/plugin","pluginOssPath": "https://bucket.oss-cn-hangzhou.aliyuncs.com/plugin/plugin.tgz"}`
     */
    "Plugin"?: string;
    /**
     * 对接OpenLDAP服务器参数。
     */
    "OpenldapPar"?: {
        /**
         * LDAP服务器IP。
         * @example `192.168.1.2`
         */
        LdapServerIp: string;
        /**
         * LDAP服务器BaseDN。
         * @example `ehpctest`
         */
        BaseDn: string;
        /**
         * Linux服务器home目录。
         * @example `/home`
         */
        FallbackHomeDir: string;
    };
    /**
     * 对接Windows AD服务器参数。
     */
    "WinAdPar"?: {
        /**
         * AD用户。
         * @example `Administrator`
         */
        AdUser: string;
        /**
         * AD用户密码。
         * @example `xxxxxx`
         */
        AdUserPasswd: string;
        /**
         * AD域名称。
         * @example `ad-hybrid001.ehpcad.com`
         */
        AdDc: string;
        /**
         * AD域IP。
         * @example `192.168.1.2`
         */
        AdIp: string;
    };
}
