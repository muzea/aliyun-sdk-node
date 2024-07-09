export interface ListRankingModelTemplatesRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 指定页码，默认为1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]。
     * @example `10`
     */
    "size"?: number;
}
