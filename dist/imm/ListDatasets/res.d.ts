export interface ListDatasetsResponse {
    /**
     * 请求ID。
     * @example `FEEDE356-C928-4A36-951A-6EB5A592****`
     */
    RequestId: string;
    /**
     * 翻页标记。当任务列表总数大于设置的MaxResults时，用于翻页的Token。符合条件的任务列表未全部返回时，此参数才有值。
     * 下一次列出任务列表时将此值作为NextToken传入，将后续的任务列表返回。
     * @example `12345678:immtest:dataset002`
     */
    NextToken: string;
    /**
     * 数据集信息列表。
     */
    Datasets: any[];
}
