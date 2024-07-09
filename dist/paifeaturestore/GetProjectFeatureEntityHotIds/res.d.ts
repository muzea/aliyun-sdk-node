export interface GetProjectFeatureEntityHotIdsResponse {
    /**
     * 请求ID。
     * @example `FFD39C0F-DD8D-51B2-864E-2842206DB0E8`
     */
    RequestId: string;
    /**
     * 热点ID数据。
     * @example `1,2,3`
     */
    HotIds: string;
    /**
     * 热点ID个数。
     * @example `3`
     */
    Count: number;
    /**
     * 下次获取数据的序列。
     * @example `5`
     */
    NextSeqNumber: string;
}
