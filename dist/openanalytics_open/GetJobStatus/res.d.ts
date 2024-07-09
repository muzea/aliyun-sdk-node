export interface GetJobStatusResponse {
    /**
     * 作业执行状态码。
     * @example `success`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `5C3F9ADD-2350-4C21-A3A1-A906F8DF8016`
     */
    RequestId: string;
}
