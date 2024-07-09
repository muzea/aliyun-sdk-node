export interface ListETLsResponse {
    /**
     * Project下总的数据加工数量
     * @example `80`
     */
    total: number;
    /**
     * 当前返回的数据加工数量
     * @example `10`
     */
    count: number;
    /**
     * 数据加工结果列表
     */
    results: any[];
}
