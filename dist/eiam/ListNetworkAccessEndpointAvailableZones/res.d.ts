export interface ListNetworkAccessEndpointAvailableZonesResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 当前地域支持的网络端点可用区列表。
     */
    Zones: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-j`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * @example `华东1（杭州）可用区J`
         */
        LocalName: string;
    }[];
}
