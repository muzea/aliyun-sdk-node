export interface BatchPutDcdnKvRequest {
    /**
     * Namespace名称。
     * @example `ns1`
     */
    "Namespace": string;
    /**
     * 需要批量设置的键值对列表，总大小最大2 M(2*1000*1000)。
     */
    "KvList": {
        /**
         * 需要设置的键名称，最长不超过512个字符，不能包含空格、反斜杠（/）。
         * @example `test_key`
         */
        Key: string;
        /**
         * 键的内容。
         * @example `test_value`
         */
        Value: string;
        /**
         * 过期时间（秒级时间戳，不能小于当前时间），同时设置Expiration和ExpirationTtl时，以ExpirationTtl为准。
         * @example `1690081381`
         */
        Expiration: number;
        /**
         * 过期时间（相对时间，单位：秒），同时设置Expiration和ExpirationTtl时，以ExpirationTtl为准。
         * @example `3600`
         */
        ExpirationTtl: number;
    }[];
}
