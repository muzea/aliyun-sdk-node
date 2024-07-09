export interface GetMetricsResponse {
    /**
     * 分页游标标识。
     * @example `15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****`
     */
    NextToken: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 监控指标数据内容。
     * @example `[{"timestamp":1548777660000,"userId":"120886317861****","instanceId":"i-abc****","Minimum":9.92,"Average":9.92,"Maximum":9.92}]`
     */
    DataPoints: string;
    /**
     * 请求代码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求信息。
     * @example `Succeed`
     */
    Message: string;
    /**
     * 时间间隔。
     * @example `60`
     */
    Period: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
