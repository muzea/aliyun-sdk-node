export interface TransformDBInstancePayTypeRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 指定购买时长。取值：
     * * 当参数**Period**为**Year**时，UsedTime取值为**1~5**。
     * * 当参数**Period**为**Month**时，UsedTime取值为**1~11**。
     * > 若**PayType**=**Prepaid**，需要传入该参数。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 实例变更后的付费类型。取值：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 指定预付费实例为包年或者包月类型。取值：
     * * **Year**：包年
     * * **Month**：包月
     * > 若**PayType**=**Prepaid**，需要传入该参数。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 业务扩展参数。
     * @example `123456789`
     */
    "BusinessInfo"?: string;
    /**
     * 是否开启自动续费。取值：
     * * **true**：开启
     * * **false**：关闭
     * > * 该参数仅在按量付费转包年包月时生效。
     * > * 传入的所有非**true**字符串均会被处理为**false**。
     * @example `true`
     */
    "AutoRenew"?: string;
}
