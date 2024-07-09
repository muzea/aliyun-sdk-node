export interface ListBindingsRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称，获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * - 返回绑定关系的最大个数，取值范围为0~200。
     * - 不设置此参数或者设置为0时，则默认值为100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * - 当绑定关系总数大于设置的MaxResults时，用于翻页的token。
     * - 从NextToken开始按字典序返回绑定关系信息列表。
     * - 第一次调用此接口时，设置为空。
     * @example `immtest:dataset001:examplebucket01`
     */
    "NextToken"?: string;
}
