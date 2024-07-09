export interface DescribeDrdsParamsResponse {
    /**
     * 查询是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `2F7F8080-9132-4279-85D0-B7E5C4305162`
     */
    RequestId: string;
    /**
     * 参数列表。
     */
    List: {
        /**
         * 参数默认值。
         * @example `1000`
         */
        ParamDefaultValue: string;
        /**
         * 参数级别。
         * @example `INSTANCE`
         */
        ParamLevel: string;
        /**
         * 参数名称。
         * @example `慢SQL阈值`
         */
        ParamName: string;
        /**
         * 参数类型。
         * @example `CONFIG`
         */
        ParamType: string;
        /**
         * 参数值。
         * @example `1000`
         */
        ParamValue: string;
        /**
         * 是否需要重启。
         * @example `true`
         */
        NeedRestart: boolean;
        /**
         * 参数值区间。
         * @example `[1000-900000]`
         */
        ParamRanges: string;
        /**
         * 数据库名称。
         * @example `drds_test`
         */
        DbName: string;
        /**
         * 参数英文名称。
         * @example `SLOW_SQL_TIME`
         */
        ParamEnglishName: string;
        /**
         * 参数描述。
         * @example `慢SQL阈值（单位：ms）`
         */
        ParamDesc: string;
        /**
         * 参数变量名称。
         * @example `slowSqlTime`
         */
        ParamVariableName: string;
    }[];
}
