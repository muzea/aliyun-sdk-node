export interface ModifyInstanceSpecRequest {
    /**
     * 指定的实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 实例的目标规格。更多信息，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
     * @example `ecs.g6.large`
     */
    "InstanceType"?: string;
    /**
     * 公网出带宽最大值，单位为Mbit/s（Megabit per second）。取值范围：0~100。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `10`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 公网入带宽最大值，单位为Mbit/s（Megabit per second）。取值范围：
     * - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
     * - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。
     * > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
     * @example `10`
     */
    "InternetMaxBandwidthIn"?: number;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "Temporary.StartTime"?: string;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "Temporary.EndTime"?: string;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `null`
     */
    "Temporary.InternetMaxBandwidthOut"?: number;
    /**
     * 是否提交异步请求。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
    /**
     * 是否支持跨集群升级实例规格。
     * - true：是。
     * - false：否。
     * 默认值：false。
     * 当参数`AllowMigrateAcrossZone`取值为true时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
     * 经典网络类型实例：
     *
     * * 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
     *
     * * 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
     * 专有网络VPC类型实例：对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
     * @example `false`
     */
    "AllowMigrateAcrossZone"?: boolean;
    /**
     * 更换系统盘类型。取值范围：
     * - cloud_efficiency：高效云盘
     * - cloud_ssd：SSD云盘
     * >该参数只有在从[已停售的实例规格](~~55263~~)升级到[正常售卖的实例规格族](~~25378~~)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * >该参数暂未开放使用。
     * @example `null`
     */
    "ModifyMode"?: string;
    /**
     * >该参数暂未开放使用。
     */
    "Disk"?: {
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        DiskId: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        Category: string;
        /**
         * >该参数暂未开放使用。
         * @example `null`
         */
        PerformanceLevel: string;
    }[];
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会调整实例的实例规格和公网带宽大小。检查项包括是否填写了必需参数、请求格式、业务限制和 ECS 库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - false（默认）：发送正常请求，通过检查后直接调整实例的实例规格和公网带宽大小。
     * @example `false`
     */
    "DryRun"?: boolean;
}
