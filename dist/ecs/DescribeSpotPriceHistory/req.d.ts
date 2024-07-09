export interface DescribeSpotPriceHistoryRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 抢占式实例网络类型。取值范围：
     * - classic：表示抢占式实例的网络类型为经典网络。
     * - vpc：表示抢占式实例的网络类型为专有网络。
     * @example `vpc`
     */
    "NetworkType": string;
    /**
     * 实例规格。
     * @example `ecs.t1.xsmall`
     */
    "InstanceType": string;
    /**
     * 抢占式实例的保留时长，单位为小时。 默认值：1。取值范围：
     * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
     * > 当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时该参数生效。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 是否为I/O优化实例。取值范围：
     * - optimized：表示抢占式实例为I/O优化实例。
     * - none：表示抢占式实例为非I/O优化实例。
     * 系列I实例默认值：none。
     * 其余实例规格族默认值：optimized。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 查询抢占式实例历史价格的起始时间，最大值不得超过指定的结束时间30天。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * 默认值：空，空代表结束时间前3小时。
     * @example `2017-08-22T08:45:08Z`
     */
    "StartTime"?: string;
    /**
     * 查询抢占式实例历史价格的结束时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * 默认值：空，空表示当前时间。
     * @example `2017-08-22T08:45:08Z`
     */
    "EndTime"?: string;
    /**
     * 操作系统的发行平台类型。取值范围：
     * - linux。
     * - windows。
     * @example `linux`
     */
    "OSType"?: string;
    /**
     * 查询开始行。
     * 默认值：0。
     * @example `0`
     */
    "Offset"?: number;
}
