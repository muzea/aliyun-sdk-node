export interface DescribeRegionsResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B7281856-F27D-4ECE-B4F1-50511E550xxx`
     */
    RequestId: string;
    /**
     *
     * 堡垒机实例支持的地域信息。
     */
    Regions: {
        /**
         * 地域对应的接入地址。
         * @example `yundun-bastionhost.aliyuncs.com`
         */
        RegionEndpoint: string;
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
}
