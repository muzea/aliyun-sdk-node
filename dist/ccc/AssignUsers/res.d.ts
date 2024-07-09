export interface AssignUsersResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 数据，内容与工作流ID相同。
     * @example `1ca2b084-6f0a-454b-9851-29768a9a5832`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 工作流ID。
     * @example `1ca2b084-6f0a-454b-9851-29768a9a5832`
     */
    WorkflowId: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
}
