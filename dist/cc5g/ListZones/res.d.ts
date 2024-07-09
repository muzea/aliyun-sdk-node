export interface ListZonesResponse {
    /**
     * 请求ID。
     * @example `C2C1DE7C-E14C-53DE-920D-D63ACD7421A4`
     */
    RequestId: string;
    /**
     * 当前地域支持的可用区列表
     */
    Zones: {
        /**
         * 可用区ID
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * @example `杭州可用区h`
         */
        LocalName: string;
    }[];
}
