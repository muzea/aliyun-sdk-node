export interface DescribeMetaListResponse {
    /**
     * 实例名称。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceName: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPageCount: number;
    /**
     * 请求ID。
     * @example `60F9A12A-16B8-4728-B099-4CA38D32C31C`
     */
    RequestId: string;
    /**
     * 本页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 备份中的库表信息列表。
         */
        Meta: {
            /**
             * 表名称。
             * @example `test1`
             */
            Tables: string;
            /**
             * 数据库名称。
             * @example `testdb1`
             */
            Database: string;
            /**
             * 表的大小，单位：KB。
             * @example `64`
             */
            Size: string;
        }[];
    };
}
