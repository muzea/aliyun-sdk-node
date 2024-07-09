export interface DeleteGroupRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 待删除的群组ID
         * @example `g123`
         */
        group_id: string;
    };
}
