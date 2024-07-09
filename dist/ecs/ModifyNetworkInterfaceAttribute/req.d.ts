export interface ModifyNetworkInterfaceAttributeRequest {
    /**
     * 弹性网卡所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡的名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头。支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * 默认值：空。
     * @example `eniTestName`
     */
    "NetworkInterfaceName"?: string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp67acfmxazb4p****`
     */
    "NetworkInterfaceId": string;
    /**
     * 网卡队列数。取值范围：1~2048。
     * - 只允许修改辅助网卡队列数。
     * - 允许修改处于可用状态（`Available`）的辅助网卡队列数，或者已附加（`InUse`）至实例但实例为已停止（`Stopped`）状态的辅助网卡队列数。
     * - 辅助网卡队列数不能超过实例规格允许的单块网卡最大队列数，同时实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](~~25620~~)接口查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。
     * @example `8`
     */
    "QueueNumber"?: number;
    /**
     * 弹性网卡的描述信息。长度为2~255个英文或中文字符，不能以http://和https://开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * SecurityGroupId列表，辅助弹性网卡最终加入的安全组，并会移出已有的安全组。
     * - N的取值范围与每张弹性网卡能够加入的安全组数量配额有关，更多信息，请参见[使用限制](~~25412#SecurityGroupQuota~~)。
     * - 修改安全组后很快会生效，但可能有较小的延迟。
     */
    "SecurityGroupId"?: string[];
    /**
     * 释放实例时是否保留网卡。取值范围：
     * - true：不保留。
     * - false：保留。
     * @example `true`
     */
    "DeleteOnRelease"?: boolean;
    /**
     * 弹性网卡入方向队列深度。
     * 您需要注意：
     * - 网卡的入方向队列深度必须和出方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
     * - 较大的入方向队列深度可以提升入方向的吞吐量，但会占用更多的内存。
     * @example `8192`
     */
    "RxQueueSize"?: number;
    /**
     * 弹性网卡出方向队列深度。
     * 您需要注意：
     * - 网卡的出方向队列深度必须和入方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
     * - 较大的出方向队列深度可以提升出方向的吞吐量，但会占用更多的内存。
     * @example `8192`
     */
    "TxQueueSize"?: number;
    "EnhancedNetwork"?: {
        EnableSriov: boolean;
    };
    /**
     * 弹性网卡通讯参数
     */
    "NetworkInterfaceTrafficConfig"?: {
        /**
         * 网卡的通讯模式。参数取值范围：
         * - Standard：使用 TCP 通讯模式。
         * - HighPerformance：开启 ERI（Elastic RDMA Interface）接口，使用 RDMA 通讯模式。
         * 当弹性网卡处于挂载态时，您需要注意：
         * - 实例的所有RDMA网卡数不能超过实例规格允许的RDMA网卡数配额。实例规格允许的RDMA网卡数配额可以通过 DescribeInstanceTypes 接口查询EriQuantity字段。
         * > 该参数正在邀测中，暂未开放使用。
         * @example `HighPerformance`
         */
        NetworkInterfaceTrafficMode: string;
        /**
         * 弹性网卡队列数。
         * 当弹性网卡处于挂载态时，您需要注意：
         * - 不能超过实例规格允许的单块网卡最大队列数。
         * - 实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过 DescribeInstanceTypes 接口查询MaximumQueueNumberPerEni、TotalEniQueueQuantity字段。
         * > 该参数正在邀测中，暂未开放使用。
         * @example `8`
         */
        QueueNumber: number;
        /**
         * RDMA 网卡队列数。
         * 当弹性网卡处于挂载态时，您需要注意：
         * - 不能超过实例规格允许的单块RDMA网卡最大队列数。实例规格允许的单块RDMA网卡最大队列数可以通过 DescribeInstanceTypes 接口查询QueuePairNumber字段。
         * > 该参数正在邀测中，暂未开放使用。
         * @example `8`
         */
        QueuePairNumber: number;
        /**
         * 弹性网卡入方向队列深度。
         * 您需要注意：
         * - 网卡的入方向队列深度必须和出方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
         * - 较大的入方向队列深度可以提升入方向的吞吐量，但会占用更多的内存。
         * > 该参数正在邀测中，暂未开放使用。
         * @example `8192`
         */
        RxQueueSize: number;
        /**
         * 弹性网卡出方向队列深度。
         * 您需要注意：
         * - 网卡的出方向队列深度必须和入方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
         * - 较大的出方向队列深度可以提升出方向的吞吐量，但会占用更多的内存。
         * > 该参数正在邀测中，暂未开放使用。
         * @example `8192`
         */
        TxQueueSize: number;
    };
    "ConnectionTrackingConfiguration"?: {
        TcpEstablishedTimeout: number;
        TcpClosedAndTimeWaitTimeout: number;
        UdpTimeout: number;
    };
}
