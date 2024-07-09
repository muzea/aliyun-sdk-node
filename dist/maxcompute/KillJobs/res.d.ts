export interface KillJobsResponse {
    /**
     * 请求id。
     * @example `0abb7ede16814560741256732e91b6`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * 返回数据
     * @example `success`
     */
    data: string;
}
