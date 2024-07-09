export interface GetEpdInventoryConstituteResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 环境影响结果列表。
     */
    data: any[];
}
