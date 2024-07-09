export interface DescribeImageRepoDetailListRequest {
    /**
     * 设置搜索资产的条件。该参数JSON格式，包含以下字段：
     * - **name**：检索项
     * - **value**：检索项值
     * - **logicalExp**：多个检索项值生效的逻辑关系。取值：
     *     - **OR**：表示多个检索项值之间是**或**的关系。
     *     - **AND**：表示多个检索项值之间是**与**的关系。
     * > 您可以调用[DescribeImageRepoCriteria](~~DescribeImageRepoCriteria~~)接口查询支持的搜索条件。
     * @example `[{"name":"vulStatus","value":"YES","logicalExp":"AND"}]`
     */
    "Criteria"?: string;
    /**
     * 设置多个搜索条件间生效的逻辑关系。取值：
     * - **OR**：表示多个条件间为**或**的关系。
     * - **AND**：表示多个条件间为**与**的关系。
     * @example `OR`
     */
    "LogicalExp"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
}
