export interface ListSystemRuleAggregationTypesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1427F3BE-8A7E-57F9-BD4E-590B00D2****`
     */
    RequestId: string;
    /**
     * 查询到的规则聚类列表。
     */
    AggregationTypeList: {
        /**
         * 规则聚类ID。
         * @example `1`
         */
        Id: number;
        /**
         * 规则聚类名称。
         * @example `远程控制****`
         */
        Name: string;
    }[];
}
