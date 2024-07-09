export interface RestartDrdsInstanceResponse {
    /**
     * 请求ID。
     * @example `A3140FC7-B78B-4D8E-B0C8-926D28******`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 异步任务ID。
     * @example `1`
     */
    TaskId: number;
}
