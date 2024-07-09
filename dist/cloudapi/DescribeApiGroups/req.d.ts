export interface DescribeApiGroupsRequest {
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `be6d2abcc0dd4f749fc2d2edd6567164`
     */
    "GroupId"?: string;
    /**
     * API组名称中，可指定的关键字
     * @example `Traffic`
     */
    "GroupName"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值50，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否启用标签验证
     * @example `true`
     */
    "EnableTagAuth"?: boolean;
    /**
     * 实例ID
     * @example `apigateway-cn-v6419k43245xx`
     */
    "InstanceId"?: string;
    /**
     * 排序，默认值是desc，可选asc，desc
     * - asc：按修改时间升序排列；
     * - desc：按修改时间降序排列
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签的key
         * @example `key`
         */
        Key: string;
        /**
         * 标签的value
         * @example `value`
         */
        Value: string;
    }[];
}
