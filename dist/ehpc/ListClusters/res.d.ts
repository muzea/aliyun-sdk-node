export interface ListClustersResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
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
         * 集群详细信息。
         */
        ClusterInfoSimple: {
            /**
             * VPC ID。
             * @example `vpc-b3f3edefefeep0760yju****`
             */
            VpcId: string;
            /**
             * 集群状态。可能值：
             * - uninit：未初始化
             * - creating：创建中
             * - init：初始化中
             * - running：运行中
             * - exception：异常
             * - releasing：释放中
             * @example `running`
             */
            Status: string;
            /**
             * 集群创建时间。
             * @example `2020-10-30T07:39:20.000Z`
             */
            CreateTime: string;
            /**
             * 是否启用弹性伸缩组。可能值：
             * - true：启用
             * - false：未启用
             * @example `false`
             */
            IsComputeEss: boolean;
            /**
             * 计算节点竞价策略。可能值：
             * - NoSpot：正常按量付费实例。
             * - SpotWithPriceLimit：设置上限价格的抢占式实例。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
             * @example `NoSpot`
             */
            ComputeSpotStrategy: string;
            /**
             * 账户服务器类型。可能值：
             * - nis
             * - ldap
             * @example `nis`
             */
            AccountType: string;
            /**
             * 集群计算节点数目。
             * @example `3`
             */
            Count: number;
            /**
             * EHPC版本。
             * @example `1.0.0`
             */
            EhpcVersion: string;
            /**
             * 集群描述。
             * @example `clusterdescription`
             */
            Description: string;
            /**
             * 基础镜像操作系统标签，仅管控节点使用。
             * @example `CentOS_7.2_64`
             */
            BaseOsTag: string;
            /**
             * 集群名称。
             * @example `test`
             */
            Name: string;
            /**
             * 镜像ID。
             * @example `wi_1607_x64_dtc_zh_40G_alibase****`
             */
            ImageId: string;
            /**
             * 计算节点下ECS实例的每小时最高价格。返回值最多保留小数点后3位。
             * @example `0.034`
             */
            ComputeSpotPriceLimit: number;
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
             * 主机后缀名。
             * @example `name`
             */
            NodeSuffix: string;
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
             * 主机前缀名。
             * @example `test`
             */
            NodePrefix: string;
            /**
             * 计算节点实例规格。
             * @example `ecs.n1.tiny`
             */
            InstanceType: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 集群实例付费类型。可能值：
             * - PostPaid：按量付费
             * - PrePaid：包年包月
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * 交换机ID。
             * @example `vsw-bp1lfcjbfb099rrjn****`
             */
            VSwitchId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-c`
             */
            ZoneId: string;
            /**
             * 登录节点列表。
             * @example `{"Id": "i-bp13x4is8pvdhws7e****"}`
             */
            LoginNodes: string;
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
             * 资源组ID。您可以调用ListResourceGroups查询资源组ID。
             * @example `rg-acfmxazb4ph****`
             */
            ResourceGroupId: string;
            /**
             * 管理节点信息。
             */
            Managers: {
                /**
                 * 操作进行中的节点数量，包括初始化、安装中、释放中等状态的节点。
                 * @example `1`
                 */
                OperatingCount: number;
                /**
                 * 异常节点数。
                 * @example `0`
                 */
                ExceptionCount: number;
                /**
                 * 停止节点数。
                 * @example `0`
                 */
                StoppedCount: number;
                /**
                 * 总管理节点数目。
                 * @example `2`
                 */
                Total: number;
                /**
                 * 正常节点数。
                 * @example `1`
                 */
                NormalCount: number;
            };
            /**
             * 计算节点信息。
             */
            Computes: {
                /**
                 * 操作进行中的节点数量，包括初始化、安装中、释放中等状态的节点。
                 * @example `1`
                 */
                OperatingCount: number;
                /**
                 * 异常节点数。
                 * @example `0`
                 */
                ExceptionCount: number;
                /**
                 * 停止节点数。
                 * @example `0`
                 */
                StoppedCount: number;
                /**
                 * 总节点数。
                 * @example `2`
                 */
                Total: number;
                /**
                 * 正常节点数。
                 * @example `1`
                 */
                NormalCount: number;
            };
            /**
             * 集群资源总量。
             */
            TotalResources: {
                /**
                 * GPU资源。单位：卡。
                 * @example `0`
                 */
                Gpu: number;
                /**
                 * CPU资源。单位：核。
                 * @example `1`
                 */
                Cpu: number;
                /**
                 * 内存大小。单位为MiB。
                 * @example `1024`
                 */
                Memory: number;
            };
            /**
             * 集群资源使用量。
             */
            UsedResources: {
                /**
                 * GPU资源。单位：卡。
                 * @example `0`
                 */
                Gpu: number;
                /**
                 * CPU资源。单位：核。
                 * @example `1`
                 */
                Cpu: number;
                /**
                 * 内存大小。单位为MiB。
                 * @example `1024`
                 */
                Memory: number;
            };
            /**
             * 集群是否使用了插件。取值范围：
             * - true：是
             * - false：否
             * 默认值：false
             * @example `false`
             */
            HasPlugin: boolean;
        }[];
    };
}
