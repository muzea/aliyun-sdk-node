export interface QueryDnsHostResponse {
    /**
     * 唯一请求识别码。
     * @example `18A313DD-3AF3-40AA-84F9-56BA45DC511F`
     */
    RequestId: string;
    /**
     * DNS host信息。
     */
    DnsHostList: {
        /**
         * DNS 名称。
         * @example `ns3`
         */
        DnsName: string;
        IpList: string[];
    }[];
}
