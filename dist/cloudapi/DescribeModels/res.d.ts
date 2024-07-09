export interface DescribeModelsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `40306469-2FB5-417A-B723-AF1F4A4FA204`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `1`
     */
    TotalCount: number;
    ModelDetails: {
        /**
         * 由ModelDetail组成的数组格式，返回模型的详细信息
         */
        ModelDetail: {
            /**
             * 模型的最后修改时间
             * @example `2019-01-29T11:07:48Z`
             */
            ModifiedTime: string;
            /**
             * 模型所属的分组编号
             * @example `30e792398d6c4569b04c0e53a3494381`
             */
            GroupId: string;
            /**
             * 模型的定义说明
             * @example `Model Description`
             */
            Description: string;
            /**
             * 模型的定义
             * @example `{\"type\":\"object\",\"properties\":{\"id\":{\"format\":\"int64\",\"maximum\":100,\"exclusiveMaximum\":true,\"type\":\"integer\"},\"name\":{\"maxLength\":10,\"type\":\"string\"}}}`
             */
            Schema: string;
            /**
             * 模型的名称
             * @example `Test`
             */
            ModelName: string;
            /**
             * 模型的创建时间
             * @example `2019-01-29T11:07:48Z`
             */
            CreatedTime: string;
            /**
             * 模型的编号
             * @example `766c0b9538a04bdf974953b5576783ba`
             */
            ModelId: string;
            /**
             * 模型的URI
             * @example `https://apigateway.aliyun.com/models/30e792398d6c4569b04c0e53a3494381/766c0b9538a04bdf974953b5576783ba`
             */
            ModelRef: string;
            Tags: {
                /**
                 * 标签。
                 */
                TagInfo: {
                    /**
                     * 标签键。
                     * @example `ENV`
                     */
                    Key: string;
                    /**
                     * 标签值
                     * @example `ST4`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
