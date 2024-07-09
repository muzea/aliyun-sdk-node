export interface RunInstancesRequest {
    /**
     * 实例规格。
     * @example `ens.sn1.small`
     */
    "InstanceType": string;
    /**
     * 实例付费方式。取值：
     * - **PrePaid**：预付费，包年包月。
     * - **PostPaid**：按量付费。
     * @example `PostPaid`
     */
    "InstanceChargeType": string;
    /**
     * 镜像ID。arm版卡不能填，其他类型规格必填。
     * @example `m-5si16wo6simkt267p8b7h****`
     */
    "ImageId"?: string;
    /**
     * 地区Code。
     * >区域级调度时必填，节点级调度时无效。
     * @example `350000`
     */
    "NetDistrictCode"?: string;
    /**
     * 运营商。
     * >区域级调度时必填，节点级调度时无效。
     * @example `telecom`
     */
    "Carrier"?: string;
    /**
     * 调度层级。通过该字段来执行节点级调度或者区域调度。取值：
     * - **Big**：大区
     * - **Middle**：省份
     * - **Small**：城市
     * - **Region**：节点
     * @example `Region`
     */
    "ScheduleAreaLevel": string;
    /**
     * 调度策略。取值：
     * - **Concentrate**：集中
     * - **Disperse**：分散
     * > 节点级调度时，为**Concentrate**；区域级调度时，按客户需求选择。
     * @example `Concentrate`
     */
    "SchedulingStrategy"?: string;
    /**
     * 节点ID。
     * > 节点级调度时必填，区域级调度时无效。
     * @example `cn-foshan-telecom`
     */
    "EnsRegionId"?: string;
    /**
     * 实例密码。
     * > **Password**、**KeyPairName**、**PasswordInherit**至少填入一个。
     * @example `testPassword`
     */
    "Password"?: string;
    /**
     * 密钥对名称。
     * > **Password**、**KeyPairName**、**PasswordInherit**至少填入一个。
     * @example `wx2-jumpserver`
     */
    "KeyPairName"?: string;
    /**
     * 带宽计费方式。取值：
     * - **BandwidthByDay**：日峰值带宽
     * - **95BandwidthByMonth**：月95峰值带宽
     * > 如果是第一次新购时可以进行选择计费方式，后续此字段值会根据第一次所选择的计费方式进行默认处理。
     * @example `BandwidthByDay`
     */
    "InternetChargeType"?: string;
    /**
     * 系统盘规格。
     */
    "SystemDisk"?: {
        /**
         * 系统盘大小，单位：GiB。
         * @example `50`
         */
        Size: number;
        /**
         * 系统盘类型。
         * @example `local_ssd`
         */
        Category: string;
    };
    /**
     * 数据盘规格。
     */
    "DataDisk"?: {
        /**
         * 数据盘大小，单位：GiB。
         * @example `20`
         */
        Size: number;
        /**
         * 磁盘种类。取值：
         * - **cloud_efficiency**：高效云盘
         * - **cloud_ssd**：全闪云盘
         * - **local_hdd**：本地HDD盘
         * - **local_ssd**：本地SSD盘
         * @example `cloud_efficiency`
         */
        Category: string;
        /**
         * 是否加密云盘。取值范围：
         * - true：是
         * - false（默认值）：否
         * @example `false`
         */
        Encrypted: boolean;
        /**
         * 云盘使用的KMS密钥ID。取值范围：
         * - true：是
         * - false（默认值）：否
         * > 如果Encrypted置为true，KMSKeyId为空时则使用服务默认密钥。
         * @example `false`
         */
        KMSKeyId: string;
    }[];
    /**
     * 购买资源的时长。
     * - 如果**PeriodUnit**取值为**Day**时，则**Period**仅可设置为**3**。
     * - 如果**PeriodUnit**取值为**Month**时，则**Period**可设置为**1-9**,**12**。
     * @example `1-9，12`
     */
    "Period"?: number;
    /**
     * 公网最大带宽，如果本参数的值大于0，则自动为实例分配公网IP。
     * @example `1`
     */
    "InternetMaxBandwidthOut": number;
    /**
     * 创建的实例数量。取值范围：1~100。
     * @example `1`
     */
    "Amount": number;
    /**
     * 网络ID。
     * >只能在节点级调度使用，区域级调度时配置该参数会报错。
     * @example `net-id`
     */
    "NetWorkId"?: string;
    /**
     * 交换机ID。
     * >只能在节点级调度使用，区域级调度时配置该参数会报错。
     * @example `vsw-5sagnw7m613oulalkd10n****`
     */
    "VSwitchId"?: string;
    /**
     * 安全组ID。
     * @example `sg-test`
     */
    "SecurityId"?: string;
    /**
     * 主机名称。
     * @example `test-HostName`
     */
    "HostName"?: string;
    /**
     * 实例名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）。
     * 默认值为实例的InstanceId。
     * @example `TestName`
     */
    "InstanceName"?: string;
    /**
     * 是否为**HostName**和**InstanceName**添加有序后缀，有序后缀从001开始递增，最大不能超过999。
     * @example `True`
     */
    "UniqueSuffix"?: boolean;
    /**
     * 用户自定义数据，最大支持16 KB。您可传入**UserData**信息，**UserData**以Base64的方式编码。
     * @example `ZWtest`
     */
    "UserData"?: string;
    /**
     * 是否自动续费。取值：
     * - **true**：自动续费
     * - **false**：不自动续费（默认）
     * >按量付费时，该参数无效。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 调度价格策略。取值：
     * - **PriceHighPriority**：优先高价
     * - **PriceLowPriority**：优先低价
     * @example `PriceHighPriority`
     */
    "SchedulingPriceStrategy"?: string;
    /**
     * 私网IP地址。
     * >只能在节点级调度使用，区域级调度时配置该参数会报错。
     * 如果指定了私网IP，实例数量只能为1台，且私网IP和交换机ID同时非空时，该私网IP才生效。
     * @example `10.0.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 购买资源的时长单位。取值：
     * - **Month**（默认）：按月购买。
     * - **Day**：按天购买。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否启用公网ipidentification。取值：-true：启用。-false（默认值）：不启用。
     * @example `true`
     */
    "PublicIpIdentification"?: boolean;
    /**
     * 是否使用镜像预置密码。取值：
     * - **true**：使用
     * - **false**：不使用
     * > **Password**、**KeyPairName**、**PasswordInherit**至少填入一个。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
    /**
     * 实例计费策略。取值：
     * - **instance**：实例粒度
     * - 不传默认按用户维度
     * @example `instance`
     */
    "InstanceChargeStrategy"?: string;
    /**
     * 实例计算资源计费周期，仅支持实例级后付费。
     * 取值
     * - **Day**：按天计费。
     * - **Month**：按月计费。
     * @example `Day`
     */
    "BillingCycle"?: string;
    /**
     * IP类型。取值：
     * - **ipv4**（默认值）：IPv4。
     * - **ipv6**：IPv6。
     * - **ipv4Andipv6**：IPv4和IPv6。
     * @example `ipv4`
     */
    "IpType"?: string;
    /**
     * 是否使用代金券，默认为使用，即AutoUseCoupon=true。
     * @example `true`
     */
    "AutoUseCoupon"?: string;
    /**
     * 实例所绑定的标签
     */
    "Tag"?: {
        /**
         * 自定义标签key
         * @example `team`
         */
        Key: string;
        /**
         * 标签值。不可超过128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。
         * @example `tagValue`
         */
        Value: string;
    }[];
    /**
     * 按量付费实例的自动释放时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC+0时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`。
     * - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。
     * - 最短释放时间为当前时间一小时之后。
     * @example `2023-06-28T14:38:52Z`
     */
    "AutoReleaseTime"?: string;
    /**
     * 按量付费实例的竞价策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * 默认值：NoSpot。
     * @example `SpotAsPriceGo`
     */
    "SpotStrategy"?: string;
}
