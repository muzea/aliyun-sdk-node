export interface DescribeEipGatewayInfoResponse {
    /**
     * 操作状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 传递的操作信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C0FD0EED-F90D-4479-803D-DD62335357E5	`
     */
    RequestId: string;
    EipInfos: {
        /**
         * EIP详细信息列表。
         */
        EipInfo: {
            /**
             * EIP的IP地址。
             * @example `47.XX.XX.236`
             */
            Ip: string;
            /**
             * EIP的网关地址。
             * @example `47.XX.XX.1`
             */
            IpGw: string;
            /**
             * EIP的子网掩码。
             * @example `255.255.255.0`
             */
            IpMask: string;
        }[];
    };
}
