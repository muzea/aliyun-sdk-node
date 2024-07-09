export interface AllocatePublicIpAddressResponse {
    /**
     * 实例的公网IP地址。
     * @example `112.124.**.**`
     */
    IpAddress: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
