export interface ApplyDataModelConfigInfoResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 响应内容。
     * @example `无`
     */
    Data: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `180E5D71-FF24-5E87-9746-3DA837E686FE`
     */
    RequestId: string;
    /**
     * 是否成功。-**true**：是。-**false**：否。
     * @example `true`
     */
    Success: boolean;
}
