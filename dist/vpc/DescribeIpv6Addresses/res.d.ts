export interface DescribeIpv6AddressesResponse {
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `AA4486A8-B6AE-469E-AB09-820EF8ECFA2B`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: number;
    Ipv6Addresses: {
        /**
         * IPv6地址的详细信息。
         */
        Ipv6Address: {
            /**
             * IPv6地址所在的VPC ID。
             * @example `vpc-bp15zckdt37pq72zv****`
             */
            VpcId: string;
            /**
             * IPv6地址的状态，取值：
             * - **Pending**：配置中。
             * - **Available**：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * IPv6地址的实例ID。
             * @example `ipv6-2zen5j4axcp5l5qyy****`
             */
            Ipv6AddressId: string;
            /**
             * IPv6地址的创建时间。
             * @example `2020-12-20T14:56:09Z`
             */
            AllocationTime: string;
            /**
             * IPv6地址的实例名称。
             * @example `test`
             */
            Ipv6AddressName: string;
            /**
             * IPv6地址的实例描述。
             * @example `test`
             */
            Ipv6AddressDescription: string;
            /**
             * IPv6地址关联的实例类型。
             * @example `EcsInstance`
             */
            AssociatedInstanceType: string;
            /**
             * IPv6地址关联的实例ID。
             * @example `i-2ze72wuqj4y3jl4f****`
             */
            AssociatedInstanceId: string;
            /**
             * IPv6地址的通信能力类型，取值：
             * - **Private**：私网通信类型。
             * - **Public**：公网通信类型 。
             * @example `Private`
             */
            NetworkType: string;
            /**
             * IPv6地址。
             * @example `2408:XXXX:153:3921:851c:c435:7b12:1c5f`
             */
            Ipv6Address: string;
            AddressType: string;
            /**
             * IPv6地址的服务运营商，取值：
             * - **BGP**（默认值）：阿里云BGP IPv6。
             * - **ChinaMobile**：中国移动（单线）。
             * - **ChinaUnicom**：中国联通（单线）。
             * - **ChinaTelecom**：中国电信（单线）。
             * @example `BGP`
             */
            Ipv6Isp: string;
            /**
             * IPv6地址所在的交换机的ID。
             * @example `vsw-25navfgbue4g****`
             */
            VSwitchId: string;
            /**
             * IPv6地址的所属IPv6网关实例ID。
             * @example `ipv6gw-2zewg0l66s73b4k2q****`
             */
            Ipv6GatewayId: string;
            /**
             * IPv6地址的实际带宽峰值。
             * @example `5`
             */
            RealBandwidth: number;
            /**
             * IPv6地址的公网带宽信息。
             */
            Ipv6InternetBandwidth: {
                /**
                 * IPv6地址的公网带宽的计费方式，取值：
                 * <props="china">
                 * - **PayByTraffic**：按使用流量计费。
                 * - **PayByBandwidth**：按固定带宽计费。
                 * - **PayByOld95**：表示按传统95计费。IPv6公网带宽默认不支持按传统95计费，如需使用，请联系客户经理申请。
                 * </props>
                 * <props="intl">
                 * - **PayByTraffic**：按使用流量计费。
                 * - **PayByBandwidth**：按固定带宽计费。
                 * </props>
                 * @example `PayByTraffic`
                 */
                InternetChargeType: string;
                /**
                 * IPv6地址的公网带宽的商业状态，取值：
                 * - **Normal**：正常。
                 * - **FinancialLocked**：欠费锁定。
                 * - **SecurityLocked**：安全锁定。
                 * @example `Normal`
                 */
                BusinessStatus: string;
                /**
                 * IPv6地址的独享公网带宽，单位：Mbps。
                 * @example `5`
                 */
                Bandwidth: number;
                /**
                 * IPv6地址的公网带宽实例ID。
                 * @example `ipv6bw-hp3b35oq1fj50kbv****`
                 */
                Ipv6InternetBandwidthId: string;
                /**
                 * IPv6地址的公网带宽的付费方式，取值：
                 * **PostPaid**：后付费。
                 * @example `PostPaid`
                 */
                InstanceChargeType: string;
                /**
                 * 是否有续费数据。
                 * - **false**：无续费数据。
                 * - **true**：有续费数据。只有在入参**IncludeReservationData**为**true**，且有未生效订购数据时才会为**true**。
                 * @example `false`
                 */
                HasReservationData: boolean;
                /**
                 * 续费付费类型。
                 * <props="china">
                 * - **PayByTraffic**：按使用流量计费。
                 * - **PayByBandwidth**：按固定带宽计费。
                 * - **PayByOld95**：按传统95计费。IPv6公网带宽默认不支持按传统95计费，如需使用，请联系客户经理申请。
                 * </props>
                 * <props="intl">
                 * - **PayByTraffic**：按使用流量计费。
                 * - **PayByBandwidth**：按固定带宽计费。
                 * </props>
                 * @example `PayByTraffic`
                 */
                ReservationInternetChargeType: string;
                /**
                 * 续费订单类型。取值：**RENEW**，表示续费订单。
                 * @example `RENEW`
                 */
                ReservationOrderType: string;
                /**
                 * 续费生效时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
                 * @example `2021-05-23T16:00:00Z`
                 */
                ReservationActiveTime: string;
                /**
                 * 续费带宽。单位：Mbps。
                 * @example `12`
                 */
                ReservationBandwidth: number;
            };
            /**
             * IPv6网关所属的资源组ID。
             * @example `rg-bp67acfmxazb4ph****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
                     * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * 标签的标签值。
                     * 标签值最多支持128个字符，可以为空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
                     * 一个标签键对应一个标签值。一次最多支持输入20个标签值。
                     * @example `yunke`
                     */
                    Value: string;
                }[];
            };
            /**
             * 是否为托管实例。取值：
             * - **1**：是托管实例。
             * - **0**：不是托管实例。
             * @example `1`
             */
            ServiceManaged: number;
        }[];
    };
}
