export interface RefreshVodObjectCachesResponse {
    /**
     * 刷新返回的任务ID。多个任务ID用半角逗号（,）分隔。
     * 刷新返回的任务 ID 会按照以下两条规则对刷新任务做合并：
     * 同一个域名、同一秒钟提交的刷新任务（URL 颗粒度）会被合并为同一个 RefreshTaskId。
     * 同一个域名、同一秒钟提交的刷新任务（URL 颗粒度）如果超过 2000 条，那么会按照每 2000 条合并为一个 RefreshTaskId 的方式处理。
     * @example `70422*****2904`
     */
    RefreshTaskId: string;
    /**
     * 请求ID。
     * @example `D61E4801-EAFF-4A63-****-FBF6CE1CFD1C`
     */
    RequestId: string;
}
