export interface ListRegionsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息组成的列表。
         */
        RegionInfo: {
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
