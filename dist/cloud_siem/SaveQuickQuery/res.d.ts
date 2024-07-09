export interface SaveQuickQueryResponse {
    /**
     * 是否保存成功，取值：
     * - true：保存成功
     * - false：保存失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `06735F17-1EDE-5212-81A3-8585368F****`
     */
    RequestId: string;
}
