export interface DeleteEnvCustomJobResponse {
    /**
     * Id of the request
     * @example `2FC13182-B9AF-4E6B-BE51-72669B7C****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作结果描述
     * @example `success`
     */
    Data: string;
    /**
     * 附加消息
     * @example `message`
     */
    Message: string;
}
