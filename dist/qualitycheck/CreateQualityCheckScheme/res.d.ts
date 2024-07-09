export interface CreateQualityCheckSchemeResponse {
    /**
     * 新建的质检方案ID。
     * @example `12`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `76DB5D8C-5BD9-42A7-B527-5AF3A5F****`
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
     * 出错时表示出错详情，成功时为**successful**.
     * @example `successful`
     */
    Message: string;
    Messages: {
        /**
         * 消息的列表，忽略。
         */
        Message: string[];
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
