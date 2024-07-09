export interface AssignPrivateIpAddressesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 已分配辅助私网IP地址的弹性网卡信息组成的集合。
     */
    AssignedPrivateIpAddressesSet: {
        /**
         * 弹性网卡ID。
         * @example `eni-uf620pb4d19ljnu4a64m`
         */
        NetworkInterfaceId: string;
        /**
         * 已分配的私网IP地址。
         */
        PrivateIpSet: string[];
    };
}
