export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1ADFG`
     */
    RequestId: string;
    /**
     * 返回结果列表。
     */
    Result: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 地域的可用状态。
         * @example `available`
         */
        status: string;
        /**
         * 地域的Endpoint地址。
         * @example `elasticsearch.cn-hangzhou.aliyuncs.com`
         */
        regionEndpoint: string;
        /**
         * 地域名称。
         * @example `China (Hangzhou)`
         */
        localName: string;
        /**
         * 地域在控制台中暴露的Endpoint地址。
         * @example `https://elasticsearch-cn-hangzhou.console.aliyun.com`
         */
        consoleEndpoint: string;
    }[];
}
