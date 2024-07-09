export interface GetHoneypotStatisticsResponse {
    /**
     * 蜜罐使用情况统计数据。
     */
    Data: {
        /**
         * 授权的总探针数量。
         * @example `40`
         */
        TotalProbeCount: number;
        /**
         * 已部署探针数量。
         * @example `15`
         */
        UsedProbeCount: number;
        /**
         * 已部署主机探针数量。
         * @example `9`
         */
        UsedHostProbeCount: number;
        /**
         * 已部署VPC探针数量。
         * @example `6`
         */
        UsedVpcProbeCount: number;
        /**
         * 总蜜罐数量。
         * @example `20`
         */
        TotalHoneypotCount: number;
        /**
         * 已部署蜜罐数量。
         * @example `7`
         */
        UsedHoneypotCount: number;
        /**
         * 管理节点整体健康状态。取值：
         * - 1：正常运行
         * - 2：异常
         * @example `1`
         */
        TotalNodeStatus: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EB7181CB-32F3-5189-A935-4E24DD1A****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
