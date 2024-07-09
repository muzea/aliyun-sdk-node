export interface GetNatGatewayAttributeResponse {
    /**
     * NAT网关实例所属VPC的ID。
     * @example `vpc-bp15zckdt37pq72z****`
     */
    VpcId: string;
    /**
     * NAT网关的创建时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-12-08T12:20:20Z`
     */
    CreationTime: string;
    /**
     * NAT网关的状态。取值：
     * - **Creating**：创建中。创建NAT网关是异步操作，在创建完成之前是**Creating**状态。
     * - **Available**：可用。NAT网关创建完成后的状态，是稳定状态。
     * - **Modifying**：修改中。变配NAT网关是异步操作，在变配的过程中是**Modifying**状态。
     * - **Deleting**：删除中。删除NAT网关是异步操作，在删除的过程中是**Deleting**状态。
     * - **Converting**：转换中。普通型NAT网关转换到增强型NAT网关是异步操作，在转换过程中是**Converting**状态。
     * @example `Available`
     */
    Status: string;
    /**
     * 公网NAT网关的类型，当前取值为**Enhanced**，即增强型公网NAT网关。
     * @example `Enhanced`
     */
    NatType: string;
    /**
     * NAT网关的类型。取值：
     * - **internet**：公网NAT网关。
     * - **intranet**：VPC NAT网关。
     * @example `internet`
     */
    NetworkType: string;
    /**
     * NAT网关实例所在的地域ID。
     * @example `cn-qingdao`
     */
    RegionId: string;
    /**
     * 是否开启了网关流量监控功能。取值：
     * - **true**：开启了网关流量监控功能。
     * - **false**：未开启网关流量监控功能。
     * @example `true`
     */
    EcsMetricEnabled: boolean;
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * NAT网关实例的描述。
     * @example `NAT`
     */
    Description: string;
    /**
     * NAT网关实例的过期时间。
     * @example `2021-12-26T12:20:20Z`
     */
    ExpiredTime: string;
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    ResourceGroupId: string;
    /**
     * NAT网关实例的ID。
     * @example `ngw-bp1047e2d4z7kf2ki****`
     */
    NatGatewayId: string;
    /**
     * NAT网关的业务状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定状态。
     * @example `Normal`
     */
    BusinessStatus: string;
    /**
     * NAT网关实例名称。
     * @example `abc`
     */
    Name: string;
    /**
     * DNAT列表的信息。
     */
    ForwardTable: {
        /**
         * DNAT表的ID。
         * @example `ftb-uf6gj3mhsg94qsqst****`
         */
        ForwardTableId: string;
        /**
         * DNAT条目的个数。
         * @example `1`
         */
        ForwardEntryCount: number;
    };
    /**
     * SNAT列表信息。
     */
    SnatTable: {
        /**
         * SANT条目的个数。
         * @example `1`
         */
        SnatEntryCount: number;
        /**
         * SNAT列表的ID。
         * @example `stb-SnatTableIds****`
         */
        SnatTableId: string;
    };
    /**
     * FULLNAT列表的信息。
     */
    FullNatTable: {
        /**
         * FULLNAT条目的个数。
         * @example `1`
         */
        FullNatEntryCount: number;
        /**
         * FULLNAT表的ID。
         * @example `fulltb-gw88z7hhlv43rmb26****`
         */
        FullNatTableId: string;
    };
    /**
     * 账单配置信息。
     */
    BillingConfig: {
        /**
         * NAT网关实例的计费类型。取值：
         * - **PayBySpec**：按固定规格计费。
         * - **PayByLcu**：按使用量计费。
         * @example `PayBySpec`
         */
        InternetChargeType: string;
        /**
         * 是否自动付费，当**InstanceChargeType**参数的值为**PrePaid**时，返回以下值：
         * - **false**：不开启自动付费，生成订单后需要到订单中心完成支付。
         * - **true**：开启自动付费，自动支付订单。
         * 当**InstanceChargeType**参数的值为**PostPaid**时，返回值为空。
         * @example `false`
         */
        AutoPay: string;
        /**
         * 公网NAT网关实例的规格，且当**InternetChargeType**为**PayBySpec**时，返回以下值：
         * - **Small**：小型。
         * - **Middle**：中型。
         * - **Large**：大型。
         * 当**InternetChargeType**为**PayByLcu**时，返回值为空。
         * @example `Small`
         */
        Spec: string;
        /**
         * <props="china">NAT网关实例的付费模式，取值：</props>
         * <props="china">- **PostPaid**：按量付费。</props>
         * <props="china">- **PrePaid**：包年包月。</props>
         * <props="intl">NAT网关实例的付费模式，取值：**PostPaid**（按量付费）。</props>
         * @example `PostPaid`
         */
        InstanceChargeType: string;
    };
    /**
     * NAT网关实例的私网信息。
     */
    PrivateInfo: {
        /**
         * 最大带宽值，单位为Mbps。
         * @example `5120`
         */
        MaxBandwidth: number;
        /**
         * NAT网关实例所属的交换机ID。
         * @example `vsw-bp1s2laxhdf9ayjbo***`
         */
        VswitchId: string;
        /**
         * 私网IP地址。
         * @example `192.168.XX.XX`
         */
        PrivateIpAddress: string;
        /**
         * NAT网关实例所属的可用区。
         * @example `cn-qingdao-b`
         */
        IzNo: string;
        /**
         * 弹性网卡实例ID。
         * @example `eni-bp1cmgtoaka8vfyg****`
         */
        EniInstanceId: string;
    };
    /**
     * 删除保护信息。
     */
    DeletionProtectionInfo: {
        /**
         * 是否开启删除保护功能。
         * - **true**：开启了删除保护功能。
         * - **false**：未开启删除保护功能。
         * @example `true`
         */
        Enabled: boolean;
    };
    /**
     * 公网NAT网关绑定的弹性公网IP列表。
     */
    IpList: {
        /**
         * 公网NAT网关实例绑定的弹性公网IP的关联关系。
         * - **idle**：弹性公网IP未关联SNAT条目或DNAT条目。
         * - **UsedBySnatTable**：弹性公网IP已关联SNAT条目。
         * - **UsedByForwardTable**：弹性公网IP已关联DNAT条目。
         * @example `idle`
         */
        UsingStatus: string;
        /**
         * 弹性公网IP的地址。
         * @example `116.33.XX.XX`
         */
        IpAddress: string;
        /**
         * 弹性公网IP的实例ID。
         * @example `eip-bp13e9i2qst4g6jzi****`
         */
        AllocationId: string;
    }[];
    /**
     * 是否支持私网连接，取值：
     * - **true**：支持私网连接。
     * - **false**：不支持私网连接。
     * @example `true`
     */
    PrivateLinkEnabled: boolean;
    /**
     * 私网连接服务转化模式，取值：
     * - **FullNat**：使用FULLNAT模式。
     * - **Geneve**：使用Geneve模式。
     * @example `FullNat`
     */
    PrivateLinkMode: string;
    /**
     * 是否开启会话日志，取值：
     * - **true**：已开启会话日志。
     * - **false**：已关闭会话日志。
     * @example `true`
     */
    EnableSessionLog: boolean;
    /**
     * 会话日志配置信息。
     */
    LogDelivery: {
        /**
         * 会话日志投递目的类型。取值：
         * **sls**，阿里云日志服务SLS。
         * @example `sls`
         */
        LogDeliveryType: string;
        /**
         * 会话日志写入目的地址。
         * @example `acs:log:cn-hangzhou:0000:project/nat_session_log_project/logstore/session_log_test`
         */
        LogDestination: string;
        /**
         * 会话日志写入状态。取值：
         * - **Succsess**：成功。
         * - **Failure**：失败。
         * @example `Failure`
         */
        DeliveryStatus: string;
        /**
         * 会话日志写入失败的错误信息。
         * @example `LogStoreNotExist: logstore session_log_test does not exist`
         */
        DeliverLogsErrorMessage: string;
    };
}
