export interface CreateMountTargetResponse {
    /**
     * 请求ID。
     * @example `70EACC9C-D07A-4A34-ADA4-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 挂载点状态。包括：
     * - active：可用
     * - inactive：不可用
     * - pending：任务处理中
     * - deleting：删除中
     * @example `pending`
     */
    Status: string;
}
