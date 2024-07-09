export interface CreateGWSInstanceRequest {
    /**
     * 可视化服务集群ID。
     * @example `gws-rhzxpazwebua****`
     */
    "ClusterId": string;
    /**
     * 可视化服务镜像ID。
     * @example `ehs-faeid-****`
     */
    "ImageId": string;
    /**
     * 系统盘大小。单位：GiB
     * 取值范围：20~500
     * @example `20`
     */
    "SystemDiskSize": number;
    /**
     * 系统盘类型。取值范围：
     * - cloud_efficiency：高效云盘
     * - cloud_ssd：SSD云盘
     * - cloud_essd：ESSD云盘
     * - cloud：普通云盘
     * @example `cloud`
     */
    "SystemDiskCategory": string;
    /**
     * 可视化实例规格。
     * @example `ecs.g6.large`
     */
    "InstanceType": string;
    /**
     * 可视化实例计费方式，不能为抢占式实例。
     * - PostPaid：按量付费
     * - PrePaid：包年包月
     * 默认值：PostPaid
     * @example `PostPaid`
     */
    "InstanceChargeType": string;
    /**
     * 实例工作模式。取值范围：
     * - Desktop：桌面模式
     * - Application：应用模式
     * @example `Desktop`
     */
    "WorkMode": string;
    /**
     * 是否分配公网地址。取值范围：
     * - true：分配
     * - false：不分配
     * 默认值：false
     * @example `false`
     */
    "AllocatePublicAddress": boolean;
    /**
     * 公网带宽计费方式。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按使用流量计费。
     * 默认值：PayByTraffic
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 公网入带宽最大值。单位为Mbit/s。取值范围：
     * - 当所购出网带宽小于等于10 Mbit/s时：1~10。默认值：10
     * - 当所购出网带宽大于10 Mbit/s时：1~InternetMaxBandwidthOut的取值，默认为InternetMaxBandwidthOut的取值。
     * @example `122`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * 公网出带宽最大值。单位：Mbit/s
     * 取值范围：0~100
     * 默认值：0
     * @example `122`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 可视化实例名称。
     * @example `Test-ehpc`
     */
    "Name"?: string;
    /**
     * 购买资源的时长。单位由PeriodUnit指定。当InstanceChargeType取值为PrePaid时才生效，且为必选值。
     * - 如果PeriodUnit为Month，该参数的取值范围：{“1”, “2”, “3”, “6”}。
     * - 如果PeriodUnit为Year，该参数的取值范围：{“1”, “2”, “3”, “4”, “5”}。
     * @example `1`
     */
    "Period"?: string;
    /**
     * 购买资源的时长单位。取值范围：
     * - Month：月
     * - Year：年
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动续费。取值范围：
     * - true：是
     * - false：否
     * 默认值：false
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 应用程序列表。WorkMode选择为Application时必选。包含如下信息：
     * - AppName：应用名称。
     * - AppPath：应用运行路径。
     * - AppArgs：应用运行参数。
     * @example `[{AppName: notepad},{AppArgs:c:/temp.txt}]`
     */
    "AppList"?: string;
    /**
     * 交换机ID。
     * @example `vsw-bp1gb5gf5546rn****`
     */
    "VSwitchId"?: string;
}
