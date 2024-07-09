export interface DescribeSmartAccessGatewayAttributeResponse {
    /**
     * 智能接入网关设备4G公网最大上行带宽。单位：Mbps。
     * @example `3`
     */
    UpBandwidth4G: number;
    /**
     * 智能接入网关实例描述。
     * @example `testdesc`
     */
    Description: string;
    /**
     * 智能接入网关实例到期时间戳。
     * @example `1628265600000`
     */
    EndTime: number;
    /**
     * 智能接入网关实例所属资源组ID。
     * @example `rg-acfm2iu4fnc****`
     */
    ResourceGroupId: string;
    /**
     * 智能接入网关实例客户端账号数量。
     * @example `3`
     */
    UserCount: number;
    /**
     * 智能接入网关实例绑定的云连接网名称。
     * @example `testname`
     */
    AssociatedCcnName: string;
    /**
     * 智能接入网关实例的带宽峰值。单位：Mbps。
     * @example `50 M`
     */
    MaxBandwidth: string;
    /**
     * aliVPN连接状态。
     * - **up**：aliVPN连接正常。
     * - **down**：aliVPN连接异常。
     * @example `down`
     */
    VpnStatus: string;
    /**
     * 智能接入网关主设备的公网IP。
     * @example `112.XX.XX.25`
     */
    BoxControllerIp: string;
    /**
     * 智能接入网关设备WAN口最大上行带宽。单位：Mbps。
     * @example `4`
     */
    UpBandwidthWan: number;
    /**
     * 本地网络或客户端要和云上互通的私网网段。
     * @example `10.0.9.0/24`
     */
    CidrBlock: string;
    QosIds: {
        /**
         * 智能接入网关实例绑定的QoS策略实例信息。
         */
        QosId: string[];
    };
    IRIds: {
        /**
         * 智能接入网关实例绑定的智能选路策略实例信息。
         */
        IRId: string[];
    };
    Devices: {
        /**
         * 智能接入网关设备信息列表。
         */
        Device: {
            /**
             * 智能接入网关设备序列号。
             * @example `sage6gsdllbid****"`
             */
            SerialNumber: string;
            /**
             * 智能接入网关设备高可用状态。
             * - **Active**：标识当前设备为主设备。
             * - **Standby**：标识当前设备为备设备。
             * @example `Active`
             */
            HaState: string;
            /**
             * 智能接入网关设备密钥。
             * @example `+T4nV8xkS4****`
             */
            SecretKey: string;
            /**
             * 智能接入网关设备使用的应用识别数据库版本。
             * @example `20201117_1_0-0.0.1`
             */
            DpiSignatureDbVersion: string;
            /**
             * 智能接入网关设备运行的软件版本。
             * @example `2.3.0.0`
             */
            SoftwareVersion: string;
            /**
             * 智能接入网关设备密钥激活状态。
             * - **1**：已激活。
             * - **0**：未激活。
             * @example `1`
             */
            DistributeSkStatus: number;
            /**
             * 智能接入网关设备使用的监控版本。
             * @example `0.1.11.17`
             */
            MonitorVersion: string;
            /**
             * 智能接入网关设备健康检查状态。
             * - **online**：设备在线，已经接入阿里云。
             * - **offline**：设备离线，未接入阿里云。
             * @example `online`
             */
            HcState: string;
        }[];
    };
    /**
     * 智能接入网关实例名称。
     * @example `testname`
     */
    Name: string;
    /**
     * 智能接入网关实例优化重传类型。优化重传类型开启后，默认为**fec**。
     * @example `fec`
     */
    OptimizationType: boolean;
    /**
     * ipsecVPN连接状态。
     * - **up**：ipsecVPN连接正常。
     * - **down**：ipsecVPN连接异常。
     * @example `up`
     */
    IpsecStatus: string;
    /**
     * 智能接入网关实例的线下路由同步方式。
     * - **static**：静态路由。
     * - **dynamic**：动态路由。
     * @example `static`
     */
    RoutingStrategy: string;
    /**
     * 智能接入网关实例绑定的云连接网ID。
     * @example `ccn-iz26o9zye6lhoo****`
     */
    AssociatedCcnId: string;
    FlowLogIds: {
        /**
         * 智能接入网关实例绑定的流日志实例信息。
         */
        FlowLogId: string[];
    };
    /**
     * 智能接入网关实例ID。
     * @example `sag-6z21oj0vjjrx6s****`
     */
    SmartAGId: string;
    /**
     * 智能接入网关实例类型。
     * - **sag-1000**：标识当前实例为智能接入网关硬件版实例，且实例绑定的设备类型为SAG-1000。
     * - **sag-10wm**：标识当前实例为智能接入网关硬件版实例，且实例绑定的设备类型为SAG-100WM。
     * - **sag-software**：标识当前实例为智能接入网关APP实例。
     * - **sag-vcpe**：标识当前实例为智能接入网关vCPE实例。
     * @example `sag-vcpe`
     */
    InstanceType: string;
    /**
     * 经销商账号ID。
     * @example `1210123456123456`
     */
    ResellerUid: string;
    /**
     * 智能接入网关设备离线锁定的时间阈值。
     * 单位：秒。
     * @example `3600`
     */
    SecurityLockThreshold: number;
    /**
     * 智能接入网关实例状态。
     * - **Ordered**：待发货。
     * - **Delivered**：已发货。
     * - **Received**：已激活。
     * - **Unconfirmed**：待确认。
     * - **Active**：可用。
     * - **Offline**：离线。
     * - **Arrearage**：欠费锁定。
     * @example `Active`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `F02D092B-A0B7-4BA1-BCA7-014B953C5DC7`
     */
    RequestId: string;
    /**
     * 智能接入网关实例创建时间戳。
     * @example `1622617250000`
     */
    CreateTime: number;
    /**
     * 智能接入网关实例的流量套餐。单位：GB。
     * > 目前仅支持每个账号每个月赠送5 GB流量。
     * @example `5`
     */
    DataPlan: number;
    /**
     * 智能接入网关实例是否开启优化重传功能。
     * - **true**：已开启。
     * - **false**：未开启。
     * @example `false`
     */
    EnableOptimization: boolean;
    /**
     * 智能接入网关设备所在城市ID。
     * @example `cn-shanghai`
     */
    City: string;
    /**
     * 经销商实例ID。
     * @example `sag-v0fkpk4akfz5******`
     */
    ResellerInstanceId: string;
    /**
     * 智能接入网关设备序列号。
     * @example `sage6gsdllbidl****,sage6nniq3d****`
     */
    SerialNumber: string;
    /**
     * 智能接入网关备设备的公网IP。
     * @example `112.XX.XX.27`
     */
    BackupBoxControllerIp: string;
    /**
     * 当前主要负责传输流量的智能接入网关设备序列号。
     * @example `sage6nniq3d****`
     */
    TrafficMasterSn: string;
    /**
     * 智能接入网关实例接入点ID。
     * @example `238`
     */
    AccessPointId: string;
    Links: {
        /**
         * 本地网络接入阿里云的链路信息列表。
         */
        Link: {
            /**
             * 边界路由器IP地址。
             * >在您创建关于专线的健康检查实例时，需指定边界路由器IP地址为目标地址。
             * @example `100.XX.XX.144`
             */
            HealthCheckTargetIp: string;
            /**
             * 链路到期时间戳。
             * @example `1628265600000`
             */
            EndTime: number;
            /**
             * 链路状态。
             * 宽带链路状态：
             * - **Ordered**：待发货。
             * - **Delivered**：已发货。
             * - **Offline**：离线。
             * - **Active**：可用。
             * - **Arrearage**：欠费锁定。
             * 专线链路状态：
             * - **normal**：正常。
             * - **arrears**：欠费。
             * @example `Active`
             */
            Status: string;
            /**
             * 链路类型。
             * - **ccn**：表示本地网络通过云连接网接入阿里云。
             * - **vbr**：表示本地网络通过边界路由器的专线接入阿里云。
             * @example `ccn`
             */
            Type: string;
            /**
             * 链路带宽值。单位：Mbps。
             * @example `50 M`
             */
            Bandwidth: string;
            /**
             * 链路相关实例所在的地域ID。
             * @example `cn-shanghai`
             */
            RelateInstanceRegionId: string;
            /**
             * 链路相关实例ID。
             * @example `ccn-iz26o9zye6lho****`
             */
            RelateInstanceId: string;
            /**
             * 商品实例ID。
             * @example `sag-6z21oj0vjjrx****`
             */
            InstanceId: string;
            /**
             * 链路带宽的商品类型：
             * - **bandwidth**：表示智能接入网关和带宽为拆分售卖类型。
             * - **smartag**：表示智能接入网关和带宽为组合售卖类型。
             * @example `smartag`
             */
            CommodityType: string;
        }[];
    };
    AclIds: {
        /**
         * 智能接入网关实例绑定的访问控制实例信息。
         */
        AclId: string[];
    };
    /**
     * 智能接入网关实例绑定的应用加速带宽包ID。
     * @example `abwp-7963l7iqnquyj3****`
     */
    ApplicationBandwidthPackageId: string;
    /**
     * 智能接入网关实例绑定的应用加速带宽包名称。
     * @example `testname`
     */
    ApplicationBandwidthPackageName: string;
    /**
     * 智能接入网关实例的应用加速带宽峰值。单位：Mbps。
     * @example `1`
     */
    AccelerateBandwidth: number;
    /**
     * 应用加速带宽包实例的状态。
     * - **Abnormal**：异常。
     * - **Normal**：正常。
     * @example `Normal`
     */
    ApplicationBandwidthPackageBussinessStatus: string;
    /**
     * 应用加速带宽包实例锁定信息。
     */
    ApplicationBandwidthPackageOperationLocks: {
        /**
         * 锁定类型。取值：**FinancialLocked**。
         * @example `FinancialLocked`
         */
        LockType: string;
        /**
         * 锁定原因。
         * @example `Message`
         */
        LockReason: string;
    };
    /**
     * 盒子所在位置。
     * @example `阿里巴巴西溪园区`
     */
    Position: string;
    /**
     * 是否开启智能接入网关App实例连接日志审计。取值：
     * - **true**：开启智能接入网关App实例连接日志审计。
     * - **false**：关闭智能接入网关App实例连接日志审计。
     * @example `true`
     */
    EnableSoftwareConnectionAudit: boolean;
}
