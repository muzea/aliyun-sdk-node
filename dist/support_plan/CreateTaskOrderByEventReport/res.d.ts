export interface CreateTaskOrderByEventReportResponse {
    /**
     * msg
     * @example `请求成功`
     */
    Message: string;
    /**
     * requestId
     * @example `接口交互动态值`
     */
    RequestId: string;
    /**
     * 返回信息
     * @example `{  "eid": "E211129DT18M06",     "status": "dealingNode"   }`
     */
    Data: string;
    /**
     * code
     * @example `200`
     */
    Code: string;
    /**
     * success
     * @example `true`
     */
    Success: boolean;
}
