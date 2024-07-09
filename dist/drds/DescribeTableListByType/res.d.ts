export interface DescribeTableListByTypeResponse {
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 第几页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `B360F47B-59E3-4D1C-BA03-6BFB1C993F88`
     */
    RequestId: string;
    /**
     * 总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回集合。
     */
    List: {
        /**
         * 属性。
         * @example `single`
         */
        Property: string;
        /**
         * 表名称。
         * @example `employee_split`
         */
        TableName: string;
    }[];
}
