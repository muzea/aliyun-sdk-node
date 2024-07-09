export interface UpdateProjectRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 服务角色，授权给IMM服务以访问其他云资源（例如OSS）的权限。
     * 如果要自定义服务角色，您可以通过RAM控制台创建普通服务角色并为角色授权。具体操作，请分别参见[创建普通服务角色](~~116800~~)和[为角色授权](~~116147~~)。
     * @example `AliyunIMMDefaultRole`
     */
    "ServiceRole"?: string;
    /**
     * 项目描述信息。长度为1~256个英文或中文字符。
     * @example `immtest`
     */
    "Description"?: string;
    /**
     * 工作流模板ID。更多信息，请参见[工作流模板与算子](~~466304~~)。
     * @example `AliyunIMMDefaultRole`
     */
    "TemplateId"?: string;
    /**
     * 项目中数据集的最大个数。取值范围为1~1000000000。
     * @example `1000000000`
     */
    "ProjectMaxDatasetCount"?: number;
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
     * 每个数据集中元数据实体的最大个数。
     * >预留参数，使用中并不做实际限制。
     * @example `10000000000`
     */
    "DatasetMaxEntityCount"?: number;
    /**
     * 每个数据集中元数据关系的最大个数。
     * >预留参数，使用中并不做实际限制。
     * @example `100000000000`
     */
    "DatasetMaxRelationCount"?: number;
    /**
     * 每个数据集中文件总大小的最大值，超过限制后无法再添加索引。单位为字节。
     * @example `90000000000000000`
     */
    "DatasetMaxTotalFileSize"?: number;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值
         * @example `TestValue`
         */
        Value: string;
    }[];
}
