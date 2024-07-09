export interface DescribeRenewalPriceRequest {
    /**
     * 用于保证请求的幂等性。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例的付费类型。取值：
     * * **Postpaid**：后付费（按量付费）
     * * **Prepaid**：预付费（包年包月）
     * @example `Postpaid`
     */
    "PayType"?: string;
    /**
     * 实例规格。规格详情请参见[主实例规格表](~~26312~~)。默认为实例当前规格。
     * @example `mysql.n2.medium.2c`
     */
    "DBInstanceClass"?: string;
    /**
     * 实例购买时长，取值：
     * * 当参数**TimeType**=**Year**时，取值为 **1~3**。
     * * 当参数**TimeType**=**Month**时，取值为 **1~9**。
     * @example `1`
     */
    "UsedTime": number;
    /**
     * 实例包年包月的类型，取值：
     * * **Year**：包年
     * * **Month**：包月
     * @example `Year`
     */
    "TimeType": string;
    /**
     * 实例个数，默认值：**1**。
     * @example `1`
     */
    "Quantity"?: number;
    /**
     * 订单类型。仅唯一取值：**BUY**。
     * @example `BUY`
     */
    "OrderType"?: string;
    /**
     * 业务扩展参数。
     * @example `121436975448952`
     */
    "BusinessInfo"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute接口获取。
     * @example `rg-acfmx****`
     */
    "ResourceGroupId"?: string;
}
