export interface AssignJobsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 作业组ID。
     * @example `390515b5-6115-4ccf-83e2-52d5bfaf2ddf`
     */
    JobGroupId: string;
    /**
     * 请求ID。
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 作业ID列表。
     */
    JobsId: string[];
}
