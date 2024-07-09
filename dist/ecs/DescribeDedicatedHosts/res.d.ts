export interface DescribeDedicatedHostsResponse {
    /**
     * 输入时设置的每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `7654525A-9964-4ABB-8BCD-98F8835E809A`
     */
    RequestId: string;
    /**
     * 专有宿主机列表的页码。
     * @example `5`
     */
    PageNumber: number;
    /**
     * 专有宿主机总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证（Token）。当使用 MaxResults 和 NextToken 方式进行分页查询，且该返回值为空时，表示无更多返回的数据信息。
     * @example `e71d8a535bd9cc11`
     */
    NextToken: string;
    DedicatedHosts: {
        /**
         * 专有宿主机的详细信息集合。
         */
        DedicatedHost: {
            /**
             * 专有宿主机的创建时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为`yyyy-MM-ddTHH:mmZ`。
             * @example `2018-01-01T12:00Z`
             */
            CreationTime: string;
            /**
             * 专有宿主机所属托管资源池（Managed Private Space）ID。
             * @example `mps-iq81z6pkbqjx61php46e`
             */
            SchedulerOptions.ManagedPrivateSpaceId: string;
            /**
             * 专有宿主机的使用状态。可能值：
             * - Available：运行中。专有宿主机的正常运行状态。
             * - UnderAssessment：物理机风险，即故障潜伏期，其物理机处于可用状态，但可能导致专有宿主机中的ECS实例出现问题。
             * - PermanentFailure：故障。永久性故障，专有宿主机不可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 单个CPU的核数。
             * @example `3`
             */
            Cores: number;
            /**
             * 专有宿主机是否加入自动部署资源池。取值范围：
             * - on：加入自动部署资源池。
             * - off：不加入自动部署资源池。
             * 关于自动部署的更多信息，请参见[自动部署功能介绍](~~118938~~)。
             * @example `on`
             */
            AutoPlacement: string;
            /**
             * GPU型号。
             * @example `gpu`
             */
            GPUSpec: string;
            /**
             * 自动释放时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为`yyyy-MM-ddTHH:mmZ`。
             * @example `2017-01-01T12:00Z`
             */
            AutoReleaseTime: string;
            /**
             * 专有宿主机的计费方式。
             * @example `Prepaid`
             */
            ChargeType: string;
            /**
             * CPU超卖比。
             * @example `1`
             */
            CpuOverCommitRatio: number;
            /**
             * 当专有宿主机发生故障时，为其所宿实例设置迁移方案。取值范围：
             * - Migrate：专有宿主机整机迁移至另一物理服务器，并对故障前非关机状态的实例进行启动。
             * - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。
             * 当专有宿主机上挂载云盘存储时，默认值为Migrate；当专有宿主机上挂载本地盘存储时默认值为Stop。
             * @example `Migrate`
             */
            ActionOnMaintenance: string;
            /**
             * 包年包月单位。可能值：
             * - Month。
             * - Year。
             * @example `Month`
             */
            SaleCycle: string;
            /**
             * 物理GPU数量。
             * @example `10`
             */
            PhysicalGpus: number;
            /**
             * 专有宿主机所在地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 专有宿主机的名称。
             * @example `MyDDHTestName`
             */
            DedicatedHostName: string;
            /**
             * 专有宿主机的描述信息。
             * @example `this-is-my-DDH`
             */
            Description: string;
            /**
             * 专有宿主机所在的专有宿主机集群ID。
             * @example `dc-bp12wlf6am0vz9v2****`
             */
            DedicatedHostClusterId: string;
            /**
             * 包年包月专有宿主机的到期时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为`yyyy-MM-ddTHH:mmZ`。
             * @example `2019-01-01T12:00Z`
             */
            ExpiredTime: string;
            /**
             * 专有宿主机的规格类型。
             * @example `ddh.g5`
             */
            DedicatedHostType: string;
            /**
             * 专有宿主机所在资源组ID。
             * @example `rg-aek3b6jzp66****`
             */
            ResourceGroupId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 专有宿主机ID。
             * @example `dh-bp165p6xk2tlw61e****`
             */
            DedicatedHostId: string;
            /**
             * 物理处理器（CPU）数量。
             * @example `5`
             */
            Sockets: number;
            /**
             * 专有宿主机机器码。
             * @example `12aaa123456ff19dec12345d3026e****`
             */
            MachineId: string;
            Instances: {
                /**
                 * 专有宿主机上创建的ECS实例。
                 */
                Instance: {
                    /**
                     * 专有宿主机上创建的ECS实例规格信息。
                     * @example `ecs.g5.large`
                     */
                    InstanceType: string;
                    /**
                     * 专有宿主机上创建的ECS实例ID。
                     * @example `i-bp14ot0ykf8w13a1****`
                     */
                    InstanceId: string;
                    /**
                     * 实例所处的Socket的序号。
                     * @example `0,1`
                     */
                    SocketId: string;
                    /**
                     * ECS实例所有者的用户ID。
                     * @example `128************0`
                     */
                    InstanceOwnerId: number;
                }[];
            };
            OperationLocks: {
                /**
                 * 专有宿主机资源被锁定原因。
                 */
                OperationLock: {
                    /**
                     * 专有宿主机被锁定的原因。可能值：
                     * - financial：因欠费被锁定。
                     * - security：因安全原因被锁定。
                     * @example `financial`
                     */
                    LockReason: string;
                }[];
            };
            Tags: {
                /**
                 * 专有宿主机的标签。
                 */
                Tag: {
                    /**
                     * 专有宿主机的标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 专有宿主机的标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            SupportedInstanceTypeFamilies: {
                /**
                 * 专有宿主机支持的ECS实例规格族。
                 */
                SupportedInstanceTypeFamily: string[];
            };
            SupportedCustomInstanceTypeFamilies: {
                /**
                 * 专有宿主机支持的自定义实例规格族。
                 */
                SupportedCustomInstanceTypeFamily: string[];
            };
            SupportedInstanceTypesList: {
                /**
                 * 专有宿主机支持的ECS实例规格。
                 */
                SupportedInstanceTypesList: string[];
            };
            /**
             * 专有宿主机性能指标集合。
             */
            Capacity: {
                /**
                 * 剩余的内存容量，单位：GiB。
                 * @example `25`
                 */
                AvailableMemory: number;
                /**
                 * 本地盘类型。
                 * @example `i2`
                 */
                LocalStorageCategory: string;
                /**
                 * 内存总容量，单位：GiB。
                 * @example `1024`
                 */
                TotalMemory: number;
                /**
                 * 本地盘总容量，单位：GiB。
                 * @example `512`
                 */
                TotalLocalStorage: number;
                /**
                 * vCPU总核数。
                 * @example `56`
                 */
                TotalVcpus: number;
                /**
                 * 总虚拟GPU数量。
                 * @example `10`
                 */
                TotalVgpus: number;
                /**
                 * 剩余的本地盘容量。单位：GiB。
                 * @example `65`
                 */
                AvailableLocalStorage: number;
                /**
                 * 剩余的vCPU核数。
                 * @example `5`
                 */
                AvailableVcpus: number;
                /**
                 * 可用虚拟GPU数量。
                 * @example `2`
                 */
                AvailableVgpus: number;
                SocketCapacities: {
                    /**
                     * Socket维度容量信息。
                     */
                    SocketCapacity: {
                        /**
                         * Socket序号。
                         * @example `1`
                         */
                        SocketId: number;
                        /**
                         * 剩余内存容量，单位：GiB。
                         * @example `65`
                         */
                        AvailableMemory: number;
                        /**
                         * 内存总容量，单位：GiB。
                         * @example `128`
                         */
                        TotalMemory: number;
                        /**
                         * 剩余的vCPU核数。
                         * @example `64`
                         */
                        AvailableVcpu: number;
                        /**
                         * vCPU总核数。
                         * @example `128`
                         */
                        TotalVcpu: number;
                    }[];
                };
            };
            /**
             * 专有宿主机的网络属性值。
             */
            NetworkAttributes: {
                /**
                 * UDP超时时间。单位：S。当前仅支持60S。
                 * @example `60`
                 */
                UdpTimeout: number;
                /**
                 * SLB UDP超时时间。单位：S。当前仅支持60S。
                 * @example `60`
                 */
                SlbUdpTimeout: number;
            };
            /**
             * 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
             */
            HostDetailInfo: {
                /**
                 * 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。
                 * @example `null`
                 */
                SerialNumber: string;
            };
            /**
             * 专有宿主机所有者的用户ID。
             * @example `100************7`
             */
            DedicatedHostOwnerId: number;
        }[];
    };
}
