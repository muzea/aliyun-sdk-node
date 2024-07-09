export interface DeleteMetricRuleTargetsResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `786E92D2-AC66-4250-B76F-F1E2FCDDBA1C`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 删除失败的目标ID列表。
     */
    FailIds: {
        TargetIds: {
            /**
             * 删除失败的目标ID。
             */
            TargetId: string[];
        };
    };
}
