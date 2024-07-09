export interface DescribeAvailableResourceRequest {
    /**
     * 地域ID。
     * 您可以调用[DescribeRegions](~~146965~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * 默认值为空，此时查询指定地域下的所有可用区。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 要查询的资源信息。
     */
    "DestinationResource": {
        /**
         * 资源类型。取值范围：
         * - InstanceTypeFamily：表示查询实例规格族，配合Value使用。
         * - InstanceType：表示查询实例规格，配合Value，以及Cores和Memory使用。
         * @example `InstanceTypeFamily`
         */
        Category: string;
        /**
         * 实例规格族或者具体实例规格。
         * - 当Category取值为InstanceTypeFamily时，取值为实例规格族，如ecs.c5。
         * - 当Category取值为InstanceType时，取值为具体实例规格。如ecs.c5.large。
         * @example `ecs.c6`
         */
        Value: string;
        /**
         * vCPU核数。当Category取值为InstanceType时，可以设置。
         * @example `2`
         */
        Cores: number;
        /**
         * 内存大小。单位为GiB。当Category取值为InstanceType时，可以设置。
         * @example `4`
         */
        Memory: number;
    };
    /**
     * 要查询的抢占式实例的资源信息。
     */
    "SpotResource"?: {
        /**
         * 实例的抢占策略。取值范围：
         * - NoSpot：正常按量付费实例。
         * - SpotWithPriceLimit：设置上限价格的抢占式实例。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格的抢占式实例。
         * 默认为：NoSpot。
         * > 查询抢占式实例资源信息时，即取值为SpotWithPriceLimit或SpotAsPriceGo时，Category取值必须为InstanceType，同时需指定具体实例规格（Value），或者指定vCPU和内存（Cores和Memory）。
         * @example `SpotAsPriceGo`
         */
        SpotStrategy: string;
        /**
         * 抢占式实例的每小时最高价格，最多精确到小数点后3位。当SpotStrategy取值为SpotWithPriceLimit时，必须设置SpotPriceLimit。
         * @example `0.2`
         */
        SpotPriceLimit: number;
        /**
         * 抢占式实例的保护期。单位为小时。默认为1。可设置为0，表示无保护期。
         * @example `1`
         */
        SpotDuration: number;
    };
}
