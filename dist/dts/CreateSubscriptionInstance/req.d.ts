export interface CreateSubscriptionInstanceRequest {
    /**
     * 数据订阅实例所属的地域，无需设置，该参数即将下线。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 地域ID，与订阅对象所在地域保持一致，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 数据订阅的实例类型，取值为：**MySQL**、**PolarDB**、**DRDS**、**Oracle**。
     * > 默认取值为：**MySQL**。
     * @example `MySQL`
     */
    "SourceEndpoint.InstanceType"?: string;
    /**
     * 付费类型。
     * - **Postpaid**：按量付费，默认付费类型。
     * - **Prepaid**：预付费。
     * @example `Prepaid`
     */
    "PayType"?: string;
    /**
     * 预付费实例的计费方式，取值：
     * - **Year**：包年。
     * - **Month**：包月。
     * > 当付费类型为**Prepaid**（预付费）时，该参数才有效且必须传入。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 预付费实例购买时长。
     * - 当计费方式为**Year**（包年）时，取值范围为**1~5**。
     * - 当计费方式为**Month**（包月）时，取值范围为**1~60**。
     * > 当付费类型为**Prepaid**（预付费）时，该参数才有效且必须传入。
     * @example `12`
     */
    "UsedTime"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
