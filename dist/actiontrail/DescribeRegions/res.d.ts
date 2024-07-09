export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `ACA7C814-12BC-4D81-A0D2-72071C9D6D2C`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 接入地址。
             * @example `actiontrail.cn-hangzhou.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * > 当AcceptLanguage取值为zh-CN时，返回中文。当AcceptLanguage取值为en-US或不指定时，返回英文。
             * @example `China (Hangzhou)`
             */
            LocalName: string;
        }[];
    };
}
