export interface CreateSchemeTaskConfigResponse {
    /**
     * 新增的质检任务ID。
     * @example `22`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `3CEA0495-341B-4482-9AD9-8191EF4***	`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
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
