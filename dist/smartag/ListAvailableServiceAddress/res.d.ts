export interface ListAvailableServiceAddressResponse {
    /**
     * 请求ID。
     * @example `324223F3-93D3-4CE4-B26F-66C0C3809922`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `Success`
     */
    Message: string;
    Data: {
        /**
         * 服务地址。
         * @example `192.168.1.1`
         */
        Address: string;
        /**
         * 服务地址类型。
         * @example `ProbeTask`
         */
        AddressType: string;
    }[];
}
