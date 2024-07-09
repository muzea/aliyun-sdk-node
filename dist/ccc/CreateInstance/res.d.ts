export interface CreateInstanceResponse {
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
     * 数据，返回的是后台创建实例的工作流的ID。
     * @example `75c1346c-1dc2-4ed8-973f-edf8b1e5fe77`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `2778FA12-EDD6-42AA-9B15-AF855072E5E5`
     */
    RequestId: string;
}
