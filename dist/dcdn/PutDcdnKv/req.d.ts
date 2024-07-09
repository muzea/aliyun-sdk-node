export interface PutDcdnKvRequest {
    /**
     * Namespace名称。
     * @example `ns1`
     */
    "Namespace": string;
    /**
     * 需要设置的Key名称，最长不超过512个字符，不能包含空格、反斜杠（/）。
     * @example `key1`
     */
    "Key": string;
    /**
     * Key的内容，最大2 MB（2\*1000\*1000）。
     * @example `value1`
     */
    "Value": string;
    /**
     * 过期时间（秒级时间戳，不能小于当前时间），同时设置Expiration和ExpirationTtl时，以ExpirationTtl为准。
     * @example `1690081381`
     */
    "Expiration"?: number;
    /**
     * 过期时间（相对时间，单位：秒），同时设置Expiration和ExpirationTtl时，以ExpirationTtl为准。
     * @example `3600`
     */
    "ExpirationTtl"?: number;
}
