export interface ListFunctionResourcesResponse {
    /**
     * 请求状态: OK/FAIL
     * @example `OK`
     */
    Status: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 符合要求的总记录数
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `"3A809095-C554-5CF5-8FCE-BE19D4673790"`
     */
    RequestId: string;
    /**
     * 返回的错误信息
     * @example `Invalid resource name.`
     */
    Message: string;
    /**
     * 返回的错误码（没有错误为空）
     * @example `Resource.InvalidResourceName`
     */
    Code: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 创建时间 （单位毫秒）
         * @example `1234`
         */
        CreateTime: number;
        /**
         * 资源数据，不同resourceType对应的data结构不同
         */
        Data: {
            /**
             * raw_file类型资源对应的文件内容
             * @example `"abc"`
             */
            Content: string;
            /**
             * feature_generator类型资源对应的特征生成列表
             */
            Generators: {
                /**
                 * 特征生成的类型
                 * @example `combo`
                 */
                Generator: string;
                /**
                 * 输入
                 */
                Input: {
                    /**
                     * 输入特征列表
                     */
                    Features: {
                        /**
                         * 特征名
                         * @example `system_item_id`
                         */
                        Name: string;
                        /**
                         * 特征类型
                         * @example `item`
                         */
                        Type: string;
                    }[];
                };
                /**
                 * 输出的特征名
                 * @example `feature1`
                 */
                Output: string;
            }[];
        };
        /**
         * 资源描述
         * @example `resource description`
         */
        Description: string;
        /**
         * 功能名称
         * @example `rank`
         */
        FunctionName: string;
        /**
         * 修改时间（单位毫秒）
         * @example `1234`
         */
        ModifyTime: number;
        /**
         * 引用的算法实例名称列表
         */
        ReferencedInstances: string[];
        /**
         * 资源名称
         * @example `fg_json`
         */
        ResourceName: string;
        /**
         * 资源类型
         * @example `feature_generator`
         */
        ResourceType: string;
    }[];
    /**
     * 请求耗时（单位毫秒）
     * @example `123`
     */
    Latency: number;
}
