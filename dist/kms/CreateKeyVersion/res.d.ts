export interface CreateKeyVersionResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `b96f250a-4b75-498c-91be-22c6928f85be`
     */
    RequestId: string;
    /**
     * 密钥版本的元数据。
     */
    KeyVersion: {
        /**
         * 密钥ID。
         * @example `key-hzz62f1cb66fa42qo****`
         */
        KeyId: string;
        /**
         * 密钥版本ID。
         * @example `key-hzz62f1cb66fa42qo****-20v29b****`
         */
        KeyVersionId: string;
        /**
         * 创建密钥版本的时间（UTC时间）。
         * @example `2023-07-02T10:38:27Z`
         */
        CreationDate: string;
    };
}
