export interface GetMetaDBTableListResponse {
    /**
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 引擎实例下的表信息。
     */
    Data: {
        /**
         * 请求的数据页数，用于翻页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大为100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 计算引擎的总数。
         * @example `20`
         */
        TotalCount: number;
        /**
         * 引擎实例下的表列表。
         */
        TableEntityList: {
            /**
             * 表的名称。
             * @example `tname`
             */
            TableName: string;
            /**
             * 表的唯一标识。
             * @example `odps.engine_name.tname`
             */
            TableGuid: string;
            /**
             * 数据库的名称。
             * @example `abc`
             */
            DatabaseName: string;
        }[];
    };
}
