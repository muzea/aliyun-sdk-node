export interface QueryDataServiceResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `78C1AA2D-9201-599E-A0BA-6FC462E57A95`
     */
    RequestId: string;
    /**
     * 返回接口查询结果。
     */
    Result: {
        /**
         * 请求查询的 SQL。
         * @example `SELECT COMPANY_T_1_.`area` AS D_AREA_2_, COMPANY_T_1_.`city` AS D_CITY_3_, SUM(COMPANY_T_1_.`profit_amt`) AS D_PROFIT_4_ FROM `quickbi_test`.`company_sales_record_copy` AS COMPANY_T_1_ WHERE COMPANY_T_1_.`area` LIKE '%华东%' GROUP BY COMPANY_T_1_.`area`, COMPANY_T_1_.`city` HAVING SUM(COMPANY_T_1_.`order_amt`) > 1 LIMIT 0, 10`
         */
        Sql: string;
        /**
         * 列头。
         */
        Headers: {
            /**
             * 字段类型，用于区分是字段类型为维度或度量字段。
             * @example `StandardDimension`
             */
            Type: string;
            /**
             * 字段的数据类型。一般有
             * number、string、date、datetime、time、geographic。
             * @example `string`
             */
            DataType: string;
            /**
             * 维度字段的粒度。
             * 当请求字段为日期维度或地理维度字段，才会返回该字段，取值范围：
             * - 日期粒度：yearRegion（年）、 monthRegion（月）、weekRegion（周）、dayRegion（日）、hourRegion（时）、minRegion（分）、secRegion（秒）
             * - 地理信息粒度：COUNTRY（国际级）、PROVINCE（省级）、CITY（市级）、XIAN（区县）、REGION（区域）
             * @example `yearRegion`
             */
            Granularity: string;
            /**
             * 字段别名，结果参数values中map数据行的key。
             * @example `area`
             */
            Label: string;
            /**
             * 字段名，对应物理表字段名。
             * @example `具体的物理字段名`
             */
            Column: string;
            /**
             * 聚合操作符。度量字段才会有，例如SUM、AVG和MAX。
             * @example `SUM`
             */
            Aggregator: string;
        }[];
        /**
         * 返回查询到的结果。
         */
        Values: any[];
    };
}
