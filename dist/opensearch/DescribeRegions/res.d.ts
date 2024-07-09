export interface DescribeRegionsResponse {
    /**
     * 请求ID
     * @example `3B7E42BD-1D63-2F6B-C8E0-41BACEA76EEB`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 接入点地址
         * @example `opensearch.cn-hangzhou.aliyuncs.com`
         */
        endpoint: string;
        /**
         * 区域ID
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 区域名称
         * @example `华东1（杭州）`
         */
        localName: string;
        /**
         * 控制台地址
         * @example `https://opensearch-cn-hangzhou.console.aliyun.com`
         */
        consoleUrl: string;
    }[];
}
