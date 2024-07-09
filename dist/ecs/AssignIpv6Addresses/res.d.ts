export interface AssignIpv6AddressesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp1iqejowblx6h8j****`
     */
    NetworkInterfaceId: string;
    Ipv6Sets: {
        /**
         * 弹性网卡已分配的IPv6地址。
         */
        Ipv6Address: string[];
    };
    Ipv6PrefixSets: {
        /**
         * 弹性网卡已分配的IPv6前缀集合。
         */
        Ipv6Prefix: string[];
    };
}
