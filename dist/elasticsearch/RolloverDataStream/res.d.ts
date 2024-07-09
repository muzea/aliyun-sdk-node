export interface RolloverDataStreamResponse {
    /**
     * 返回结果：
     * - true：滚动更新成功。
     * - false：滚动更新失败。
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
}
