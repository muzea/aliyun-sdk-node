export interface ListProjectsResponse {
    /**
     * 当预期返回的项目总数大于设置的MaxResults时，将作为查询后续页的凭证。只有当项目未全部返回时，此参数才有值。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDAx`
     */
    NextToken: string;
    /**
     * 由Project组成的数组格式，返回Project的信息。
     */
    Projects: any[];
    /**
     * 请求ID。
     * @example `4A7A2D0E-D8B8-4DA0-8127-EB32C660`
     */
    RequestId: string;
}
