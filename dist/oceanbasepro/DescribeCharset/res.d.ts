export interface DescribeCharsetResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 字符集列表。
     */
    Charset: {
        /**
         * 字符集名称。
         * @example `utf8`
         */
        Charset: string;
        /**
         * 字符序集合。
         */
        Collations: string[];
    }[];
}
