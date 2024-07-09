export interface DeleteMetricRuleResourcesResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The alert does not exist.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D8A35882-90C6-4F03-BBEB-153C180398EA`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
