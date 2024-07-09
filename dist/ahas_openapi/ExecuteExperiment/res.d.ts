export interface ExecuteExperimentResponse {
    /**
     * 执行演练生成的演练任务实例ID
     * @example `1234567890123456789`
     */
    TaskId: string;
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 接口反馈错误编码
     * @example `无`
     */
    Code: string;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
}
