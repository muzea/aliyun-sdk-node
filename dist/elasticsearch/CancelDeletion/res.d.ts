export interface CancelDeletionResponse {
    /**
     * 是否成功恢复实例：
     * - true：是
     * - false：否
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `D682B6B3-B425-46DA-A5FC-5F5C60553622`
     */
    RequestId: string;
}
