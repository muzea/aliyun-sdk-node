export interface UpdateAcceleratorAutoRenewAttributeRequest {
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，ClientToken仅支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId": string;
    /**
     * 是否开启了自动续费。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * > **AutoRenew**和**RenewalStatus**不能同时为空。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 全球加速实例的自动续费状态。取值：
     * - **AutoRenewal**：设置为自动续费。
     * - **Normal**：手动续费。
     * - **NotRenewal**：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的全球加速实例可以修改成手动续费（**Normal**）后，再自行续费或配置为自动续费（**AutoRenewal**）。
     * > - **AutoRenew**和**RenewalStatus**不能同时为空。
     * > - 参数**RenewalStatus**的优先级高于参数**AutoRenew**。如果不配置参数**RenewalStatus**，则默认以参数**AutoRenew**为准。
     * @example `Normal`
     */
    "RenewalStatus"?: string;
    /**
     * 自动续费时长。单位：月。
     * 取值范围：**1**~**12**。
     * > 仅**AutoRenew**的为**true**时，该项才生效。
     * @example `1`
     */
    "AutoRenewDuration"?: number;
}
