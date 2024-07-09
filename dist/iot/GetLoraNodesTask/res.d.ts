export interface GetLoraNodesTaskResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务执行状态。
     * - **RUNNING**：任务正在执行中。
     * - **FINISH**：任务已执行完毕。
     * @example `RUNNING`
     */
    TaskState: string;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 注册成功的数量。
     * @example `100`
     */
    SuccessCount: number;
    /**
     * 任务中待注册设备的总数。
     * @example `200`
     */
    TotalCount: number;
    /**
     * 调用成功时，返回的任务ID。
     * @example `625***`
     */
    TaskId: string;
    SuccessDevEuis: {
        SuccessDevEui: string[];
    };
}
