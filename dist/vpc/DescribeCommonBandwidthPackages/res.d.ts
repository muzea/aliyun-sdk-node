export interface DescribeCommonBandwidthPackagesResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `20E6FD1C-7321-4DAD-BDFD-EC8769E4AA33`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    CommonBandwidthPackages: {
        /**
         * 共享带宽的详细信息。
         */
        CommonBandwidthPackage: {
            /**
             * 续费生效时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2018-08-30T16:00:00Z`
             */
            ReservationActiveTime: string;
            /**
             * 共享带宽实例的状态。
             * - **Available**：可用。
             * - **Modifying**：修改中。
             * @example `Available`
             */
            Status: string;
            /**
             * 共享带宽实例创建的时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2017-06-28T06:39:20Z`
             */
            CreationTime: string;
            /**
             * 续费变配方式。
             * - **RENEWCHANGE**：续费变配。
             * - **TEMP_UPGRADE**：短时升配。
             * - **UPGRADE**：升级。
             * @example `RENEWCHANGE`
             */
            ReservationOrderType: string;
            /**
             * 是否开启删除保护。
             * - **true**：开启。
             * - **false**：关闭。
             * @example `true`
             */
            DeletionProtection: boolean;
            /**
             * 变配之后的计费方式。
             * <props="china">
             * - **PayBy95**：按增强型95计费。
             * - **PayByBandwidth**：按带宽计费。
             * - **PayByDominantTraffic**：按主流量计费。
             * </props>
             * <props="intl">**PayByTraffic**：按流量计费。</props>
             * @example `PayByBandwidth`
             */
            ReservationInternetChargeType: string;
            /**
             * 共享带宽的保底百分比，仅返回：**20**。
             *  <props="china"><ph>当**InternetChargeType**取值**PayBy95**时返回该参数。</ph></props>
             * >仅中国站支持该参数。
             * @example `20`
             */
            Ratio: number;
            /**
             * 共享带宽实例的计费类型。
             * <props="china">
             * - **PostPaid**：按量计费。
             * -  **PrePaid**：包年包月。
             * </props>
             * <props="intl"><ph>**PostPaid**：按量计费。</ph></props>
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * 共享带宽实例所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             *  共享带宽的ID。
             * @example `cbwp-bp1t3sm1ffzmshdki****`
             */
            BandwidthPackageId: string;
            /**
             * 是否为服务账号创建的资源。
             * - **0**：非服务账号创建。
             * - **1**：服务账号创建。
             * @example `1`
             */
            ServiceManaged: number;
            /**
             *  共享带宽的带宽峰值， 单位：Mbps。
             * @example `20`
             */
            Bandwidth: string;
            /**
             *  共享带宽的描述信息。
             * @example `none`
             */
            Description: string;
            /**
             * 共享带宽实例的过期时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2019-01-15T03:08:37Z`
             */
            ExpiredTime: string;
            /**
             * 变配之后的带宽值， 单位：Mbps。
             * @example `1000`
             */
            ReservationBandwidth: string;
            /**
             * 资源组ID。
             * @example `rg-acfmxazb4ph****`
             */
            ResourceGroupId: string;
            /**
             * 共享带宽的计费方式。
             * <props="china">
             * - **PayBy95**：按增强型95计费。
             * - **PayByBandwidth**：按带宽计费。
             * - **PayByDominantTraffic**：按主流量计费。
             * </props>
             * <props="intl">**PayByTraffic**：按流量计费。</props>
             * @example `PayByBandwidth`
             */
            InternetChargeType: string;
            /**
             * 共享带宽实例的业务状态。
             * - **Normal**：正常状态。
             * - **FinancialLocked**：欠费。
             * - **Unactivated**：未激活。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             *  共享带宽的名称。
             * @example `abc`
             */
            Name: string;
            /**
             * 线路类型。
             * - **BGP**：BGP（多线）线路。目前全部地域都支持BGP（多线）线路。
             * - **BGP_PRO**：BGP（多线）\_精品线路。目前仅中国香港、新加坡、日本（东京）、菲律宾（马尼拉）、马来西亚（吉隆坡）、印度尼西亚（雅加达）和泰国（曼谷）地域支持BGP（多线）\_精品线路共享带宽。
             * 如果您是单线带宽的白名单用户，返回类型还可能为：
             * - **ChinaTelecom**：中国电信
             * - **ChinaUnicom**：中国联通
             * - **ChinaMobile**：中国移动
             * - **ChinaTelecom_L2**：中国电信L2
             * - **ChinaUnicom_L2**：中国联通L2
             * - **ChinaMobile_L2**：中国移动L2
             * 如果您是杭州金融云用户，返回**BGP_FinanceCloud**。
             * @example `BGP`
             */
            ISP: string;
            /**
             * 是否有待生效的订单。
             * - **false**：没有待生效的订单。
             * - **true**：有待生效的订单。
             * @example `false`
             */
            HasReservationData: string;
            PublicIpAddresses: {
                /**
                 * 共享带宽实例中的公网IP地址。
                 */
                PublicIpAddresse: {
                    /**
                     * 公网IP地址。
                     * @example `47.95.XX.XX`
                     */
                    IpAddress: string;
                    /**
                     * 公网IP的实例ID。
                     * @example `eip-bp13e9i2qst4g6jzi****`
                     */
                    AllocationId: string;
                    /**
                     * 共享带宽和EIP的关联状态。
                     * - **BINDED**：EIP与共享带宽关联完成。
                     * - **BINDING**：关联中。
                     * @example `BINDED`
                     */
                    BandwidthPackageIpRelationStatus: string;
                }[];
            };
            SecurityProtectionTypes: {
                /**
                 * 安全防护级别。
                 * - 返回为空时，表示默认的DDoS防护（基础版）。
                 * - 返回**AntiDDoS_Enhanced**时，表示DDoS防护（增强版）。
                 * > 该参数已废弃。
                 */
                SecurityProtectionType: string[];
            };
            Tags: {
                /**
                 * 共享带宽实例的标签列表。
                 */
                Tag: {
                    /**
                     * 共享带宽实例的标签键。
                     * @example `KeyTest`
                     */
                    Key: string;
                    /**
                     * 共享带宽实例的标签值。
                     * @example `ValueTest`
                     */
                    Value: string;
                }[];
            };
            /**
             * 共享带宽的业务类型。
             * - **CloudBox**：云盒。仅云盒用户支持该类型。
             * - **Default**（默认值）：默认，表示非特殊类型。
             * @example `CloudBox`
             */
            BizType: string;
            /**
             * 共享带宽的可用区。
             * 当可用区资源过载时，为保证服务稳定性，共享带宽可能会被调度至其他可用区。
             * @example `ap-southeast-1-lzdvn-cb`
             */
            Zone: string;
        }[];
    };
}
