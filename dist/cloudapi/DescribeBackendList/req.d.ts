export interface DescribeBackendListRequest {
    /**
     * 后端服务名称，支持使用*进行模糊查询。
     * @example `test`
     */
    "BackendName"?: string;
    /**
     * 后端服务类型
     * @example `HTTP`
     */
    "BackendType"?: string;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签的key
         * @example `test1`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `value`
         */
        Value: string;
    }[];
}
