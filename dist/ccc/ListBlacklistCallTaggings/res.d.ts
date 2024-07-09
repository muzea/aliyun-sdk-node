export interface ListBlacklistCallTaggingsResponse {
    /**
     * Id of the request
     * @example `032C73C4-3A6F-4502-872B-4F5B41161C6E`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 通话ID。
         * @example `job-481841171213393920`
         */
        JobId: string;
        /**
         * 号码。
         * @example `1521083xxxx`
         */
        Number: string;
        /**
         * 是否有黑名单打标。
         * @example `true`
         */
        Blacklisted: boolean;
    }[];
}
