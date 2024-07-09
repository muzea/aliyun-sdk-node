export interface GetAccessKeyLastUsedResponse {
    /**
     * 访问密钥的最后使用信息。
     */
    AccessKeyLastUsed: {
        /**
         * 最后使用时间。
         * @example `2020-10-21T06:37:40Z`
         */
        LastUsedDate: string;
    };
    /**
     * 请求ID。
     * @example `5CCE804C-6450-49A7-B1DB-2460F7A97416`
     */
    RequestId: string;
}
