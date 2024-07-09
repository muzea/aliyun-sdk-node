export interface DescribeRegionsResponse {
    /**
     * 请求ID，唯一标识。
     * @example `89945DD3-9072-47D0-A318-353284CFC7B3`
     */
    RequestId: string;
    /**
     * 地域信息集合。
     */
    Regions: {
        /**
         * 可用区。
         */
        Zones: string[];
        /**
         * 推荐可用区。当前地域下，整体库存量相对充足的可用区。
         */
        RecommendZones: string[];
        /**
         * 地域对应的接入地址（Endpoint）。
         * @example `eci.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
