export interface DescribeBandwidthPackageAutoRenewAttributeResponse {
    /**
     * 带宽包ID。
     * @example `gbwp-bp1iquvlp8khla5emb3ia`
     */
    InstanceId: string;
    /**
     * 是否开启了自动续费。
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    AutoRenew: boolean;
    /**
     * 自动续费时长。单位：月。取值范围：**1**~**12**。
     * > 仅**AutoRenew**为**true**时，该项生效。
     * @example `1`
     */
    AutoRenewDuration: number;
    /**
     * 带宽包的自动续费状态。
     * - **AutoRenewal**：自动续费。
     * - **Normal**：手动续费。
     * - **NotRenewal**：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的带宽包可以修改成手动续费（**Normal**）后，再自行续费或配置为自动续费（**AutoRenewal**）。
     * > 参数**RenewalStatus**的优先级高于参数**AutoRenew**。如果不配置参数**RenewalStatus**，则默认以参数**AutoRenew**为准。
     * @example `Normal`
     */
    RenewalStatus: string;
    /**
     * 请求ID。
     * @example `B820E9F9-D459-5AE7-8F08-A368B53C1AC3`
     */
    RequestId: string;
}
