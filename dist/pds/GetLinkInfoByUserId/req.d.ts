export interface GetLinkInfoByUserIdRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 待查询的UserID
         * @example `xxx`
         */
        user_id: string;
    };
}
