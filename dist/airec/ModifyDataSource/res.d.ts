export interface ModifyDataSourceResponse {
    /**
     * 返回结果详情。
     */
    result: {
        /**
         * 最后修改数据源的时间。
         * @example `2020-04-23T06:08:48.000Z`
         */
        gmtModified: string;
        /**
         * 创建时间的时间戳。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 智能推荐的实例的表名。
         * @example `behavior`
         */
        tableName: string;
        /**
         * 数据源配置参数。
         */
        meta: {
            /**
             * oss数据源的bucketName信息。
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
             * ODPS Partition。例如：ds=20180102。
             * @example `ds=20181122`
             */
            partition: string;
            /**
             * ODPS 毫秒数据时间戳。例如：1544112000000。
             * @example `1544112000000`
             */
            timestamp: number;
            /**
             * oss数据源的信息。
             * @example `oss://xxx.xxx`
             */
            path: string;
            /**
             * ODPS 数据源的table name。
             * @example `table01`
             */
            tableName: string;
            /**
             * ODPS数据源的 project name。
             * @example `airecproject`
             */
            projectName: string;
        };
    };
    /**
     * 错误码。
     * @example `200`
     */
    code: string;
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情。
     * @example `successful`
     */
    message: string;
}
