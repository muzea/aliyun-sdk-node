export interface DescribeDiagnosticReportListResponse {
    /**
     * 请求ID。
     * @example `D00DB161-FEF6-5428-B37A-8D29A4C2****`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 备用参数。
     * @example `None`
     */
    Synchro: string;
    /**
     * 返回的数据：
     * - **total**：数据量。
     * - **score**：诊断分数。
     * - **diagnosticTime**：诊断生成时间（UTC 时间）。
     * - **startTime**：查询开始时间（UTC 时间）。
     * - **endTime**：查询结束时间（UTC 时间）。
     * @example `{     "total": 1,     "list": [       {         "score": 100,         "diagnosticTime": "2022-11-14T08:17:00Z",         "startTime": "2022-11-14T07:16:59Z",         "endTime": "2022-11-14T08:16:59Z"       }     ]   }`
     */
    Data: string;
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
