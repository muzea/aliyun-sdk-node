export interface GetSummaryDataResponse {
    /**
     * Id of the request
     * @example `88FC75E3-BFFD-50B3-988D-C08E6B795CFD`
     */
    RequestId: string;
    /**
     * 数据信息。
     */
    Data: {
        /**
         * 最新月份的碳排放量，单位kgCO₂e
         * @example `193.47`
         */
        ThisMonthConsumptionConversion: string;
        /**
         * 最新月份的上一个月的碳排放量，单位kgCO₂e
         * @example `301.83`
         */
        LastMonthConsumptionConversion: string;
        /**
         * 最新月份所在年份的碳排放量，单位kgCO₂e
         * @example `1621.06`
         */
        ThisYearConsumptionConversion: string;
        /**
         * 上一年度同期的累计碳排放量，单位kgCO₂e
         * @example `1074.53`
         */
        LastYearConsumptionConversion: string;
        /**
         * 上一年度全年的碳排放总量，单位kgCO₂e
         * @example `2844.58`
         */
        LastYearConsumptionConversionSum: string;
        /**
         * 最后数据更新时间
         * @example `2023-06-01 00:00:00`
         */
        LatestDataTime: string;
        /**
         * 根据请求时间段统计的碳排放总量，单位kgCO₂e
         * @example `1621.06`
         */
        TotalCarbonConsumptionConversion: string;
        /**
         * 换算汽车碳排放量
         * @example `10`
         */
        CarConsumptionConversion: string;
        /**
         * 换算飞机碳排放量
         * @example `5.2`
         */
        AircraftConsumptionConversion: string;
        /**
         * 换算树木的碳吸收量
         * @example `90.8`
         */
        TreeConsumptionConversion: string;
    };
}
