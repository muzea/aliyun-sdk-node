export interface DescribeContainerGroupPriceRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~146965~~)查询最新的地域可用区信息。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * vCPU大小。ECI支持的vCPU和内存规格请参见[vCPU和内存规格说明](~~114662~~)。
     * @example `2.0`
     */
    "Cpu"?: number;
    /**
     * 内存大小。单位为GiB。ECI支持的vCPU和内存规格请参见[vCPU和内存规格说明](~~114662~~)。
     * @example `4.0`
     */
    "Memory"?: number;
    /**
     * 指定的ECS实例规格。ECI支持指定的ECS规格请参见[ECI支持的ECS规格说明](~~114664~~)。
     * > 设置该参数后，将自动忽略传入的vCPU和内存值，仅返回ECS规格的价格信息。
     * @example `ecs.c5.large`
     */
    "InstanceType"?: string;
    /**
     * 实例的抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
     * 默认为：NoSpot。
     * @example `SpotWithPriceLimit`
     */
    "SpotStrategy"?: string;
    /**
     * 可用区。您可以调用[DescribeRegions](~~146965~~)查询最新的地域可用区信息。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 设置抢占式实例的每小时最高价格，最多精确到小数点后3位。当SpotStrategy取值为SpotWithPriceLimit时，必须设置SpotPriceLimit。
     * @example `0.2`
     */
    "SpotPriceLimit"?: number;
    /**
     * 临时存储空间大小。单位为GiB.。
     * @example `20`
     */
    "EphemeralStorage"?: number;
    /**
     * 抢占式实例的保护期。单位为小时。默认为1。可设置为0，表示无保护期。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 算力类别。取值为economy时，表示查询经济型规格的价格。
     * @example `economy`
     */
    "ComputeCategory"?: string;
}
