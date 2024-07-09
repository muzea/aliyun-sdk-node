export interface ListEnhanhcedNatGatewayAvailableZonesResponse {
    /**
     * 请求ID。
     * @example `8AE6F367-52EA-535D-9A3D-EF23D70527C8`
     */
    RequestId: string;
    /**
     * 可用区集合。
     */
    Zones: {
        /**
         * 可用区ID。
         * @example `me-east-1a`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * @example `中东1 可用区A`
         */
        LocalName: string;
    }[];
}
