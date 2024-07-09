export interface GetRulesCountListResponse {
    /**
     * 数据总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 业务类型，无实际意义，忽略。
     * @example `忽略`
     */
    BusinessType: number;
    Data: {
        /**
         * 返回结果
         */
        Data: string[];
    };
    /**
     * 总条数。
     * @example `20`
     */
    Count: number;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `9987D326-83D9-4A42-B9A5-0B27F9B40539`
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
