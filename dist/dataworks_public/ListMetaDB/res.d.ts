export interface ListMetaDBResponse {
    /**
     * 请求ID。
     * @example `abc`
     */
    RequestId: string;
    /**
     * 数据库的信息。
     */
    DatabaseInfo: {
        /**
         * 数据库的总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 数据库列表。
         */
        DbList: {
            /**
             * 数据库的类型。
             * @example `HIVE`
             */
            Type: string;
            /**
             * 创建数据库的时间。该结果显示为时间戳，您可以根据使用的时区将时间戳转换为相应日期。
             * @example `1388776825`
             */
            CreateTimeStamp: number;
            /**
             * 数据库的唯一标识。
             * @example `32342`
             */
            UUID: string;
            /**
             * 更新数据库的时间。
             * @example `1388776837`
             */
            ModifiedTimeStamp: number;
            /**
             * 数据库的名称。
             * @example `name`
             */
            Name: string;
            /**
             * Owner的ID。
             * @example `1232`
             */
            OwnerId: string;
            /**
             * 存储数据库的地址。
             * @example `hdfs://localhost:777/user/hadoop/test.txt`
             */
            Location: string;
        }[];
    };
}
