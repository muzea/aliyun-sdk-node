export interface ListRegionsResponse {
    /**
     * 请求ID
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表
         */
        Region: {
            /**
             * 当前地域接口域名
             * @example `cloudphone.cn-hangzhou.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
