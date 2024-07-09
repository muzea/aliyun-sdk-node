export interface ContinueDeployServiceInstanceResponse {
    /**
     * 请求ID。
     * @example `82DF27ED-E538-5AC0-A11C-39334A873189`
     */
    RequestId: string;
    /**
     * 校验结果。
     */
    DryRunResult: {
        /**
         * 不允许修改的参数。修改参数一定会引发校验错误。
         * > 仅在DryRun为true时返回结果。
         */
        ParametersNotAllowedToBeModified: string[];
        /**
         * 可能允许修改的参数。 修改参数是否引起校验错误，取决于参数的取值。
         * > 仅在DryRun为true时返回结果。
         */
        ParametersConditionallyAllowedToBeModified: string[];
        /**
         * 允许修改的参数。修改参数不会引发校验错误。
         * > 仅在DryRun为true时返回值。
         */
        ParametersAllowedToBeModified: string[];
    };
    /**
     * 服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    ServiceInstanceId: string;
}
