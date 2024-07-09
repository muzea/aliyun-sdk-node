export interface StartSnatIpForSnatEntryRequest {
    /**
     * SNAT条目ID。
     * @example `snat-5tfi6f8gds82mjmlofeym****`
     */
    "SnatEntryId": string;
    /**
     * SNAT条目中的EIP。
     * @example `219.152.XX.XX`
     */
    "SnatIp": string;
}
