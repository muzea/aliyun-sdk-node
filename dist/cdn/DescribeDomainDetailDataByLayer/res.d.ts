export interface DescribeDomainDetailDataByLayerResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    Data: {
        /**
         * 查询的加速域名返回数据。
         */
        DataModule: {
            /**
             * 流量，单位：Byte。
             * @example `789756701818`
             */
            Traf: number;
            /**
             * QPS（每秒请求次数）数据。
             * @example `5998.47`
             */
            Qps: number;
            /**
             * IPv6的QPS。
             * @example `0`
             */
            Ipv6Qps: number;
            /**
             * IPv6带宽，单位：bps。
             * @example `0`
             */
            Ipv6Bps: number;
            /**
             * 请求数。
             * @example `2`
             */
            Acc: number;
            /**
             * IPv6流量，单位：Byte。
             * @example `141718944482`
             */
            Ipv6Traf: number;
            /**
             * IPv6请求数。
             * @example `1`
             */
            Ipv6Acc: number;
            /**
             * 时间片起始时刻。
             * @example `2020-07-05T22:00:00Z`
             */
            TimeStamp: string;
            /**
             * http状态码分布。
             * @example `200:44349|206:1753719|304:45|403:1095|416:1|499:332`
             */
            HttpCode: string;
            /**
             * 带宽，单位：bps。
             * @example `21060178715.146667`
             */
            Bps: number;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
