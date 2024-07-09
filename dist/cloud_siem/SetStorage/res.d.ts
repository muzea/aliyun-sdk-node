export interface SetStorageResponse {
    /**
     * 是否保存成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `6276D891-58D4-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
