export interface StopSnatIpForSnatEntryRequest {
    /**
     * SNAT条目ID。
     * @example `snat-5tfi6f8gds82mjmlofeym****`
     */
    "SnatEntryId": string;
    /**
     * SNAT条目中的EIP
     * @example `221.178.103.143`
     */
    "SnatIp": string;
}
