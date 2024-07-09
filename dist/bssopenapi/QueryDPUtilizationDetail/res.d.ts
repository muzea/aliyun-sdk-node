export interface QueryDPUtilizationDetailResponse {
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
         * 下次请求查询开始标识，填充到request的LastToken字段中。如果返回为null，则标识查询结束
         * @example `CAESF***zNTAw`
         */
        NextToken: string;
        DetailList: {
            /**
             * 明细数组。
             */
            DetailList: {
                /**
                 * 被抵扣实例ID。
                 * @example `oss-123123`
                 */
                DeductedInstanceId: string;
                /**
                 * 预留实例ID。
                 * @example `oss-123123`
                 */
                InstanceId: string;
                /**
                 * 抵扣系数。 仅当CommodityCode为ecsRi有效。
                 * @example `24`
                 */
                DeductHours: number;
                /**
                 * 抵扣实例所属uid
                 * - 共享抵扣：抵扣实例所属uid
                 * - 非共享抵扣：等于uid字段
                 * @example `1111111111`
                 */
                ShareUid: number;
                /**
                 * 抵扣日期。
                 * @example `2019/5/23 12:00`
                 */
                DeductDate: string;
                /**
                 * 被抵扣实例的规格。
                 * @example `rds.mysql.s3.large`
                 */
                InstanceSpec: string;
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
                 * 原始计量量
                 * @example `1`
                 */
                DeductMeasure: number;
                /**
                 * 计量中region,可以是空
                 * @example `cn-hangzhou `
                 */
                Region: string;
                /**
                 * 实际抵扣对应按量实例的算力或容量。
                 * @example `1`
                 */
                DeductQuantity: number;
                /**
                 * RI或SCU在该时间段的算力或容量总量。
                 * @example `1`
                 */
                DeductFactorTotal: number;
                /**
                 * 计费项
                 * @example `PutRequest`
                 */
                ResCode: string;
                /**
                 * 被抵扣实例的uid
                 * @example `1111111111`
                 */
                Uid: number;
            }[];
        };
    };
}
