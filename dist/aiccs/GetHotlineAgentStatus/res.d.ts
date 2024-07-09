export interface GetHotlineAgentStatusResponse {
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席状态。取值：
     * - **离线**
     * - **空闲**
     * - **话后处理**
     * - **通话中**
     * - **小休-休息**
     * - **小休-就餐**
     * - **小休-会议**
     * - **小休-培训**
     * - **小休-辅导**
     * @example `通话中`
     */
    Data: string;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
