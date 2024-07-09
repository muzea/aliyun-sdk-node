export interface CreateInstanceRequest {
    /**
     * 集群 id。
     * @example `gws-xxx`
     */
    "ClusterId": string;
    /**
     * 交换机 id。
     * * 当指定时，选用此交换机来创建实例。推荐在创建时使用此参数，以限定实例的网段与可用区。
     * * 当不指定时，后台会根据当前实例类型，找到有库存的最新可用区（例如华北 2 可用区 G ），如果此可用区
     *     * 已有交换机，则直接选用
     *     * 没有交换机，则会尝试自动创建
     * @example `vsw-xxx`
     */
    "VSwitchId"?: string;
    /**
     * 实例名称。
     * @example `desktop-xxx`
     */
    "Name"?: string;
    /**
     * 镜像 id。
     * @example `m-xxx`
     */
    "ImageId": string;
    /**
     * 系统盘大小，单位为 GB。
     * * 取值范围 20~500。
     * * 选取不同镜像时，要求系统盘大小 >= 镜像的大小。
     * @example `100`
     */
    "SystemDiskSize": number;
    /**
     * 系统盘的种类：
     * * cloud_efficiency：高效云盘。
     * * cloud_ssd：SSD云盘。
     * * cloud_essd：ESSD 云盘。（只有较新规格族的实例，例如 ecs.g6 系统，才支持 ESSD 云盘）
     * @example `cloud_ssd`
     */
    "SystemDiskCategory": string;
    /**
     * 是否分配公网地址
     * * True
     * * False
     * @example `true`
     */
    "AllocatePublicAddress"?: string;
    /**
     * > 此值只在 `AllocatePublicAddress` 为 `true` 时有效
     * 网络计费类型。取值范围：
     * - PayByTraffic（默认）：按使用流量计费
     * - PayByBandwidth：按固定带宽计费
     * @example `PayByBandwidth`
     */
    "InternetChargeType"?: string;
    /**
     * > 此值只在 `AllocatePublicAddress` 为 `true` 时有效
     * 公网入带宽最大值，单位为 Mbps
     * * 取值范围 1~100
     * * 默认值：4
     * @example `4`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * > 此值只在 `AllocatePublicAddress` 为 `true` 时有效
     * 公网出带宽最大值，单位为 Mbps
     * * 取值范围 1~100
     * * 默认值：4
     * @example `4`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 实例规格，请参见 [实例规格族](https://help.aliyun.com/document_detail/25378.html) 或调用 [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) 获得规格表。
     * @example `ecs.g6.large`
     */
    "InstanceType": string;
    /**
     * 实例付费方式：
     * * PostPaid（默认）：按量付费
     * * PrePaid：包年包月
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 自动续费：
     * * False（默认）
     * * True
     * @example `True`
     */
    "AutoRenew"?: string;
    /**
     * > 此值仅在 `InstanceChargeType` 为 `PrePaid`（包年包月）时有效。
     * 包年包月的时长。
     * * `PeriodUnit` 为 `Week`（周）时，取值范围 1~4
     * * `PeriodUnit` 为 `Month`（月）时，取值范围 1 2 3 4 5 6 7 8 9 12 24 36 48 60
     * @example `1`
     */
    "Period"?: number;
    /**
     * > 此值仅在 `InstanceChargeType` 为 `PrePaid`（包年包月）时有效。
     * 包年包月的单位。
     * * Week
     * * Month
     * @example `Week`
     */
    "PeriodUnit"?: string;
    /**
     * 工作模式：
     * * Desktop：桌面模式。
     * * Application：应用模式。
     * @example `Desktop`
     */
    "WorkMode": string;
    /**
     * 应用列表。
     */
    "AppList"?: {
        /**
         * > 此值仅在 `WorkMode` 为 `Application` 时有效。
         * 应用名称。其中 AppList.N 的允许范围是 1~10。
         * @example `notepad`
         */
        AppName: string;
        /**
         * > 此值仅在 `WorkMode` 为 `Application` 时有效。
         * 应用的运行路径。其中 AppList.N 的允许范围是 1~10。
         * @example `C:\Windows\System32\notepad.exe`
         */
        AppPath: string;
        /**
         * > 此值仅在 `WorkMode` 为 `Application` 时有效。
         * 应用的运行参数。其中 AppList.N 的允许范围是 1~10。
         * @example `c:/temp.txt`
         */
        AppArgs: string;
    }[];
}
