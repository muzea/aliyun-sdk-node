export interface DescribeRegionsResponse {
    /**
     * 请求ID
     * @example `D1597848-E708-522C-9275-3A202FC8B63A`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 地域列表
     */
    Regions: {
        /**
         * 地域对应的接入地址（Endpoint）。
         * @example `baas.cn-hangzhou.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 地域名称
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 地域ID
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
