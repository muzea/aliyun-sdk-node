export interface DescribeDBClustersResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `D65A809F-34CE-4550-9BC1-0ED21ETG380`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 集群信息列表。
         */
        DBCluster: {
            /**
             * DTS同步任务ID。仅MySQL分析实例会返回该参数。<props="china"><ph>更多详情，请参见[MySQL分析实例简介](~~154779~~)。</ph></props>
             * @example `dtsb1578j90XXXX`
             */
            DtsJobId: string;
            /**
             * 节点组个数。
             * @example `1`
             */
            DBNodeCount: number;
            /**
             * 集群是否过期。取值说明：
             * * **true**：已过期。
             * * **false**：未过期。
             * @example `false`
             */
            Expired: string;
            /**
             * 集群创建时间，UTC时间，格式为<i>yyyy-MM-ddTHH:mm:ssZ</i>，例如<i>2021-04-01T09:50:18Z</i>。
             * @example `2021-04-01T09:50:18Z`
             */
            CreateTime: string;
            /**
             * 集群付费类型，取值说明：
             * * **Postpaid**：按量付费（即后付费）。
             * * **Prepaid**：包年包月（即预付费）。
             * @example `Postpaid`
             */
            PayType: string;
            /**
             * 集群的磁盘类型，取值说明：
             * * **local_ssd**：本地磁盘。
             * * **cloud**：普通云盘。
             * * **cloud_ssd**：SSD云盘。
             * * **cloud_efficiency**：高效云盘。
             * * **cloud_essd0**：PL0等级的ESSD云盘。
             * * **cloud_essd**：PL1等级的ESSD云盘。
             * * **cloud_essd2**：PL2 等级的ESSD云盘。
             * * **cloud_essd3**：PL3 等级的ESSD云盘。
             * > 更多关于ESSD云盘的详情，请参见[ESSD云盘规格](~~122389~~)。
             * @example `cloud_essd`
             */
            DiskType: string;
            Tags: {
                /**
                 * 标签信息列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * > 您可以调用[TagResources](~~179253~~)接口为目标集群创建标签。
                     * @example `tag1`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `test1`
                     */
                    Value: string;
                }[];
            };
            /**
             * 集群模式，取值说明：
             * * **flexible**：弹性模式。
             * * **reserver**：预留模式。
             * > - 更多关于集群模式的介绍，请参见[产品系列](~~205001~~)。
             * @example `flexible`
             */
            Mode: string;
            /**
             * 集群端口号，默认为3306。
             * @example `3306`
             */
            Port: string;
            /**
             * 集群的锁定模式，取值说明：
             * * **Unlock**：正常（即未锁定）。
             * * **ManualLock**：手动触发锁定。
             * * **LockByExpiration**：集群过期自动锁定。
             * * **LockByRestoration**：集群回滚前自动锁定。
             * * **LockByDiskQuota**：集群中空间满（即数据占用的存储空间已到达上限水位的90%）自动锁定。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 弹性模式用的存储资源规格，用于数据读写，增加该资源能提高集群读写能力。
             * @example `8Core32GB`
             */
            StorageResource: string;
            /**
             * 弹性模式下集群使用的计算节点数量。
             * @example `1`
             */
            ExecutorCount: string;
            /**
             *  集群ID。
             * @example `am-bp163885f8q21****`
             */
            DBClusterId: string;
            /**
             * 集群的公网连接地址。
             * @example `am-bp163885f8q21****.ads.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 同步源RDS实例ID。仅MySQL分析实例会返回该参数。<props="china"><ph>更多详情，请参见[MySQL分析实例简介](~~154779~~)。</ph></props>
             * @example `rm-bp11q28kvl688****`
             */
            RdsInstanceId: string;
            /**
             * 集群类型，取值说明：
             * * **Common**：常规集群。
             * * **RDS_ANALYSIS**：MySQL分析实例。<props="china"><ph>更多详情，请参见[MySQL分析实例简介](~~154779~~)。</ph></props>
             * @example `Common`
             */
            DBClusterType: string;
            /**
             * 商品code，固定为**ads**。
             * @example `ads`
             */
            CommodityCode: string;
            /**
             * 集群到期时间，UTC时间，格式为<i>yyyy-MM-ddTHH:mm:ssZ</i>，例如<i>2999-09-08T16:00:00Z</i>。
             * > * 若目标集群付费模式为包年包月，则返回实际到期时间。
             * > * 若目标集群付费模式为按量付费，则返回固定值**2999-09-08T16:00:00Z**。
             * @example `2999-09-08T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 集群的存储空间，单位：GB。
             * @example `300`
             */
            DBNodeStorage: number;
            /**
             * 节点规格。
             * @example `E8`
             */
            DBNodeClass: string;
            /**
             * 集群锁定原因。
             * > 仅当集群被锁定时会返回该参数，固定为**instance_expire**。
             * @example `instance_expired`
             */
            LockReason: string;
            /**
             * 专有网络（VPC）ID。
             * @example `vpc-bp13h7uzhulpuxvnpXXXX`
             */
            VPCId: string;
            /**
             * 集群所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 弹性模式下使用的计算资源规格，用于数据计算。增加计算资源能加快查询速度，可以根据集群实际性能按需弹性扩缩。
             * @example `8Core32GB`
             */
            ComputeResource: string;
            /**
             * 弹性IO资源（Elastic IO Unit，简称EIU），更多详情，请参见[EIU详解](~~189505~~)。
             * > 仅弹性模式集群会返回该参数。
             * @example `0`
             */
            ElasticIOResource: number;
            /**
             * 交换机ID。
             * @example `vsw-bp1syh8vvw8yech7nXXXX`
             */
            VSwitchId: string;
            /**
             * 数据库版本，当前仅支持**3.0**版本。
             * @example `3.0`
             */
            DBVersion: string;
            /**
             * VPC实例ID。
             * @example `am-bp163885f8q21****-controller`
             */
            VPCCloudInstanceId: string;
            /**
             * 集群状态。更多详情，请参见[集群状态表](~~143075~~)。
             * @example `Running`
             */
            DBClusterStatus: string;
            /**
             * 资源组ID。
             * @example `rg-acfmyiu4ekp****`
             */
            ResourceGroupId: string;
            /**
             * 集群网络类型。仅支持**VPC**（专有网络）类型。
             * @example `vpc`
             */
            DBClusterNetworkType: string;
            /**
             * 集群的描述信息。
             * @example `adb_test`
             */
            DBClusterDescription: string;
            /**
             * 集群所在的可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 产品系列，取值说明：
             * * **BASIC**：预留模式基础版
             * * **CLUSTER**：预留模式集群版
             * * **MIXED_STORAGE**：弹性模式集群版（新版）
             * > 更多关于集群系列的介绍，请参见[产品系列](~~205001~~)。
             * @example `MIXED_STORAGE`
             */
            Category: string;
            /**
             * 集群引擎，固定为**AnalyticDB**。
             * @example `AnalyticDB`
             */
            Engine: string;
            /**
             * 公网IP。
             * @example `10.1.xx.xx`
             */
            InnerIp: string;
            /**
             * 端口号。
             * @example `3306`
             */
            InnerPort: string;
            /**
             * 任务进度信息。
             */
            TaskInfo: {
                /**
                 * 任务名称。
                 * @example `analyticDBFlexibleScaleOut`
                 */
                Name: string;
                /**
                 * 任务状态，取值为：
                 * - **NOT_RUN**：等待运行。
                 * - **RUNNING**：运行中。
                 * - **SUCCEED**：已结束。
                 * @example `RUNNING`
                 */
                Status: string;
                /**
                 * 任务进度，单位：%。
                 * @example `10`
                 */
                Progress: string;
                StepList: {
                    /**
                     * 任务步骤。
                     */
                    StepList: {
                        /**
                         * 步骤名称。
                         * @example `ApplyResource`
                         */
                        StepName: string;
                        /**
                         * 步骤描述。
                         * @example `Apply resource`
                         */
                        StepDesc: string;
                        /**
                         * 步骤状态，取值为：
                         * - **NOT_RUN**：等待运行。
                         * - **RUNNING**：运行中。
                         * - **SUCCEED**：已结束。
                         * @example `SUCCEED`
                         */
                        StepStatus: string;
                        /**
                         * 步骤进度，单位：%。
                         * @example `50`
                         */
                        StepProgress: string;
                        /**
                         * 步骤开始时间，格式为 YYYY-MM-DDThh:mm:ssZ。
                         * @example `2024-03-10T09:28:34Z`
                         */
                        StartTime: string;
                        /**
                         * 步骤结束时间，格式为 YYYY-MM-DDThh:mm:ssZ。
                         * @example `2024-03-10T10:28:34Z`
                         */
                        EndTime: string;
                    }[];
                };
            };
            /**
             * 产品版本。取值为：
             * - **BasicVersion**：基础版。
             * - **EnterpriseVersion**：企业版。
             * @example `EnterpriseVersion`
             */
            ProductVersion: string;
        }[];
    };
}
