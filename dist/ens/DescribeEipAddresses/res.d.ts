export interface DescribeEipAddressesResponse {
    EipAddresses: {
        /**
         * EIP的详细信息。
         */
        EipAddress: {
            /**
             * 弹性EIP的信息。
             * @example `203.107.XX.XX`
             */
            Eip: string;
            /**
             * ENS实例公网IP地址。
             * @example `203.107.XX.XX`
             */
            InstanceIdInternetIp: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `CCFD3F24-44AF-5508-B18D-5100BFC68602`
     */
    RequestId: string;
}
