export interface GetUserIdRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 外部身份提供商的用户标识符信息。
     */
    "ExternalId": {
        /**
         * 外部身份提供商的用户标识符。
         * @example `c73******a5fdd5`
         */
        Id: string;
        /**
         * 外部身份同步渠道，当前仅支持SCIM同步。
         * @example `SCIM`
         */
        Issuer: string;
    };
}
