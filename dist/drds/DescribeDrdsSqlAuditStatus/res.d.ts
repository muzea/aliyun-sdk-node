export interface DescribeDrdsSqlAuditStatusResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `DC3ABA3E-0F8A-4596-9104-F5155C******`
     */
    RequestId: string;
    Data: {
        /**
         * 结果集。
         */
        Data: {
            /**
             * 外部投递的SLS LogStore。
             * >仅当开启外部投递时会显示该参数。
             * @example `test`
             */
            ExtraSlsLogStore: string;
            /**
             * 数据库名称。
             * @example `test`
             */
            DbName: string;
            /**
             * 是否支持完整的报表，取值为true或false。
             * @example `true`
             */
            Detailed: string;
            /**
             * 是否开启外部投递，取值为true或false。
             * @example `false`
             */
            ExtraWriteEnabled: boolean;
            /**
             * 是否可用，取值为true或false。
             * @example `true`
             */
            Enabled: string;
            /**
             * 外部投递的Uid。
             * >仅当开启外部投递时会显示该参数。
             * @example `111`
             */
            ExtraAliUid: number;
            /**
             * 外部投递的SLS project。
             * >仅当开启外部投递时会显示该参数。
             * @example `test`
             */
            ExtraSlsProject: string;
        }[];
    };
}
