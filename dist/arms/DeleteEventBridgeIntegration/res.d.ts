export interface DeleteEventBridgeIntegrationResponse {
    /**
     * 请求ID。
     * @example `2B289756-E791-5842-BCBD-AD414C******`
     */
    RequestId: string;
    /**
     * EventBridge通知集成是否成功删除。
     * - `true`：删除成功。
     * - `false`：删除失败。
     * @example `true`
     */
    IsSuccess: boolean;
}
