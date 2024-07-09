export interface ListKeyVersionsResponse {
    /**
     * 每页的返回结果个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `f71204c4-53cd-4eea-b405-653ba2db7e86`
     */
    RequestId: string;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回的密钥版本总数。
     * @example `3`
     */
    TotalCount: number;
    KeyVersions: {
        /**
         * 返回的密钥版本数组。
         */
        KeyVersion: {
            /**
             * 密钥ID。如果请求中的KeyId参数使用的是密钥别名、密钥ARN，在响应中也会返回密钥ID。
             * @example `key-hzz630494463ejqjx****`
             */
            KeyId: string;
            /**
             * 密钥版本的全局唯一标识符。
             * @example `1e3304fd-68ac-4d5b-8886-ae5f01a1****`
             */
            KeyVersionId: string;
            /**
             * 创建密钥版本时的日期和时间（UTC时间）。
             * @example `2024-03-25T10:42:40Z`
             */
            CreationDate: string;
        }[];
    };
}
