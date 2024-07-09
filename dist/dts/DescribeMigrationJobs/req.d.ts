export interface DescribeMigrationJobsRequest {
    /**
     * 数据迁移实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 每页记录的数据迁移实例的数量，取值：**30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 迁移实例名称。
     * > 支持模糊查询。
     * @example `MySQL迁移`
     */
    "MigrationJobName"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    /**
     * 数据迁移实例的标签，作为过滤项，当此项不为空时，仅拥有此标签的实例任务会返回。
     */
    "Tag"?: {
        /**
         * 标签键，可以通过调用[ListTagResources](~~191187~~)接口查询。
         * > - N表示第几个标签的键。例如：Tag.1.Key表示第一个标签的键；Tag.2.Key表示第二个标签的键。可以同时传入1~20个标签键。
         * - 该参数传入时不允许传入空字符串。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签的值，可以通过调用[ListTagResources](~~191187~~)接口查询。
         * >- N表示第几个标签的值。例如：Tag.1.Value表示第一个标签的值；Tag.2.Value表示第二个标签的值。可以同时传入1~20个标签值。
         * - 允许传入空字符串。
         * @example `testvalue1`
         */
        Value: string;
    }[];
    "ResourceGroupId"?: string;
}
