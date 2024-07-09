export interface CreateFunctionResourceRequest {
    /**
     * 应用ID
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `rank`
     */
    "functionName": string;
    /**
     * 请求体
     */
    "body"?: {
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
                 * @example `id`
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
                 * @example `item_id_feature`
                 */
                Output: string;
            }[];
        };
        /**
         * 资源描述
         * @example `""`
         */
        Description: string;
        /**
         * 资源名称
         * @example `fg_jsoon`
         */
        ResourceName: string;
        /**
         * 资源类型
         * @example `feature_generator`
         */
        ResourceType: string;
    };
}
