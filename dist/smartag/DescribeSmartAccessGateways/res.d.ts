export interface DescribeSmartAccessGatewaysResponse {
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `ADE68CEE-8E4F-4D0B-9EE9-2C2FFAABF41F`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    SmartAccessGateways: {
        /**
         * 智能接入网关实例信息列表。
         */
        SmartAccessGateway: {
            /**
             * 智能接入网关设备的序列号。
             * @example `sage6gsdllbid****,sage6nniq3dqa****`
             */
            SerialNumber: string;
            /**
             * 智能接入网关实例的状态。
             * - **Ordered**：已下单。
             * - **Delivered**：已发货。
             *
             * - **Received**：已收货。
             * - **Returning**：退货中。
             * - **Active**：活跃。
             * - **Init**：初始化。
             * - **Offline**：离线。
             * @example `Active`
             */
            Status: string;
            /**
             * 智能接入网关设备4G公网最大上行带宽。单位：Mbps。
             * @example `3`
             */
            UpBandwidth4G: number;
            /**
             * 智能接入网关的备份状态。
             * 取值：
             * - **closed**：未开启。
             * - **opened**：已开启。
             * - **opening**：开启中。
             * @example `Active`
             */
            BackupStatus: string;
            /**
             * 智能接入网关实例关联的IDaaS应用ID。
             * @example `idaas-cn-hangzhou-l7j0wf0crzea****`
             */
            IdaasApplicationId: string;
            /**
             * 智能接入网关主设备运行的软件版本。
             * @example `2.3.0.0`
             */
            SoftwareVersion: string;
            /**
             * 智能接入网关实例的创建时间戳。单位：毫秒。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建智能接入网关实例时的总时长。
             * @example `1622617250000`
             */
            CreateTime: number;
            /**
             * 智能接入网关实例ID。
             * @example `sag-6z21oj0vjjrx6s****`
             */
            SmartAGId: string;
            /**
             * 智能接入网关设备WAN口最大上行带宽。单位：Mbps。
             * @example `2`
             */
            UpBandwidthWan: number;
            /**
             * 智能接入网关设备所在城市ID。
             * @example `cn-shanghai`
             */
            City: string;
            /**
             * 智能接入网关实例绑定的访问控制实例ID。
             * @example `acl-shfhfhhfbnvkdg****`
             */
            AclIds: string;
            /**
             * 智能接入网关实例绑定的QoS策略实例ID。
             * @example `qos-djh****`
             */
            QosIds: string;
            /**
             * 智能接入网关实例关联的智能选路ID列表
             * @example `ir-7unf5nom01ygrg****`
             */
            IRIds: string;
            /**
             * 本地网络或客户端要与云上通信的私网网段。
             * @example `10.0.9.0/24`
             */
            CidrBlock: string;
            /**
             * 智能接入网关实例的描述信息。
             * @example `docdesc`
             */
            Description: string;
            /**
             * ipsecVPN连接状态。
             * - **up**：ipsecVPN连接正常。
             * - **down**：ipsecVPN连接异常。
             * @example `up`
             */
            IpsecStatus: string;
            /**
             * 智能接入网关实例绑定的企业码ID。
             * @example `12P****`
             */
            EnterpriseCode: string;
            /**
             * 智能接入网关实例DPI功能开启状态。
             * - **On**：已开启。
             * - **Off**：未开启。
             * @example `Off`
             */
            DpiStatus: string;
            /**
             * 智能接入网关实例绑定的云连接网实例ID。
             * @example `ccn-iz26o9zye6lhoo****`
             */
            AssociatedCcnId: string;
            /**
             * 智能接入网关实例的名称。
             * @example `testname`
             */
            Name: string;
            /**
             * 智能接入网关实例类型。
             * - **sag-1000**：标识当前实例为智能接入网关硬件版实例，且实例绑定的设备类型为SAG-1000。
             * - **sag-100wm**：标识当前实例为智能接入网关硬件版实例，且实例绑定的设备类型为SAG-100WM。
             * - **sag-software**：标识当前实例为智能接入网关APP实例。
             * - **sag-vcpe**：标识当前实例为智能接入网关vCPE实例。
             * @example `sag-100wm`
             */
            HardwareVersion: string;
            /**
             * 智能接入网关实例绑定的IDaaS实例ID。
             * @example `idaas-cn-hangzhou-1ahixtl****`
             */
            IdaasId: string;
            /**
             * 智能接入网关实例的流量套餐。单位：GB。
             * > 目前仅支持每个账号每个月赠送5 GB流量。
             * @example `5`
             */
            DataPlan: number;
            /**
             * 智能接入网关实例绑定的云连接网实例名称。
             * @example `ccn`
             */
            AssociatedCcnName: string;
            /**
             * 经销商的阿里云账号ID。
             * @example `25346073170691****`
             */
            ResellerUid: string;
            /**
             * 智能接入网关实例DPI监控功能开启状态。
             * - **Active**：已开启。
             * - **Inactive**：未开启。
             * @example `Inactive`
             */
            DpiMonitorStatus: string;
            /**
             * 智能接入网关实例的带宽峰值。单位：Mbps。
             * @example `50M`
             */
            MaxBandwidth: string;
            /**
             * 智能接入网关实例的所属的账号ID。
             * @example `1210123456123456`
             */
            SmartAGUid: number;
            /**
             * 智能接入网关备设备运行的软件版本。
             * @example `2.3.0.0`
             */
            BackupSoftwareVersion: string;
            /**
             * 智能接入网关实例的到期时间戳。单位：毫秒。
             * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至智能接入网关实例到期时的总时长。
             * @example `1628265600000`
             */
            EndTime: number;
            /**
             * 经销商智能接入网关实例ID。
             * @example `sag-v0fkpk4akfz5****`
             */
            ResellerInstanceId: string;
            /**
             * aliVPN连接状态。
             * - **up**：aliVPN连接正常。
             * - **down**：aliVPN连接异常。
             * @example `down`
             */
            VpnStatus: string;
            /**
             * 智能接入网关实例的线下路由同步方式。
             * - **static**：静态路由。
             * - **dynamic**：动态路由。
             * @example `static`
             */
            RoutingStrategy: string;
            /**
             * 智能接入网关设备离线锁定的时间阈值。
             * 单位：秒。
             * @example `3600`
             */
            SecurityLockThreshold: number;
            Links: {
                /**
                 * 本地网络接入阿里云的链路信息列表。
                 */
                Link: {
                    /**
                     * 链路类型。
                     * - **ccn**：表示本地网络通过云连接网接入阿里云。
                     * - **vbr**：表示本地网络通过边界路由器及物理专线接入阿里云。
                     * @example `ccn`
                     */
                    Type: string;
                    /**
                     * 链路状态。
                     * 宽带链路状态：
                     * - **Ordered**：待发货。
                     * - **Delivered**：已发货。
                     * - **Offline**：离线。
                     * - **Active**：可用。
                     * - **Arrearage**：欠费锁定。
                     * 物理专线链路状态：
                     * - **normal**：正常。
                     * - **arrears**：欠费。
                     * @example `Active`
                     */
                    Status: string;
                    /**
                     * 链路到期时间戳。单位：毫秒。
                     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至链路到期时的总时长。
                     * @example `1628265600000`
                     */
                    EndTime: number;
                    /**
                     * 链路带宽值。单位：Mbps。
                     * @example `50M`
                     */
                    Bandwidth: string;
                    /**
                     * 链路相关实例所在的地域ID。
                     * @example `cn-shanghai`
                     */
                    RelateInstanceRegionId: string;
                    /**
                     * 链路相关实例ID。
                     * @example `ccn-iz26o9zye6lhoo****`
                     */
                    RelateInstanceId: string;
                    /**
                     * 商品实例ID。
                     * @example `sag-6z21oj0vjjrx6s****`
                     */
                    InstanceId: string;
                    /**
                     * 链路带宽的商品类型。
                     * - **bandwidth**：表示智能接入网关和带宽为拆分售卖类型。
                     * - **smartag**：表示智能接入网关和带宽为组合售卖类型。
                     * @example `smartag`
                     */
                    CommodityType: string;
                }[];
            };
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
             * 智能接入网关实例接入点ID。
             * @example `238`
             */
            AccessPointId: string;
            /**
             * 智能接入网关实例绑定的应用加速带宽包ID。
             * @example `abwp-7963l7iqnquyj3****`
             */
            ApplicationBandwidthPackageId: string;
            /**
             * 智能接入网关实例的应用加速带宽峰值。单位：Mbps。
             * @example `1`
             */
            AccelerateBandwidth: number;
            /**
             * 是否已开启SAG App连接日志审计。取值：
             * - **true**：已开启SAG App连接日志审计。
             * - **false**：未开启SAG App连接日志审计。
             * @example `true`
             */
            EnableSoftwareConnectionAudit: boolean;
            /**
             * 智能接入网关实例位置信息。
             * @example `[{\"adcode\":\"\",\"label\":\"山东省青岛市即墨区\",\"value\":\"B02140800T\",\"center\":\"120.989576,36.487512\",\"_new\":\"true\"}]`
             */
            Position: string;
            /**
             * 智能接入网关实例使用的运营商名字。
             * @example `电信`
             */
            Isp: string;
            /**
             * 智能接入网关实例是否已开启深度监控。取值：
             * - **true**：已开启。
             * - **false**：未开启。
             * @example `true`
             */
            EnableAdvancedMonitor: boolean;
        }[];
    };
}
