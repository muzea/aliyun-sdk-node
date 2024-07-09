export interface ListResourceGroupsRequest {
    /**
     * 需要查看的资源组类型ID。取值如下：
     * - 0（DataWorks）
     * - 1（调度）
     * - 2（MaxCompute）
     * - 3（PAI）
     * - 4（数据集成）
     * - 7 （下单购买独享调度资源组时，生成的购买资源ID）
     * - 9 （dataService）
     * - 默认取值为1（调度）。
     * 当取值表示引擎时，查看的资源组列表为购买该类型引擎时创建的资源组列表。
     * @example `3`
     */
    "ResourceGroupType"?: number;
    /**
     * 关键字。用于模糊查询资源组名称和资源组标识。
     * @example `abc`
     */
    "Keyword"?: string;
    /**
     * 资源组的类别。取值如下：
     * - default：默认值，公共资源组。
     * - single：独享资源组。
     * @example `default`
     */
    "BizExtKey"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmzbn7pti3zfa`
     */
    "ResourceManagerResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `Env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `Test`
         */
        Value: string;
    }[];
}
