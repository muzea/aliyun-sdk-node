export interface CreateModelResponse {
    /**
     * 本次创建模型的最后修改时间
     * @example `2019-01-29T09:33:01Z`
     */
    ModifiedTime: string;
    /**
     * 请求ID
     * @example `4173F95B-360C-460C-9F6C-4A960B904411`
     */
    RequestId: string;
    /**
     * 本次创建模型的描述
     * @example `Model Description`
     */
    Description: string;
    /**
     * 本次创建模型所属的分组编号
     * @example `30e792398d6c4569b04c0e53a3494381`
     */
    GroupId: string;
    /**
     * 本次创建模型的模型定义
     * @example `{\"type\":\"object\",\"properties\":{\"id\":{\"format\":\"int64\",\"maximum\":100,\"exclusiveMaximum\":true,\"type\":\"integer\"},\"name\":{\"maxLength\":10,\"type\":\"string\"}}}`
     */
    Schema: string;
    /**
     * 本次创建模型的名称
     * @example `Test`
     */
    ModelName: string;
    /**
     * 本次创建模型的创建时间
     * @example `2019-01-29T09:33:01Z`
     */
    CreatedTime: string;
    /**
     * 本次创建模型的ID
     * @example `766c0b9538a04bdf974953b5576783ba`
     */
    ModelId: string;
    /**
     * 本次创建模型的所属区域
     * @example `cn-qingdao`
     */
    RegionId: string;
    /**
     * 本次创建模型的URI
     * @example `https://apigateway.aliyun.com/models/30e792398d6c4569b04c0e53a3494381/766c0b9538a04bdf974953b5576783ba`
     */
    ModelRef: string;
}
