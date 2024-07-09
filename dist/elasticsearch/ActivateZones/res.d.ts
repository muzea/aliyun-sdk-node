export interface ActivateZonesResponse {
    /**
     * 返回结果：
     * - true：恢复可用区成功
     * - false：恢复可用区失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5A5D8E74-565C-43DC-B031-29289FA****`
     */
    RequestId: string;
}
