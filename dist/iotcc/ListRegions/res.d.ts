export interface ListRegionsResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
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
         * 地域名称。
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 地域服务的终端节点地址。
         * @example `cciot.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
    }[];
}
