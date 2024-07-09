export interface ListRankingModelsRequest {
    /**
     * 实例ID。
     * @example `airec-test001`
     */
    "instanceId": string;
    /**
     * 模型id
     * @example `xxx`
     */
    "rankingModelId"?: string;
    /**
     * 指定页码，默认为：1
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]
     * @example `10`
     */
    "size"?: number;
}
