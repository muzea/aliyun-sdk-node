export interface DescribeRouterInterfaceAttributeResponse {
    /**
     * 续费生效时间。
     * @example `2022-06-11T16:00:00Z`
     */
    ReservationActiveTime: string;
    /**
     * 健康检查目标IP。
     * @example `2.2.XX.XX`
     */
    HealthCheckTargetIp: string;
    /**
     * 路由器接口的状态。取值：
     * - **Idle**：未连接
     * - **AcceptingConnecting**：接受连接中
     * - **Connecting**： 连接中
     * - **Activating**：激活中
     * - **Active**：已激活
     * - **Modifying**： 修改中
     * - **Deactivating**：冻结中
     * - **Inactive**：已冻结
     * - **Deleting**：删除中
     * @example `Active`
     */
    Status: string;
    /**
     * 路由器接口创建的时间。
     * @example `2022-04-14T08:57:24Z`
     */
    CreationTime: string;
    /**
     * 续费订单类型。取值：**RENEW**，表示续费订单。
     * @example `RENEW`
     */
    ReservationOrderType: string;
    /**
     * 对端路由器接口ID。
     * @example `ri-bp1xkrzttximaoxbl****`
     */
    OppositeInterfaceId: string;
    /**
     * 路由器接口的规格。取值：
     * - **Mini.2**：2 Mbps
     * - **Mini.5**：5 Mbps
     * - **Small.1**：10 Mbps
     * - **Small.2**：20 Mbps
     * - **Small.5**：50 Mbps
     * - **Middle.1**：100 Mbps
     * - **Middle.2**：200 Mbps
     * - **Middle.5**：500 Mbps
     * - **Large.1**：1000 Mbps
     * - **Large.2**：2000 Mbps
     * - **Large.5**：5000 Mbps
     * - **Xlarge.1**：10000 Mbps
     * @example `Mini.2`
     */
    Spec: string;
    /**
     * 付费方式。取值：
     * - **AfterPay**：后付费
     * - **PrePaid**：预付费
     * @example `AfterPay`
     */
    ChargeType: string;
    /**
     * 路由器接口的ID。
     * @example `ri-m5egfc10sednwk2yt****`
     */
    RouterInterfaceId: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 健康检查阈值。表示指定健康检查时发送探测报文的个数。单位：个。
     * @example `8`
     */
    HcThreshold: number;
    /**
     * 连接对端的路由器接口所属的路由器类型。取值：
     * - **VRouter**：VPC路由器
     * - **VBR**：边界路由器
     * @example `VRouter`
     */
    OppositeRouterType: string;
    /**
     * 路由器接口修改的时间点。
     * @example `2022-04-28T10:02:12Z`
     */
    GmtModified: string;
    /**
     * 路由器接口所属的专有网络ID。
     * @example `vpc-bp1b49rqrybk45nio****`
     */
    VpcInstanceId: string;
    /**
     * 对端路由器接口的账号ID。
     * @example `1321932713****`
     */
    OppositeInterfaceOwnerId: string;
    /**
     * 对端的VPC ID。
     * @example `vpc-bp1b49rqrybk45nio****`
     */
    OppositeVpcInstanceId: string;
    /**
     * 续费付费类型。取值：**PayByBandwidth**，表示按使用带宽付费。
     * @example `PayByBandwidth`
     */
    ReservationInternetChargeType: string;
    /**
     * 是否是跨境连接。取值：
     * - **false**：不是
     * - **true**：是
     * @example `false`
     */
    CrossBorder: boolean;
    /**
     * 请求ID。
     * @example `01818199-04F6-47F4-9ADF-7CC824CF57A4`
     */
    RequestId: string;
    /**
     * 路由器接口带宽。单位：Mbps。
     * @example `2`
     */
    Bandwidth: number;
    /**
     * 路由器接口描述。
     * @example `对端接口`
     */
    Description: string;
    /**
     * 健康检查速率。单位：秒。表示指定健康检查时发送连续探测报文的时间间隔。
     * @example `2`
     */
    HcRate: number;
    /**
     * 续费带宽。单位：Mbps。
     * @example `100`
     */
    ReservationBandwidth: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 路由器接口名称。
     * @example `路由器接口1`
     */
    Name: string;
    /**
     * 连接对端的路由器接口所属的路由器ID。
     * @example `vrt-bp11xvy6lb9photuu****`
     */
    OppositeRouterId: string;
    /**
     * 连接对端路由器接口的规格。取值：
     * - **Mini.2**：2 Mbps
     * - **Mini.5**：5 Mbps
     * - **Small.1**：10 Mbps
     * - **Small.2**：20 Mbps
     * - **Small.5**：50 Mbps
     * - **Middle.1**：100 Mbps
     * - **Middle.2**：200 Mbps
     * - **Middle.5**：500 Mbps
     * - **Large.1**：1000 Mbps
     * - **Large.2**：2000 Mbps
     * - **Large.5**：5000 Mbps
     * - **Xlarge.1**：10000 Mbps
     * - **Negative**：不涉及规格
     * @example `Negative`
     */
    OppositeInterfaceSpec: string;
    /**
     * 路由器接口所属的路由器ID。
     * @example `vbr-m5ex0xf63xk8s5bob****`
     */
    RouterId: string;
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 连接对端的路由器接口的业务状态。取值：
     * - **Normal**：正常
     * - **FinancialLocked**：欠费锁定
     * - **SecurityLocked**：安全风控锁定
     * @example `Normal`
     */
    OppositeInterfaceBusinessStatus: string;
    /**
     * 连接建立的时间。
     * @example `2022-04-14T08:58:04Z`
     */
    ConnectedTime: string;
    /**
     * 健康检查源IP。
     * @example `1.1.XX.XX`
     */
    HealthCheckSourceIp: string;
    /**
     * 连接对端的路由器接口的状态。取值：
     * - **Idle**：未连接
     * - **AcceptingConnecting**：接受连接中
     * - **Connecting**： 连接中
     * - **Activating**：激活中
     * - **Active**：已激活
     * - **Modifying**： 修改中
     * - **Deactivating**：冻结中
     * - **Inactive**：已冻结
     * - **Deleting**：删除中
     * - **Deleted**：已删除
     * @example `Active`
     */
    OppositeInterfaceStatus: string;
    /**
     * 获取数据的结束时间点。
     * @example `2999-09-08T16:00:00Z`
     */
    EndTime: string;
    /**
     * 连接对端路由器接口的地域ID。
     * @example `cn-hangzhou`
     */
    OppositeRegionId: string;
    /**
     * 对端接入点ID。
     * @example `ap-cn-qingdao-ls-B`
     */
    OppositeAccessPointId: string;
    /**
     * 路由器接口状态。取值：
     * - **Normal**：正常
     * - **FinancialLocked**：欠费锁定
     * - **SecurityLocked**：安全风控锁定
     * @example `Normal`
     */
    BusinessStatus: string;
    /**
     * 健康检查状态。取值：
     * - **Abnormal**：状态异常
     * - **Normal**：正常
     * - **NoRedundantRoute**：未配置冗余路由
     * - **NoHealthCheckConfig**：未配置健康检查
     * @example `normal`
     */
    HealthCheckStatus: string;
    /**
     * 对端带宽。单位：Mbps。
     * @example `0`
     */
    OppositeBandwidth: number;
    /**
     * 路由表所在路由器的类型。取值：
     * - **VRouter**：VPC路由器
     * - **VBR**：边界路由器
     * @example `VRouter`
     */
    RouterType: string;
    /**
     * 对等连接中的角色。
     * @example `InitiatingSide`
     */
    Role: string;
    /**
     * 是否有续费数据。取值：
     * - **false**：没有
     * - **true**：有
     * @example `false`
     */
    HasReservationData: string;
    /**
     * 接入点ID。
     * @example `ap-cn-qingdao-ls-A`
     */
    AccessPointId: string;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    ResourceGroupId: string;
    Tags: {
        /**
         * 资源的标签。
         */
        Tags: {
            /**
             * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
             * 一个标签键最多支持64个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
             * 最多支持128个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    };
    /**
     * 是否为使用快速连接模式创建的VBR上联路由器接口，快速连接模式可实现VBR和VPC两端路由器接口创建完毕后自动完成连接。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * > -  该参数只在**RouterType**取值为**VBR**，**OppositeRouterType**参数取值为**VRouter**时生效。
     * - 当**FastLinkMode**参数取值为**true**时，**Role**参数必须取值为**InitiatingSide**，**AccessPointId**、**OppositeRouterType**、**OpppsiteRouterId**和**OppositeInterfaceOwnerId**参数为必选。
     * @example `false`
     */
    FastLinkMode: string;
}
