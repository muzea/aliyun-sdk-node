export interface CreateCustomCallTaggingResponse {
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
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
     * 创建失败的呼入号码标记列表。
     */
    Data: {
        /**
         * 创建失败的呼入号码标记的号码。
         * @example `1312121****`
         */
        Item: string;
        /**
         * 呼入号码标记创建失败原因。
         * @example `CUSTOM_NUMBER_DUPLICATED`
         */
        Reason: string;
    }[];
}
