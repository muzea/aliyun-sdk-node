export interface ListDataSourceResponse {
    /**
     * 数据源信息列表
     */
    result: {
        /**
         * 最后修改数据源的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtModified: string;
        /**
         * 创建数据源的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 智能推荐的实例的表名。
         * @example `behavior`
         */
        tableName: string;
        /**
         * 数据源配置参数
         */
        meta: {
            /**
             * oss数据源的bucketName信息
             * @example `airec`
             */
            bucketName: string;
            /**
             * 有访问ODPS权限的accesskey ID。
             * @example `xxx`
             */
            accessKeyId: string;
            /**
             * 数据源类型，当前只支持ODPS。
             * @example `ODPS`
             */
            type: string;
            /**
             * ODPS Partition。例如：ds=20180102
             * @example `ds=20181122`
             */
            partition: string;
            /**
             * ODPS 毫秒数据时间戳。例如：1544112000000
             * @example `1544112000000`
             */
            timestamp: number;
            /**
             * oss数据源的path信息
             * @example `oss://xxx.xxx`
             */
            path: string;
            /**
             * ODPS的table name。
             * @example `test_maxcompute`
             */
            tableName: string;
            /**
             * ODPS 的project name。
             * @example `openrec_gray`
             */
            projectName: string;
        };
    }[];
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 当前请求的RequestID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
