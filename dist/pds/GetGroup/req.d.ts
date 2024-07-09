export interface GetGroupRequest {
    "domain_id": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 待获取的群组ID
         * @example `2e43ec8427dd45f19431b7504649a1b1`
         */
        group_id: string;
    };
}
