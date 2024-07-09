export interface DescribeAvailabilityZonesResponse {
    /**
     * 请求ID。
     * @example `19A13A33-0FAD-5120-8AE1-B1636F74DD80`
     */
    RequestId: string;
    /**
     * 支持购买的可用区资源详情。
     */
    AvailableZones: {
        /**
         * 可用区ID。
         * @example `cn-beijing-f`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * 根据**AcceptLanguage**参数的值返回不同的语言。以**cn-hangzhou-h**可用区为例，示例如下：
         * - **AcceptLanguage**为**zh**：**杭州 可用区H**
         * - **AcceptLanguage**为**en**：**Hangzhou Zone H**
         * @example `杭州 可用区H`
         */
        ZoneName: string;
        /**
         * 地域ID。您可以通过调用[DescribeRegions](~~61933~~)接口查询。
         * @example `cn-beijing`
         */
        RegionId: string;
    }[];
}
