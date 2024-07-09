export interface DescribeCustomLineResponse {
    /**
     * 唯一请求识别码。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
     */
    RequestId: string;
    /**
     * IP段列表。IP与IP之间用中横线“-”间隔； 每行一个IP段，最少1行最多50行；只有一个IP填写IP1-IP1，不同IP段不能交叉。
     */
    IpSegmentList: {
        /**
         * IP段的结束IP。
         * @example `1.1.XX.XX`
         */
        EndIp: string;
        /**
         * IP段的开始IP。
         * @example `1.2.XX.XX`
         */
        StartIp: string;
    }[];
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    DomainName: string;
    /**
     * 自定义线路名称ID。
     * @example `597`
     */
    Id: number;
    /**
     * 自定义线路Code。
     * @example `hra0yc-597`
     */
    Code: string;
    /**
     * 自定义线路名称。
     * @example `测试线路`
     */
    Name: string;
}
