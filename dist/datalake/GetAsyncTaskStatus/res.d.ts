export interface GetAsyncTaskStatusResponse {
    /**
     * Code
     * @example `OK`
     */
    Code: string;
    /**
     * Message
     * @example `success`
     */
    Message: string;
    /**
     * RequestId
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * Success
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务状态
     * @example `Success`
     */
    TaskStatus: any;
}
