export interface CreateCustomAnalysisTaskResponse {
    /**
     * 请求ID。
     * @example `16B78383-2803-4964-9605-37B30C073B0E`
     */
    requestId: string;
    /**
     * 返回码。
     * @example `200`
     */
    code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    message: string;
    /**
     * 创建任务的ID。
     * @example `123`
     */
    result: any;
}
