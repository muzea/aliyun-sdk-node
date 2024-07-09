export interface QueryRIUtilizationDetailResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DF58589C-A06C-4224-8615-7797E6474FA3`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `0`
         */
        TotalCount: number;
        DetailList: {
            /**
             * 明细数组。
             */
            DetailList: {
                /**
                 * 被抵扣商品code。
                 * @example `rds`
                 */
                DeductedCommodityCode: string;
                /**
                 * 被抵商品（产品明细）名称。
                 * @example `云数据库RDS`
                 */
                DeductedProductDetail: string;
                /**
                 * 被抵扣实例ID。
                 * @example `safdffghfgh`
                 */
                DeductedInstanceId: string;
                /**
                 * RI或SCU在该时间段的算力或容量总量。
                 * @example `1`
                 */
                DeductFactorTotal: number;
                /**
                 * 实际抵扣对应按量实例的算力或容量。
                 * @example `1`
                 */
                DeductQuantity: number;
                /**
                 * 抵扣系数。 仅当RICommodityCode为ecsRi有效。
                 * @example `24`
                 */
                DeductHours: string;
                /**
                 * 抵扣日期。
                 * @example `2019-05-23 12:00:00`
                 */
                DeductDate: string;
                /**
                 * 预留实例ID。
                 * @example `324253645`
                 */
                RIInstanceId: string;
                /**
                 * 被抵扣实例的规格。
                 * @example `rds.mysql.s3.large`
                 */
                InstanceSpec: string;
            }[];
        };
    };
}
