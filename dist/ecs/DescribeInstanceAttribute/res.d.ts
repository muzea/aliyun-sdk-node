export interface DescribeInstanceAttributeResponse {
    /**
     * 实例状态。取值范围：
     * - Pending：创建中。
     * - Running：运行中。
     * - Starting：启动中。
     * - Stopping：停止中。
     * - Stopped：已停止。
     * @example `Running`
     */
    Status: string;
    /**
     * 实例序列号。
     * @example `51d1353b-22bf-4567-a176-8b3e12e4****`
     */
    SerialNumber: string;
    /**
     * 实例创建时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](~~25696~~)。
     * @example `2017-12-10T04:04Z`
     */
    CreationTime: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 实例描述。
     * @example `testDescription`
     */
    Description: string;
    /**
     * 实例名称。
     * @example `testInstanceName`
     */
    InstanceName: string;
    /**
     * 实例网络类型。取值范围：
     *
     * - classic：经典网络。
     * - vpc：专有网络VPC。
     * @example `vpc`
     */
    InstanceNetworkType: string;
    /**
     * 内存大小，单位为MiB。
     * @example `16384`
     */
    Memory: number;
    /**
     * 实例运行的镜像ID。
     * @example `m-bp1h46wfpjsjastc****`
     */
    ImageId: string;
    /**
     * 实例所在的集群ID。
     * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
     * @example `cls-bp67acfmxazb4p****`
     */
    ClusterId: string;
    /**
     * 实例的VLAN ID。
     * >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
     * @example `10`
     */
    VlanId: string;
    /**
     * 实例停机后是否继续收费。可能值：
     * - KeepCharging：停机后继续收费，为您继续保留库存资源。
     * - StopCharging：停机后不收费。停机后，我们释放实例对应的资源，例如vCPU、内存和公网IP等资源。重启是否成功依赖于当前地域中是否仍有资源库存。
     * - Not-applicable：本实例不支持停机不收费功能。
     * @example `KeepCharging`
     */
    StoppedMode: string;
    /**
     * 实例主机名。
     * @example `testHostName`
     */
    HostName: string;
    /**
     * 实例ID。
     * @example `i-uf6f5trc95ug8t33****`
     */
    InstanceId: string;
    /**
     * 实例的规格。
     * @example `ecs.g5.large`
     */
    InstanceType: string;
    /**
     * 公网入带宽最大值，单位为Mbit/s。
     * @example `50`
     */
    InternetMaxBandwidthIn: number;
    /**
     * 公网出带宽最大值，单位为Mbit/s。
     * @example `5`
     */
    InternetMaxBandwidthOut: number;
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 实例的计费方式。可能值：
     * - PrePaid：包年包月。
     * - PostPaid：按量付费。
     * @example `PrePaid`
     */
    InstanceChargeType: string;
    /**
     * 是否是I/O优化型实例。
     * @example `true`
     */
    IoOptimized: string;
    /**
     * vCPU处理器核心数量。
     * @example `8`
     */
    Cpu: number;
    /**
     * 过期时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](~~25696~~)。
     * @example `2017-12-10T04:04Z`
     */
    ExpiredTime: string;
    /**
     * 实例所属可用区。
     * @example `cn-hangzhou-g`
     */
    ZoneId: string;
    /**
     * 公网带宽计费方式。可能值：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `PayByTraffic`
     */
    InternetChargeType: string;
    /**
     * 突发性能实例的运行模式。可能值：
     * - Standard：标准模式。有关实例性能的更多信息，请参见[性能模式](~~59977#section-svb-w9d-dju~~)。
     * - Unlimited：无性能约束模式，有关实例性能的更多信息，请参见[性能模式](~~59977#section-svb-w9d-dju~~)。
     * @example `Standard`
     */
    CreditSpecification: string;
    SecurityGroupIds: {
        /**
         * 实例所属安全组集合。
         */
        SecurityGroupId: string[];
    };
    PublicIpAddress: {
        /**
         * 实例公网IP地址。
         */
        IpAddress: string[];
    };
    InnerIpAddress: {
        /**
         * 经典网络类型实例的内网IP地址。
         */
        IpAddress: string[];
    };
    /**
     * 专有网络VPC属性。
     */
    VpcAttributes: {
        /**
         * 专有网络VPC ID。
         * @example `vpc-wz9e4e9pmbcnj6ki6****`
         */
        VpcId: string;
        /**
         * 云产品的IP，用于VPC云产品之间的网络互通。
         * @example `172.17.**.**`
         */
        NatIpAddress: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-uf6ixacqz8osrwnqb****`
         */
        VSwitchId: string;
        PrivateIpAddress: {
            /**
             * 私有IP地址。
             */
            IpAddress: string[];
        };
    };
    /**
     * 弹性公网IP绑定信息。
     */
    EipAddress: {
        /**
         * 公网带宽计费方式。可能值：
         * - PayByBandwidth：按固定带宽计费。
         * - PayByTraffic：按使用流量计费。
         * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
         * @example `PayByTraffic`
         */
        InternetChargeType: string;
        /**
         * 弹性公网IP。
         * @example `30.21.**.**`
         */
        IpAddress: string;
        /**
         * 弹性公网IP的公网带宽限速，单位为Mbit/s。
         * @example `8`
         */
        Bandwidth: number;
        /**
         * 弹性公网IP的ID。
         * @example `eip-wz9uilio26dfscamm****`
         */
        AllocationId: string;
    };
    /**
     * 由专有宿主机集群ID（DedicatedHostClusterId）、专有宿主机ID（DedicatedHostId）和名称（DedicatedHostName）组成的宿主机属性数组。
     */
    DedicatedHostAttribute: {
        /**
         * 专有宿主机的名称。
         * @example `ecs-autoui-create-ddh-temp`
         */
        DedicatedHostName: string;
        /**
         * 专有宿主机ID。
         * @example `dh-2ze7qrzz6lvbfhr0****`
         */
        DedicatedHostId: string;
    };
    OperationLocks: {
        /**
         * 锁定类型。可能值：
         * - financial：因欠费被锁定。
         * - security：因安全原因被锁定。
         * - Recycling：抢占式实例的待释放锁定状态。
         * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
         * - refunded：因退款被锁定。
         */
        LockReason: {
            /**
             * 锁定类型。可能值：
             * - financial：因欠费被锁定。
             * - security：因安全原因被锁定。
             * - Recycling：抢占式实例的待释放锁定状态。
             * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
             * - refunded：因退款被锁定。
             * @example `financial`
             */
            LockReason: string;
        }[];
    };
    /**
     * ECS实例是否开启了Jumbo frame特性。 可能值：
     * - true：开启。
     * - false：不开启。
     * 更多信息，请参见[ECS实例MTU](~~200512~~)。
     * @example `false`
     */
    EnableJumboFrame: boolean;
}
