export interface DescribeClusterResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 集群信息。
     */
    ClusterInfo: {
        /**
         * 集群状态。可能值：
         * - uninit：未初始化
         * - creating：创建中
         * - Init：初始化中
         * - running：运行中
         * - exception：异常
         * - releasing：释放中
         * @example `creating`
         */
        Status: string;
        /**
         * 专有网络ID。
         * @example `vpc-bp1pxkcvmmz53ki89****`
         */
        VpcId: string;
        /**
         * 密钥对名称。
         * @example `test`
         */
        KeyPairName: string;
        /**
         * 集群实例付费类型。可能值：
         * - PostPaid：按量付费
         * - PrePaid：包年包月
         * @example `PostPaid`
         */
        EcsChargeType: string;
        /**
         * 安全组ID。
         * @example `sg-bp1asugr34gzn****`
         */
        SecurityGroupId: string;
        /**
         * 集群使用的SccCluster ID。如果集群不是SCC机型则为空。
         * @example `00b648b****`
         */
        SccClusterId: string;
        /**
         * 集群创建时间。
         * @example `2020-12-24T03:18:23.000Z`
         */
        CreateTime: string;
        /**
         * 账户服务器类型。可能值：
         * - nis
         * - ldap
         * @example `nis`
         */
        AccountType: string;
        /**
         * 网络共享存储协议。可能值：
         * - nfs
         * - smb
         * @example `nfs`
         */
        VolumeProtocol: string;
        /**
         * 集群描述。
         * @example `cluster`
         */
        Description: string;
        /**
         * 阿里云NAS实例ID。目前不支持自动创建阿里云NAS实例。
         * @example `008b64****`
         */
        VolumeId: string;
        /**
         * 是否开启高可用。
         *  >若开启高可用，则集群中的每种管控角色将会使用主备2台实例。
         * @example `false`
         */
        HaEnable: boolean;
        /**
         * 集群基础镜像。
         * @example `CentOS_7.2_64`
         */
        BaseOsTag: string;
        /**
         * 集群名称。
         * @example `cluster`
         */
        Name: string;
        /**
         * 镜像ID。
         * @example `centos_7_02_64_20G_alibase_20170818****`
         */
        ImageId: string;
        /**
         * 调度服务器类型。可能值范围：
         * - pbs
         * - slurm
         * - opengridscheduler
         * - deadline
         * @example `pbs`
         */
        SchedulerType: string;
        /**
         * 调度器软件版本。
         * @example `18.1.1`
         */
        SchedulerVersion: string;
        /**
         * 集群部署模式。可能值：
         * - Standard：账号节点、调度节点、登录节点、计算节点分离部署。
         * - Advanced：HA模式部署。
         * - Simple：账号节点和调度节点混合部署在一个节点上，登录节点和计算节点分离部署。
         * - Tiny：账号节点、调度节点、登录节点混合部署在一个节点上，计算节点分离部署。
         * @example `Simple`
         */
        DeployMode: string;
        /**
         * 镜像类型。可能值：
         * - system：公共镜像
         * - self：自定义镜像
         * - others：共享镜像
         * - marketplace：镜像市场镜像
         * @example `system`
         */
        ImageOwnerAlias: string;
        /**
         * 操作系统镜像标签。
         * @example `CentOS_7.2_64`
         */
        OsTag: string;
        /**
         * NAS的VPC挂载点。目前不支持自动创建阿里云NAS挂载点。
         * @example `008b648bcb-s****.cn-hangzhou.nas.aliyuncs.com`
         */
        VolumeMountpoint: string;
        /**
         * 挂载共享存储的远程目录。
         * @example `NasMountpoint:/RemoteDirectory`
         */
        RemoteDirectory: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * VPC中交换机ID。产品目前只支持VPC网络。
         * @example `vsw-bp1e47optm9g58zcu****`
         */
        VSwitchId: string;
        /**
         * 镜像名称。
         * @example `test_for_Image`
         */
        ImageName: string;
        /**
         * 网络共享存储类型，目前仅支持阿里云NAS。
         * @example `NAS`
         */
        VolumeType: string;
        /**
         * 集群所在位置。可能值：
         * - OnPremise：混合云集群。
         * - PublicCloud：公有云集群。
         * @example `PublicCloud`
         */
        Location: string;
        /**
         * 实例ID。
         * @example `i-bp15de54eet1c43f****`
         */
        Id: string;
        /**
         * 集群所使用的客户端版本号。
         * @example `1.0.1`
         */
        ClientVersion: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-k`
         */
        ZoneId: string;
        /**
         * 资源组ID。
         * @example `rg-aek23szz5i2****`
         */
        ResourceGroupId: string;
        /**
         * 实例RAM角色名称。
         * @example `AliyunEHPCFullAccess`
         */
        RamRoleName: string;
        /**
         * 授权实例角色的节点名称详情。
         * @example `["manager", "compute"]`
         */
        RamNodeTypes: string;
        Applications: {
            /**
             * 集群应用软件列表，包含软件的名称和版本号。
             */
            ApplicationInfo: {
                /**
                 * 应用软件标签。
                 * @example `OpenMPI_1.8.7`
                 */
                Tag: string;
                /**
                 * 应用软件名称。
                 * @example `openmpi`
                 */
                Name: string;
                /**
                 * 应用软件版本。
                 * @example `1.10`
                 */
                Version: string;
            }[];
        };
        PostInstallScripts: {
            /**
             * 安装后脚本列表。
             */
            PostInstallScriptInfo: {
                /**
                 * 脚本下载路径。
                 * @example `example.com`
                 */
                Url: string;
                /**
                 * 脚本执行参数。
                 * @example `bash file.sh`
                 */
                Args: string;
            }[];
        };
        /**
         * 描述集群中ECS数量和规格的数据结构。
         */
        EcsInfo: {
            /**
             * 管控节点信息。
             */
            Manager: {
                /**
                 * 管控节点实例规格。
                 * @example `ecs.n1.tiny`
                 */
                InstanceType: string;
                /**
                 * 管控节点的数量。
                 * @example `1`
                 */
                Count: number;
            };
            /**
             * 计算节点信息。
             */
            Compute: {
                /**
                 * 计算节点ECS实例规格。
                 * @example `ecs.n1.tiny`
                 */
                InstanceType: string;
                /**
                 * 计算节点数量。
                 * @example `1`
                 */
                Count: number;
            };
            /**
             * 登录节点信息。
             */
            Login: {
                /**
                 * 登录节点实例规格。
                 * @example `ecs.n1.tiny`
                 */
                InstanceType: string;
                /**
                 * 登录节点数量。
                 * @example `1`
                 */
                Count: number;
            };
            /**
             * 云上代理节点信息。
             * 仅当集群为混合云集群，并开启混合云代理模式时，返回该参数。
             */
            ProxyMgr: {
                /**
                 * 云上代理节点的实例类型。
                 * @example `ecs.n1.tiny`
                 */
                InstanceType: string;
                /**
                 * 云上代理节点数量。
                 * @example `1`
                 */
                Count: number;
            };
        };
        OnPremiseInfo: {
            /**
             * 本地集群管理节点信息。
             * 仅当集群为混合云集群，并开启混合云代理模式时，返回该参数。
             */
            OnPremiseInfo: {
                /**
                 * 本地集群管理节点类型，可能值：
                 * - scheduler
                 * - account
                 * - account，scheduler
                 * @example `scheduler`
                 */
                Type: string;
                /**
                 * 本地集群管理节点主机名。
                 * @example `testecs`
                 */
                HostName: string;
                /**
                 * 本地集群管理节点IP地址。
                 * @example `192.168.*.*`
                 */
                IP: string;
            }[];
        };
        AddOnsInfo: {
            /**
             * 自定义组件服务信息。
             */
            AddOnsInfo: {
                /**
                 * 组件的软件ID。
                 * @example `CROMWELL_85`
                 */
                SoftwareId: string;
                /**
                 * 自定义组件的部署模式。可能值：
                 * - local
                 * - ecs
                 * @example `local`
                 */
                DeployMode: string;
                /**
                 * 自定义组件的服务TCP端口号。
                 * @example `10000`
                 */
                Port: number;
                /**
                 * 自定义组件的运行状态。可能值：
                 * - running
                 * - stopped
                 * - exception
                 * @example `running`
                 */
                Status: string;
                /**
                 * 自定义组件服务的访问链接。
                 * @example `http://172.16.10.12:10000/`
                 */
                URL: string;
            }[];
        };
        /**
         * 集群版本号。
         * @example `1.0`
         */
        ClusterVersion: string;
        /**
         * 是否不安装Agent客户端。
         * @example `false`
         */
        WithoutAgent: number;
        /**
         * 插件模式配置，仅当SchedulerType为custom生效。
         * 格式为JSON字符串，包含pluginMod、pluginLocalPath、pluginOssPath三个参数，具体参数说明如下：
         * - pluginMod：插件模式，支持以下两种模式：
         *
         *   - oss模式：将从OSS上下载插件解压到本地pluginLocalPath中。
         *   - image模式：默认插件已经放置到pluginLocalPath。
         * - pluginLocalPath：插件存放的本地路径，建议在oss模式下选择共享存储目录，image模式下选择非共享存储目录。
         * - pluginOssPath：插件放置在OSS上的远程路径，仅当pluginMod等于oss生效。
         * @example `{\"pluginMod\":\"image\",\"pluginLocalPath\":\"/opt/plugin\"}`
         */
        Plugin: string;
        /**
         * 业务镜像是否已预安装调度器。可能值：
         * - true：已预安装，创建或扩容节点时无需执行安装调度器流程。
         * - false：未预安装，创建或扩容节点时需要执行安装调度器流程。
         * @example `true`
         */
        SchedulerPreInstall: number;
        /**
         * 本地集群域名。
         * 仅当AccoutType取值为Idap时，支持配置该参数。
         * @example `ldap`
         */
        Domain: string;
        /**
         * 对接OpenLDAP服务器参数。
         * @example `{
            "LdapServerIp": "192.168.XX.XX",
            "BaseDn": "ehpctest",
            "FallbackHomeDir": "/home"
        }`
         */
        OpenldapPar: string;
        /**
         * 连接Windows AD参数。
         * @example `{	"AdUser": "Administrator",	"AdUserPasswd": "xxxxxx",	"AdDc": "ad-hybrid001.ehpcad.com",	"AdIp": "192.168.XX.XX"}`
         */
        WinAdPar: string;
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
        Period: string;
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
         * @example `Month`
         */
        PeriodUnit: string;
        /**
         * 每次自动续费的时长。参数AutoRenew取值true时生效。
         * - PeriodUnit为Week时，AutoRenewPeriod取值{"1", "2", "3"}。
         * - PeriodUnit为Month时，AutoRenewPeriod取值{"1", "2", "3", "6", "12"}。
         * 默认值：1。
         * @example `1`
         */
        AutoRenewPeriod: string;
        /**
         * 是否自动续费，当参数EcsChargeType取值为PrePaid时才生效。取值范围：
         * - true：自动续费
         * - false：不自动续费
         * 默认值：true
         * @example `false`
         */
        AutoRenew: string;
        /**
         * 计算节点竞价策略。可能值：
         * - NoSpot：正常按量付费实例。
         * - SpotWithPriceLimit：设置上限价格的抢占式实例。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         * @example `NoSpot`
         */
        ComputeSpotStrategy: string;
        /**
         * 计算节点每小时最高价格。最大支持3位小数，参数ComputeSpotStrategy取值为SpotWithPriceLimit时生效。
         * @example `0.56`
         */
        ComputeSpotPriceLimit: string;
        Nodes: {
            /**
             * 本地集群节点信息列表。
             */
            NodesInfo: {
                /**
                 * 本地集群节点的角色。可能值：
                 * - Manager：管控节点
                 * - Login：登录节点
                 * - Compute：计算节点
                 * @example `Compute`
                 */
                Role: string;
                /**
                 * 本地集群节点的主机名称。
                 * @example `compute000`
                 */
                HostName: string;
                /**
                 * 本地集群节点的IP地址。
                 * @example `192.168.XX.XX`
                 */
                IpAddress: string;
                /**
                 * 本地集群节点的域账号服务类型。可能值：
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
                /**
                 * 本地集群节点的调度器类型。可能值：
                 * - pbs
                 * - slurm
                 * - opengridscheduler
                 * - deadline
                 * 默认值：pbs。
                 * @example `pbs`
                 */
                SchedulerType: string;
            }[];
        };
        /**
         * 操作系统镜像信息汇总。
         */
        InitialImage: {
            /**
             * E-HPC支持的操作系统镜像。
             * @example `CentOS_7.6_64`
             */
            OsTag: string;
            /**
             * 镜像类型，可能值：
             * - system：公共镜像
             * - self：自定义镜像
             * - others：共享镜像
             * - marketplace：镜像市场镜像
             * @example `system`
             */
            ImageOwnerAlias: string;
            /**
             * 镜像ID。
             * @example `centos_7_6_x64_20G_alibase_20211130.vhd`
             */
            ImageId: string;
        };
    };
}
