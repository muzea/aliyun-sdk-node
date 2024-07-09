export interface QueryDPUtilizationDetailRequest {
    /**
     * 筛选查询的实例ID，为空时返回所有的使用的实例明细。
     * @example `oss-123123`
     */
    "InstanceId"?: string;
    /**
     * 实例对应的规格。
     * @example `Instancetyp`
     */
    "InstanceSpec"?: string;
    /**
     * 商品code，如ecsRi、scu_bag等。如果填写该字段，则prodCode字段不生效
     * @example `ecsRi`
     */
    "CommodityCode"?: string;
    /**
     * 被抵扣实例的ID，为空时返回所有实例的明细数据。
     * @example `oss-123123`
     */
    "DeductedInstanceId"?: string;
    /**
     * 开始时间，格式：YYYY-MM-dd HH:mm:ss。
     * @example `2019-05-23 12:00:00`
     */
    "StartTime": string;
    /**
     * 结束时间，格式：YYYY-MM-dd HH:mm:ss。
     * @example `2019-05-23 12:00:00`
     */
    "EndTime": string;
    /**
     * 查询从LastToken之后开始返回。第一次查询填null，之后的从结果NextToken获取
     * @example `CAESF***zNTAw`
     */
    "LastToken"?: string;
    /**
     * 每次查询条数，默认为20，最大值为300。
     * @example `20`
     */
    "Limit"?: number;
    /**
     * 是否包含财务云子账号的资源包用量
     * - true：包含
     * - false：不包含
     * @example `true`
     */
    "IncludeShare": boolean;
    /**
     * 产品code，如：ecs
     * @example `oss`
     */
    "ProdCode"?: string;
}
