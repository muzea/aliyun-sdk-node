export interface DescribeInstanceTypesResponse {
    /**
     * 请求ID。
     * @example `00827261-20B7-4562-83F2-4DF39876A45A`
     */
    RequestId: string;
    InstanceTypes: {
        /**
         * 实例规格集合。
         */
        InstanceType: {
            /**
             * 支持挂载的所有网卡（包括主网卡、弹性网卡、中继网卡等）上限。
             * > 该参数正在邀测中，暂未开放使用。
             * @example `0`
             */
            EniTotalQuantity: number;
            /**
             * 本地盘类型。更多信息，请参见[本地盘](~~63138~~)。可能值：
             * - local_hdd_pro：实例规格族d1ne和d1搭载的SATA HDD本地盘。
             * - local_ssd_pro：实例规格族i2、i2g、i1、ga1和gn5等搭载的NVMe SSD本地盘。
             * @example `local_ssd_pro`
             */
            LocalStorageCategory: string;
            /**
             * 主网卡默认队列数。
             * @example `4`
             */
            PrimaryEniQueueNumber: number;
            /**
             * 内存大小。单位：GiB。
             * @example `16`
             */
            MemorySize: number;
            /**
             * 实例挂载的本地盘的单盘容量。单位：GiB。
             * @example `5000`
             */
            LocalStorageCapacity: number;
            /**
             * 实例规格族级别。可能值：
             * - EntryLevel：入门级（共享型）。
             * - EnterpriseLevel：企业级。
             * - CreditEntryLevel：积分入门级。更多信息，请参见[突发性能实例](~~59977~~)。
             * @example `EnterpriseLevel`
             */
            InstanceFamilyLevel: string;
            /**
             * 内网入方向网络收发包能力。单位：pps。
             * @example `500000`
             */
            InstancePpsRx: number;
            /**
             * 单块弹性网卡的IPv6地址上限。
             * @example `1`
             */
            EniIpv6AddressQuantity: number;
            /**
             * 单块弹性网卡最大队列数。包括主网卡及辅助网卡支持的队列数。
             * @example `4`
             */
            MaximumQueueNumberPerEni: number;
            /**
             * 实例规格ID。
             * @example `ecs.g6.large`
             */
            InstanceTypeId: string;
            /**
             * 最大内网入方向带宽限制。单位：kbit/s
             * @example `1024000`
             */
            InstanceBandwidthRx: number;
            /**
             * 辅助弹性网卡默认队列数。
             * @example `4`
             */
            SecondaryEniQueueNumber: number;
            /**
             * GPU类型。
             * @example `NVIDIA V100`
             */
            GPUSpec: string;
            /**
             * 最大内网出方向带宽限制。单位：kbit/s
             * @example `1024000`
             */
            InstanceBandwidthTx: number;
            /**
             * 单块弹性RDMA网卡（ERI）的QP（QueuePair）队列数上限。
             * @example `22`
             */
            QueuePairNumber: number;
            /**
             * 弹性RDMA网卡（ERI）数量。
             * > 该参数正在邀测中，暂未开放使用。
             * @example `0`
             */
            EriQuantity: number;
            /**
             * GPU数量。
             * @example `0`
             */
            GPUAmount: number;
            /**
             * 实例规格允许修改的弹性网卡队列数总配额。
             * @example `12`
             */
            TotalEniQueueQuantity: number;
            /**
             * 实例规格所挂载的云盘是否支持NVMe。可能值：
             * - required：支持。表示云盘以NVMe的方式挂载。
             * - unsupported：不支持。表示云盘不以NVMe的方式挂载。
             * @example `unsupported`
             */
            NvmeSupport: string;
            /**
             * 支持挂载的云盘数量上限。
             * @example `17`
             */
            DiskQuantity: number;
            /**
             * 突发性能实例t5、t6的初始vCPU积分值。
             * @example `120`
             */
            InitialCredit: number;
            /**
             * 实例挂载的本地盘的数量。
             * @example `1`
             */
            LocalStorageAmount: number;
            /**
             * 突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）。
             * @example `4`
             */
            BaselineCredit: number;
            /**
             * 内网出方向网络收发包能力。单位：pps。
             * @example `500000`
             */
            InstancePpsTx: number;
            /**
             * 单块弹性网卡的IPv4地址上限。
             * @example `10`
             */
            EniPrivateIpAddressQuantity: number;
            /**
             * vCPU内核数目。
             * @example `4`
             */
            CpuCoreCount: number;
            /**
             * 实例规格族。
             * @example `ecs.g6`
             */
            InstanceTypeFamily: string;
            /**
             * 支持挂载的弹性网卡上限。
             * @example `3`
             */
            EniQuantity: number;
            /**
             * 实例规格所挂载的网卡是否支持中继。
             * > 该参数正在邀测中，暂未开放使用。
             * @example `true`
             */
            EniTrunkSupported: boolean;
            /**
             * CPU基频，单位GHz。
             * @example `2.7`
             */
            CpuSpeedFrequency: number;
            /**
             * CPU睿频，单位GHz。
             * @example `3.5`
             */
            CpuTurboFrequency: number;
            /**
             * 处理器型号。
             * @example `Intel Xeon(Ice Lake) Platinum 8369B`
             */
            PhysicalProcessorModel: string;
            /**
             * 实例是否支持VPC网络流量加密，可能值：
             * - true：支持VPC网络流量加密。
             * - false：不支持VPC网络流量加密。
             * @example `true`
             */
            NetworkEncryptionSupport: boolean;
            /**
             * 实例规格分类。可能值：
             * - General-purpose： 通用型。
             * - Compute-optimized：计算型。
             * - Memory-optimized：内存型。
             * - Big data：大数据型。
             * - Local SSDs ：本地SSD型。
             * - High Clock Speed ：高主频型。
             * - Enhanced ：增强型。
             * - Shared：共享型。
             * - Compute-optimized with GPU ：GPU计算型。
             * - Visual Compute-optimized ：视觉计算型。
             * - Heterogeneous Service ：异构服务型。
             * - Compute-optimized with FPGA ：FPGA计算型。
             * - Compute-optimized with NPU ：NPU计算型。
             * - ECS Bare Metal ：弹性裸金属服务器。
             * - Super Computing Cluster：超级计算集群。
             * - High Performance Compute：高性能计算型。
             * @example `Big data`
             */
            InstanceCategory: string;
            /**
             * CPU架构，可能值：
             * - X86。
             * - ARM。
             * @example `X86`
             */
            CpuArchitecture: string;
            /**
             * 规格对应的单块GPU显存。单位：GiB。
             * @example `32`
             */
            GPUMemorySize: number;
            /**
             * 实例规格支持的物理网卡数量。
             * @example `1`
             */
            NetworkCardQuantity: number;
            NetworkCards: {
                /**
                 * 物理网卡信息列表。
                 */
                NetworkCardInfo: {
                    /**
                     * 物理网卡索引。
                     * @example `1`
                     */
                    NetworkCardIndex: number;
                }[];
            };
            SupportedBootModes: {
                /**
                 * 规格支持的启动模式。
                 */
                SupportedBootMode: string[];
            };
            EnhancedNetwork: {
                SriovSupport: boolean;
                VfQueueNumberPerEni: number;
            };
        }[];
    };
    /**
     * 本次调用返回的查询凭证（Token）。
     * @example `e71d8a535bd9cc11`
     */
    NextToken: string;
}
