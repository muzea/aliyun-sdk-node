export interface AllocateIpv6AddressResponse {
    /**
     * IPv6地址的实例ID。
     * @example `ipv6-2zen5j4axcp5l5qyy****`
     */
    Ipv6AddressId: string;
    /**
     * IPv6地址。
     * @example `2408:XXXX:153:3921:851c:c435:7b12:1c5f`
     */
    Ipv6Address: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazdjdhd****`
     */
    ResourceGroupId: string;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
}
