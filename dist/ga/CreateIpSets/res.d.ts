export interface CreateIpSetsResponse {
    /**
     * 请求ID。
     * @example `1F4B6A4A-C89E-489E-BAF1-52777EE148EF`
     */
    RequestId: string;
    /**
     * 加速地域配置信息。
     */
    IpSets: {
        /**
         * 要加速的地域ID。
         * @example `cn-qingdao`
         */
        AccelerateRegionId: string;
        /**
         * 加速地域带宽，单位为**Mbps**。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 加速地域ID。
         * @example `ips-bp11r5jb8ogp122xl****`
         */
        IpSetId: string;
        /**
         * 加速地域公网线路类型。
         * @example `BGP`
         */
        IspType: string;
    }[];
    /**
     * 全球加速实例ID。
     * @example `ga-bp1yeeq8yfoyszmq****`
     */
    AcceleratorId: string;
}
