export interface ListStackGroupOperationResultsResponse {
    /**
     * 操作结果总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `14A07460-EBE7-47CA-9757-12CC4761D47A`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 分页查询时设置的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 操作结果详情列表。
     */
    StackGroupOperationResults: {
        /**
         * 执行状态。
         * 取值：
         * - RUNNING：操作正在进行中。
         * - SUCCEEDED：操作成功。
         * - FAILED：操作失败。
         * - STOPPING：操作正在停止中。
         * - STOPPED：操作已停止。
         * @example `SUCCEEDED`
         */
        Status: string;
        /**
         * 状态原因描述。
         * >仅当资源栈实例状态为已过期（OUTDATED）时，才会返回该参数。
         * @example `User initiated operation`
         */
        StatusReason: string;
        /**
         * 资源栈实例所属目标账号ID。
         * - 自助管理权限模式下，该账号是阿里云账号。
         * - 服务管理权限模式下，该账号是资源目录的成员账号。
         * >关于目标账号的更多信息，请参见[概览](~~154578~~)。
         * @example `175458090349****`
         */
        AccountId: string;
        /**
         * 资源栈实例所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 资源目录的资源夹ID。
         * >仅限使用服务管理权限模式的资源栈组，才会返回该参数。
         * @example `"fd-4PvlVLOL8v"`
         */
        RdFolderId: string;
    }[];
}
