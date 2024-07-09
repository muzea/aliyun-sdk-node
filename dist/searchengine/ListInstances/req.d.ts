export interface ListInstancesRequest {
    /**
     * 指定页码，默认为：1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId"?: string;
    /**
     * 通过实例描述称进行过滤，支持模糊匹配。
     * @example `问天引擎实例`
     */
    "description"?: string;
    /**
     * 资源组id。
     * @example `rg-aekzgpiswzbksdi`
     */
    "resourceGroupId"?: string;
    /**
     * 实例类型，vector(向量索引版)，engine(召回引擎版)
     * @example `vector`
     */
    "edition"?: string;
    /**
     * 标签。
     */
    "tags"?: {
        /**
         * 标签键
         * @example `opensearch`
         */
        key: string;
        /**
         * 标签值
         * @example `opensearch`
         */
        value: string;
    }[];
}
