export interface TransformDBClusterPayTypeRequest {
    /**
     * PolarDB集群ID。
     * @example `pc-bp10gr51qasnl****`
     */
    "DBClusterId": string;
    /**
     * 实例的付费类型。取值：
     * - **Postpaid**：后付费（按量付费）
     * - **Prepaid**：预付费（包年包月）
     * @example `Prepaid`
     */
    "PayType": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 购买时长，取值：
     * - 当**Period**为**Year**时，**UsedTime**取值为1~3。
     * - 当**Period**为**Month**时，**UsedTime**取值为1~9。
     * > 当**PayType**取值**Prepaid**时，需要传入该参数。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 指定预付费实例为包年或者包月类型。取值：
     * - **Year**：包年
     * - **Month**：包月
     * > 当**PayType**取值为**Prepaid**时，需要传入该参数。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm3f4un32****`
     */
    "ResourceGroupId"?: string;
    /**
     * 该参数用于保证请求的幂等性。由客户端生成该参数值，保证在不同请求间该参数值的唯一性。该参数区分大小写、长度不超过64个ASCII字符。
     * @example `6000170000591aed949d0f5********************`
     */
    "ClientToken"?: string;
}
