export interface DescribeFabricPeerLogsResponse {
    /**
     * 请求ID
     * @example `78A09CAF-4944-4CAE-B25D-F5B6BA27D9F5`
     */
    RequestId: string;
    /**
     * 日志记录
     * @example `xxxx`
     */
    Result: string;
    /**
     * 返回状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态代码
     * @example `200`
     */
    ErrorCode: number;
}
