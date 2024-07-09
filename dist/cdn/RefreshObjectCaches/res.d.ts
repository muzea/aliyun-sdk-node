export interface RefreshObjectCachesResponse {
    /**
     * 刷新返回的任务ID，多个任务ID用半角逗号（,）分隔。刷新返回的任务ID会按照以下两条规则对刷新任务做合并：
     * - 同一个域名、同一秒钟提交的刷新任务（URL颗粒度）会被合并为同一个RefreshTaskId。
     * - 同一个域名、同一秒钟提交的刷新任务（URL颗粒度）如果超过2000条，那么会按照每2000条合并为一个RefreshTaskId的方式处理。
     * @example `704222901`
     */
    RefreshTaskId: string;
    /**
     * 请求ID。
     * @example `D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C`
     */
    RequestId: string;
}
