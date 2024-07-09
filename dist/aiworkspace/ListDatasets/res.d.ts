export interface ListDatasetsResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 数据集列表。
     */
    Datasets: any[];
    /**
     * 总数。
     * @example `15`
     */
    TotalCount: number;
}
