export interface UpdateDatasetRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称, 获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 数据集描述信息。
     * @example `immtest`
     */
    "Description"?: string;
    /**
     * 工作流模板ID。更多信息，请参见[工作流模板与算子](~~466304~~)。
     * @example `Official:AllFunction`
     */
    "TemplateId"?: string;
    /**
     * 每个数据集绑定的最大个数。取值范围为1~10。
     * @example `10`
     */
    "DatasetMaxBindCount"?: number;
    /**
     * 每个数据集中文件的最大个数。取值范围为1~100000000。
     * @example `100000000`
     */
    "DatasetMaxFileCount"?: number;
    /**
     * 每个数据集中元数据实体（包括数据文件、文件关系、聚类分组等）的最大个数，最大取值为2^63-1。
     * >预留参数，使用中并不做实际限制。
     * @example `10000000000`
     */
    "DatasetMaxEntityCount"?: number;
    /**
     * 每个数据集中元数据关系的最大个数，最大取值为2^63-1。
     * >预留参数，使用中并不做实际限制。
     * @example `100000000000`
     */
    "DatasetMaxRelationCount"?: number;
    /**
     * 每个数据集中文件总大小的最大值，超过限制后无法再添加索引，最大取值为2^63-1，单位为字节。
     * @example `90000000000000000`
     */
    "DatasetMaxTotalFileSize"?: number;
}
