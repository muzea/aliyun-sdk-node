export interface ModifyImageRegistryResponse {
    /**
     * 无
     * @example `无`
     */
    Data: any;
    /**
     * 接口调用是否成功。取值：
     * - **true** ：成功
     * - **false** ：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `379a9b8f-107b-4630-9e95-2299a1ea****`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 执行时长。
     * @example `1`
     */
    TimeCost: number;
}
