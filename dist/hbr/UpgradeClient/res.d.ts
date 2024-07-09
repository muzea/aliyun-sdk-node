export interface UpgradeClientResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `22D97921-16BD-547C-B175-1DC25B1DCD73`
     */
    RequestId: string;
    /**
     * 异步任务ID。可以通过调用DescribeTask获取任务结果。
     * @example `t-000i97jujk0z58a2ignf`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
