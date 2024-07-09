export interface CreateInstanceResponse {
    /**
     * 请求ID。
     * @example `C33E160C-BFCA-5719-B958-942850E949F6`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `featureStore-cn-7mz2xfu****`
     */
    InstanceId: string;
    /**
     * 错误码
     * @example `InstanceAlreadyExistsErrorProblem`
     */
    Code: string;
}
