export interface ListEnhanhcedNatGatewayAvailableZonesRequest {
    /**
     * 要查询的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * 本示例查询阿联酋（迪拜）地域NAT网关资源的可用区。
     * @example `me-east-1`
     */
    "RegionId": string;
    /**
     * 返回结果显示的语言。取值：
     * - **zh-CN**（默认值）：中文。
     * - **en-US**：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 过滤信息，支持传入键值对查询结果进行过滤。
     */
    "Filter"?: {
        /**
         * 过滤条件。目前仅支持对**PrivateLinkEnabled**进行过滤。
         * @example `PrivateLinkEnabled`
         */
        Key: string;
        /**
         * 过滤条件对应的过滤值。
         * > 当过滤条件为**PrivateLinkEnabled**时，需要配置过滤值。 取值为**true**或**false**。
         * @example `true`
         */
        Value: string;
    }[];
}
