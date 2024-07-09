export interface GetStoreViewResponse {
    /**
     * 数据集类型。
     * @example `logstore`
     */
    storeType: string;
    /**
     * 日志库或时序库列表。
     */
    stores: any[];
}
