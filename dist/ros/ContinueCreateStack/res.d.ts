export interface ContinueCreateStackResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    StackId: string;
    /**
     * 校验结果。
     */
    DryRunResult: {
        /**
         * 允许修改的参数。
         */
        ParametersAllowedToBeModified: string[];
        /**
         * 可能允许修改的参数。
         */
        ParametersConditionallyAllowedToBeModified: string[];
        /**
         * 不允许修改的参数。
         */
        ParametersNotAllowedToBeModified: string[];
    };
}
