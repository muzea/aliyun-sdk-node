export interface CreateCallTagsResponse {
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
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
     * 创建失败的号码标签列表。
     */
    Data: {
        /**
         * 创建失败的号码标签的名称。
         * @example `TagC`
         */
        Item: string;
        /**
         * 号码标签创建失败原因。
         * @example `CALL_TAG_NAME_DUPLICATED`
         */
        Reason: string;
    }[];
}
