export interface DescribeModelsRequest {
    /**
     * 指定的分组编号
     * @example `30e792398d6c4569b04c0e53a3494381`
     */
    "GroupId": string;
    /**
     * 模型的名称
     * @example `Test`
     */
    "ModelName"?: string;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 模型ID
     * @example `123`
     */
    "ModelId"?: string;
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
         * @example `value`
         */
        Value: string;
    }[];
}
