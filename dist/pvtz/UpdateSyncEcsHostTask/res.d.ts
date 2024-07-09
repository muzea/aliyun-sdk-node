export interface UpdateSyncEcsHostTaskResponse {
    /**
     * 唯一请求识别码。
     * @example `test-FC9A-4595-8D96-089D73D7A63D`
     */
    RequestId: string;
    /**
     * 新增和更新主机名同步任务是否成功。
     * - True：成功
     * - False：失败
     * @example `true`
     */
    Success: boolean;
}
