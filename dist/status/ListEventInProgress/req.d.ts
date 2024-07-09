export interface ListEventInProgressRequest {
    /**
     * 地域id列表：用于查询指定地域中的当前正在发生的未恢复事件（至少指定一个地域id）
     */
    "RegionIds": string[];
}
