export interface UpdateApplicationRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
    /**
     * 应用名
     * @example `testApp`
     */
    "appName"?: string;
    /**
     * 请求的结构体
     */
    "body"?: {
        /**
         * 拥有者阿里云UID
         * @example `1332695887xxxxxx`
         */
        ownerAccountId: string;
    };
}
