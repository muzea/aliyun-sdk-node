export interface GetSqlConcurrencyControlKeywordsFromSqlTextResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 根据模板化后的SQL生成的限流关键词串。
     * @example `SELECT~FROM~test~where~name`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `30A643F5-D7A6-55F5-AB75-DF501427****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
