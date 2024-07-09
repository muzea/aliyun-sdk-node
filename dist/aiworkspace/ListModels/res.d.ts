export interface ListModelsResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 模型列表。
     */
    Models: any[];
    /**
     * 模型总数。
     * @example `15`
     */
    TotalCount: number;
}
