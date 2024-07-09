export interface ListRegionsResponse {
    /**
     * 请求ID。
     * @example `0FEEF92D-4052-5202-87D0-3D8EC16F81BF`
     */
    RequestId: string;
    /**
     * 地域列表。
     */
    Regions: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 地域接入地址。
         * @example `servicecatalog.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
    }[];
}
