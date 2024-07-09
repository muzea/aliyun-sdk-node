export interface AssignReviewerBySessionGroupResponse {
    /**
     * 请求ID
     * @example `F190ADE9-619A-447D-84E3-7E241A5C428E`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    Messages: {
        /**
         * 出错时表示出错详情，当输出多条信息时使用。
         */
        Message: string[];
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
