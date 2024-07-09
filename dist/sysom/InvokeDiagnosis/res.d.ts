export interface InvokeDiagnosisResponse {
    /**
     * 状态码
     * - `code == Success` 则代表授权成功；
     * - 其它状态码代表授权失败，授权失败时查看 `message` 字段获取详细的错误信息；
     * @example `Success`
     */
    code: string;
    /**
     * 错误信息
     * - 如果 `code == Success`，则本字段为空；
     * - 否则本字段包含请求错误信息。
     * @example `SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom`
     */
    message: string;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 诊断任务ID，可以凭借该ID调用 `GetDiagnosisResult` 接口查询诊断结果
         * @example `ihqhAcrt`
         */
        task_id: string;
    };
    /**
     * 请求 RequestId
     * @example `43A910E9-A739-525E-855D-A32C257F1826`
     */
    request_id: string;
}
