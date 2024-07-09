export interface ModifyModelRequest {
    /**
     * 模型的名称
     * @example `Test`
     */
    "ModelName": string;
    /**
     * 新的模型定义的描述
     * @example `Model Description`
     */
    "Description"?: string;
    /**
     * 新的模型定义
     * @example `{\"type\":\"object\",\"properties\":{\"id\":{\"format\":\"int64\",\"maximum\":100,\"exclusiveMaximum\":true,\"type\":\"integer\"},\"name\":{\"maxLength\":10,\"type\":\"string\"}}}`
     */
    "Schema"?: string;
    /**
     * 模型所属的分组编号
     * @example `30e792398d6c4569b04c0e53a3494381`
     */
    "GroupId": string;
    /**
     * 新的模型名称
     * @example `NewTest`
     */
    "NewModelName"?: string;
}
