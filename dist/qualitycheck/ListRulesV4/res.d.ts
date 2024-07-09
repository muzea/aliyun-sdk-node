export interface ListRulesV4Response {
    /**
     * 数据总数。
     * @example `219`
     */
    TotalCount: number;
    /**
     * 业务类型，无实际意义，忽略。
     * @example `无`
     */
    BusinessType: number;
    /**
     * 返回结果
     */
    Data: any[];
    /**
     * 总条数。
     * @example `219`
     */
    Count: number;
    /**
     * 当前页码。
     * @example `10`
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
     * @example `96138D8D-8D26-4E41-BFF4-77AED1088BBD`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：**true**表示成功；**false/null**表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 出错时表示出错详情，当输出多条信息时使用。
     */
    Messages: string[];
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
