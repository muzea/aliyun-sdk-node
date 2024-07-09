export interface GetPtsReportsBySceneIdResponse {
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DC4E3177-6745-4925-B423-4E89VV34221A`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 报告概览信息。
     */
    ReportOverViewList: {
        /**
         * 报告名称。
         * @example `下单场景`
         */
        ReportName: string;
        /**
         * 压测结束时间。
         * @example `2021-02-26 16:38:30`
         */
        EndTime: string;
        /**
         * 压测开始时间。
         * @example `2021-02-26 16:28:30`
         */
        StartTime: string;
        /**
         * 施压机器数。
         * @example `1`
         */
        AgentCount: number;
        /**
         * 报告ID。
         * @example `NGGB5FV`
         */
        ReportId: string;
        /**
         * 消耗VUM。
         * @example `100`
         */
        Vum: number;
    }[];
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
