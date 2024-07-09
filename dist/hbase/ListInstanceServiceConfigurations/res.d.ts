export interface ListInstanceServiceConfigurationsResponse {
    /**
     * 请求ID。
     * @example `5B381E36-BCA3-4377-8638-B65C236617D5`
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
     * @example `42`
     */
    TotalRecordCount: number;
    ConfigureList: {
        /**
         * 配置项列表。
         */
        Config: {
            /**
             * 配置描述。
             * @example `hbase client keyvalue maxsize`
             */
            Description: string;
            /**
             * 当前集群运行中的值。
             * @example `10485760`
             */
            RunningValue: string;
            /**
             * 配置项类型。
             * - INT：整型。
             * - STR： 字符串类型。
             * - FLOAT：单浮点型。
             * @example `INT`
             */
            ConfigureUnit: string;
            /**
             * 配置项名称。
             * @example `hbase#hbase-site.xml#hbase.client.keyvalue.maxsize`
             */
            ConfigureName: string;
            /**
             * 取值范围。
             * @example `R[10485760,52428800]`
             */
            ValueRange: string;
            /**
             * 默认值。
             * @example `10485760`
             */
            DefaultValue: string;
            /**
             * 更改该配置项后是否需要重启
             * - true：重启。
             * - false：不重启。
             * @example `true`
             */
            NeedRestart: string;
        }[];
    };
}
