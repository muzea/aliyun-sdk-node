export interface DeleteDataStreamResponse {
    /**
     * 返回结果：
     * - true：删除数据流成功。
     * - false：删除数据流失败。
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
