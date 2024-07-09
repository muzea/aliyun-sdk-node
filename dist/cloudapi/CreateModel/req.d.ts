export interface CreateModelRequest {
    /**
     * 模型的名称，组内不许重复
     * @example `Test`
     */
    "ModelName": string;
    /**
     * 模型所属的分组编号
     * @example `30e792398d6c4569b04c0e53a3494381`
     */
    "GroupId": string;
    /**
     * 模型的JSON Schema定义
     * @example `{"type":"object","properties":{"id":{"format":"int64","maximum":100,"exclusiveMaximum":true,"type":"integer"},"name":{"maxLength":10,"type":"string"}}}`
     */
    "Schema": string;
    /**
     * 模型定义的描述
     * @example `Model Description`
     */
    "Description"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签的key
         * @example `key`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `123`
         */
        Value: string;
    }[];
}
