export interface DescribeDomainTopClientIpVisitResponse {
    /**
     * 请求ID。
     * @example `64D28B53-5902-409B-94F6-FD46680144FE`
     */
    RequestId: string;
    /**
     * 客户端IP列表。
     */
    ClientIpList: {
        /**
         * 代表该条记录是TopN。
         * @example `2`
         */
        Rank: number;
        /**
         * IP地址，目前仅支持IPv4。
         * @example `1.1.xxx`
         */
        ClientIp: string;
        /**
         * 总请求次数。
         * @example `256`
         */
        Acc: number;
        /**
         * 总流量，单位为Byte。
         * @example `1024`
         */
        Traffic: number;
    }[];
}
