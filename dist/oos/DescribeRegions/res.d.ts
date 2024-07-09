export interface DescribeRegionsResponse {
    /**
     * 请求ID
     * @example `469E79B1-90A3-4A57-B7C4-2FE0C8B5175E`
     */
    RequestId: string;
    /**
     * 地域列表
     */
    Regions: {
        /**
         * 端点信息
         * @example `oos.cn-shenzhen.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 该地域名称
         * @example `China (Shenzhen)`
         */
        LocalName: string;
        /**
         * 地域ID
         * @example `cn-shenzhen`
         */
        RegionId: string;
    }[];
}
