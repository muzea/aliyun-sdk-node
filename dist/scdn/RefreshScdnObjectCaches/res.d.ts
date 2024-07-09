export interface RefreshScdnObjectCachesResponse {
    /**
     * 刷新返回的任务ID，多个任务ID用逗号（半角）分隔
     * @example `704222904`
     */
    RefreshTaskId: string;
    /**
     * 请求ID
     * @example `D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C`
     */
    RequestId: string;
}
