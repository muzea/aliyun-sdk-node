export interface ModifyDBInstancePayTypeRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example ` rm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 指定购买时长。取值：
     * - 当参数**Period**为**Year**时，**UsedTime**取值为1~5。
     * - 当参数**Period**为**Month**时，**UsedTime**取值为1~11。
     * @example `2`
     */
    "UsedTime"?: number;
    /**
     * 付费类型，固定配置为**Prepaid**，表示包年包月。
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 指定预付费实例为包年或者包月类型。
     * - **Year**：包年
     * - **Month**：包月
     * @example `Year`
     */
    "Period": string;
}
