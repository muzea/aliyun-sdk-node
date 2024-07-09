export interface CreateDatasetRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称，同一个Project下唯一。命名规则如下：
     * - 长度为1~128字符。
     * - 只能包含英文字母，数字，短划线（-）和下划线（_）。
     * - 必须以英文字母和下划线（_）开头。
     * @example `dataset001`
     */
    "DatasetName": string;
    /**
     * 数据集描述信息。长度为1~256个英文或中文字符，默认值为空。
     * @example `immtest`
     */
    "Description"?: string;
    /**
     * 工作流模板ID。更多信息，请参见[工作流模板与算子](~~466304~~)，默认值为空。
     * @example `Official:AllFunction`
     */
    "TemplateId"?: string;
    /**
     * 每个数据集绑定的最大个数。取值范围为1~10，默认值为10。
     * @example `10`
     */
    "DatasetMaxBindCount"?: number;
    /**
     * 每个数据集中文件的最大个数。取值范围为1~100000000，默认值为100000000。
     * @example `100000000`
     */
    "DatasetMaxFileCount"?: number;
    /**
     * 每个数据集中元数据实体的最大个数。默认值为10000000000。
     * @example `10000000000`
     */
    "DatasetMaxEntityCount"?: number;
    /**
     * 每个数据集中元数据关系的最大个数。默认值为100000000000。
     * @example `100000000000`
     */
    "DatasetMaxRelationCount"?: number;
    /**
     * 每个数据集中文件总大小的最大值，超过限制后无法再添加索引。默认值为90000000000000000，单位为字节。
     * @example `90000000000000000`
     */
    "DatasetMaxTotalFileSize"?: number;
}
