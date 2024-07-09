export interface ListInstanceServiceConfigHistoriesResponse {
    /**
     * 请求Id。
     * @example `658C1549-2C02-4FD9-9490-EB3B285F9DCA`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面大小。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    ConfigureHistoryList: {
        /**
         * 配置项修改历史列表。
         */
        Config: {
            /**
             * 是否已起作用。很多参数需要重启后才可生效。
             * @example `false`
             */
            Effective: string;
            /**
             * 修改前的值。
             * @example `10485760`
             */
            OldValue: string;
            /**
             * 该条记录创建时间，也就是该配置项的修改时间。
             * @example `1608708923000`
             */
            CreateTime: string;
            /**
             * 修改后的值。
             * @example `10485770`
             */
            NewValue: string;
            /**
             * 配置项名称。
             * @example `hbase#hbase-site.xml#hbase.client.keyvalue.maxsize`
             */
            ConfigureName: string;
        }[];
    };
}
