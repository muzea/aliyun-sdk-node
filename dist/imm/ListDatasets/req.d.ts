export interface ListDatasetsRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 返回数据集的最大个数，取值范围为0~200。
     * 不设置此参数或者设置为0时，则默认值为100。
     * @example `1`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记。
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。从NextToken开始按字典序返回文件信息列表。
     * > 在一次查询中首次调用此接口时，将此值设置为空。
     * @example `12345678:immtest:dataset002`
     */
    "NextToken"?: string;
    /**
     * 数据集名称前缀。
     * @example `dataset`
     */
    "Prefix"?: string;
}
