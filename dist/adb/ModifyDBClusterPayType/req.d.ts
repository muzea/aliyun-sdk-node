export interface ModifyDBClusterPayTypeRequest {
    /**
     * 付费类型。取值说明：
     * - **Postpaid**：按量付费。
     * - **Prepaid**：预付费（包年包月）。
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 指定预付费集群为包年或包月类型。取值说明：
     * - **Year**：包年类型。
     * - **Month**：包月类型。
     * > PayType为Prepaid（即预付费（包年包月））时，本参数为必填参数。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 预付费集群的购买时长。取值说明：
     * - 当Period为Year时，UsedTime取值范围为：1、2、3、5（整数）。
     * - 当Period为Month时，UsedTime取值范围为：1~11（整数）。
     * > - PayType为Prepaid（即预付费（包年包月））时，本参数为必填参数。
     * > - 购买的时间越长价格越优惠，购买1年的实际价格会比购买10个月或11个月更划算。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 集群ID。
     * @example `am-bp11q28kvl688****`
     */
    "DbClusterId": string;
}
