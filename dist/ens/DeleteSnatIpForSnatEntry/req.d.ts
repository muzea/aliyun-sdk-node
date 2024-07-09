export interface DeleteSnatIpForSnatEntryRequest {
    /**
     * SNAT条目ID。
     * @example `snat-5tfi6f8gds82mjmlofeym****`
     */
    "SnatEntryId": string;
    /**
     * SNAT条目中的EIP
     * @example `120.72.56.71`
     */
    "SnatIp": string;
}
