export interface DescribeAcceleratorResponse {
    /**
     * 与全球加速实例绑定的DDoS高防实例ID。
     * @example `ddoscoo-cn-zz11vq7j****`
     */
    DdosId: string;
    /**
     * 全球加速实例分配的CNAME地址。
     * @example `ga-bp15u1i2hmtbk8c3i****.aliyunga0019.com`
     */
    DnsName: string;
    /**
     * 全球加速实例的描述信息。
     * @example `Accelerator`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8	`
     */
    RequestId: string;
    /**
     * 全球加速实例的计费方式。
     * @example `PREPAY`
     */
    InstanceChargeType: string;
    /**
     * 全球加速实例创建时间的时间戳。
     * @example `1650643200`
     */
    CreateTime: number;
    /**
     * 全球加速实例绑定的跨地域加速包的详情。
     * 仅国际站支持返回该数组。
     */
    CrossDomainBandwidthPackage: {
        /**
         * 跨地域加速包的带宽值，单位：Mbps。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 跨地域加速包的实例ID。
         * @example `gbwp-bp1d8xk8bg139j0fw****`
         */
        InstanceId: string;
    };
    /**
     * 全球加速联动DDoS高防实例的CNAME。
     * @example `ga-bp1f609c76zg6zuna****-1.aliyunga0047.com`
     */
    SecondDnsName: string;
    /**
     * 全球加速实例的名称。
     * @example `Accelerator`
     */
    Name: string;
    /**
     * 全球加速实例绑定的基础带宽包的详情。
     */
    BasicBandwidthPackage: {
        /**
         * 基础带宽包的带宽值。单位：Mbps。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 基础带宽包的带宽类型。取值：
         * - **Basic**：标准加速带宽。
         * - **Enhanced**：增强加速带宽。
         * - **Advanced**：精品加速带宽。
         * @example `Basic`
         */
        BandwidthType: string;
        /**
         * 基础带宽包的实例ID。
         * @example `gbwp-bp1d8xk8bg139j0fw****`
         */
        InstanceId: string;
    };
    /**
     * 全球加速实例的状态。取值：
     * - **init**：初始化。
     * - **active**：可用。
     * - **configuring**：配置中。
     * - **binding**：绑定中。
     * - **unbinding**：解绑中。
     * - **deleting**：删除中。
     * - **finacialLocked**：欠费锁定。
     * @example `active`
     */
    State: string;
    /**
     * 全球加速实例到期时间的时间戳。
     * @example `1653235200`
     */
    ExpiredTime: number;
    /**
     * 全球加速实例绑定的云企业网实例ID。
     * @example `cen-hjkduu767hc****`
     */
    CenId: string;
    /**
     * 全球加速实例所在的地域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 全球加速实例的规格，取值：
     * - **1**：小型Ⅰ。
     * - **2**：小型Ⅱ。
     * - **3**：小型Ⅲ。
     * - **5**：中型Ⅰ。
     * - **8**：中型Ⅱ。
     * - **10**：中型Ⅲ。
     * - **20**：大型Ⅰ。
     * - **30**：大型Ⅱ。
     * - **40**：大型Ⅲ。
     * - **50**：大型IV。
     * - **60**：大型V。
     * - **70**：大型VI。
     * - **80**：大型VII。
     * - **90**：大型VIII。
     * - **100**：超大型Ⅰ。
     * - **200**：超大型Ⅱ。
     * > 目前，大型Ⅲ及以上规格仅白名单开放。如需使用，请联系阿里云客户经理。
     * 实例规格不同，定义也不同。更多信息，请参见[实例规格](~~153127~~)。
     * @example `1`
     */
    Spec: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    AcceleratorId: string;
    /**
     * 带宽计费方式。取值：
     * - **BandwidthPackage**：按带宽包计费。
     * - **CDT**：按流量计费。
     * @example `CDT`
     */
    BandwidthBillingType: string;
    /**
     * 加速区域配置。
     */
    IpSetConfig: {
        /**
         * 加速区域接入模式。取值：
         * - **UserDefine**：自定义就近接入模式。您可以根据业务需要，定向选择加速区域和地域，全球加速为每个加速地域提供独立的EIP。
         * - **Anycast**：采用自动就近接入模式。您无需配置加速区域。全球加速在全球多地域提供一个Anycast EIP，用户可通过Anycast EIP从就近接入点进入阿里云加速网络。
         * @example `UserDefine`
         */
        AccessMode: string;
    };
    /**
     * 是否开启了跨地域带宽跨境。
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    CrossPrivateState: string;
    /**
     * 资源组ID。
     * @example `rg-acfmw2vwdbujqbq`
     */
    ResourceGroupId: string;
    /**
     * 资源标签。
     */
    Tags: {
        /**
         * 标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * 用于带宽计费方式为按流量计费（CDT）的实例，显示其跨境加速类型，取值：
     * **bpgPro**：精品带宽跨境加速。
     * @example `bpgPro`
     */
    CrossBorderMode: string;
    /**
     * 全球加速实例是否开启跨境线路功能。取值：
     * - **true**：开启跨境线路功能，可以加速跨境线路。
     * - **false**：关闭跨境线路功能，不可以加速跨境线路。
     * @example `false`
     */
    CrossBorderStatus: boolean;
    /**
     * 全球加速实例的可升级状态。取值：
     * - **notUpgradable**：当前实例不需要升级。
     * - **upgradable**：当前实例可升级至最新版本。
     * - **upgradeFailed**：当前实例执行过升级操作且升级失败。
     * @example `notUpgradable`
     */
    UpgradableStatus: string;
    /**
     * 托管实例所属的服务方ID。
     * > 仅在**ServiceManaged**参数为**True**时有效。
     * @example `ALB`
     */
    ServiceId: string;
    /**
     * 是否为托管实例。取值：
     * - **true**：是托管实例。
     * - **false**：不是托管实例。
     * @example `true`
     */
    ServiceManaged: boolean;
    /**
     * 用户在此托管实例下可执行的动作策略列表。
     * > 仅在**ServiceManaged**参数为**True**时有效。
     * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
     */
    ServiceManagedInfos: {
        /**
         * 托管策略动作名称，取值：
         * - **Create**：创建实例。
         * - **Update**：更新当前实例。
         * - **Delete**：删除当前实例。
         * - **Associate**：引用/被引用当前实例。
         * - **UserUnmanaged**：用户解托管实例。
         * - **CreateChild**：在当前实例下创建子资源。
         * @example `Update`
         */
        Action: string;
        /**
         * 子资源类型，取值：
         * - **Listener**：监听资源。
         * - **IpSet**：加速地域资源。
         * - **EndpointGroup**：终端节点组资源。
         * - **ForwardingRule**：转发策略资源。
         * - **Endpoint**：终端节点资源。
         * - **EndpointGroupDestination**：自定义路由监听下的终端节点组协议映射资源。
         * - **EndpointPolicy**：自定义路由监听下的终端节点通行策略资源。
         * > 仅在**Action**参数为**CreateChild**时有效。
         * @example `Listener`
         */
        ChildType: string;
        /**
         * 托管策略动作是否被托管，取值：
         * - **true**：托管策略动作被托管，用户无权在托管实例下执行Action指定的操作。
         * - **false**：托管策略动作未被托管，用户可在托管实例下执行Action指定的操作。
         * @example `false`
         */
        IsManaged: boolean;
    }[];
}
