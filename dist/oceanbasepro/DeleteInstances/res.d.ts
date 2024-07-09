export interface DeleteInstancesResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 预检查请求的结果。
         * - 如果 DryRun 填写为 true，当预检查请求通过，则 DryRunResult 返回 true，否则返回相应的错误码信息。
         * - 如果 DryRun 填写为 false, 则表示不进行预检查, DryRunResult 默认返回 false。
         * @example `false`
         */
        DryRunResult: boolean;
    };
}
