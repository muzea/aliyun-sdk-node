export interface AddSnatIpForSnatEntryRequest {
    /**
     * SNAT条目ID。
     * @example `snat-5xkzf89dndkzh8yg9stzqz9m4`
     */
    "SnatEntryId": string;
    /**
     * SNAT条目中的EIP
     * @example `219.152.XX.XX`
     */
    "SnatIp": string;
}
