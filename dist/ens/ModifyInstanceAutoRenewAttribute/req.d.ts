export interface ModifyInstanceAutoRenewAttributeRequest {
    /**
     * 实例ID，多个用分号（;）分隔。
     * @example `i-5ci7l7k1m9m2zmhp4iw3o****`
     */
    "InstanceIds": string;
    /**
     * 是否要自动续费。取值：**True****False**（默认值）。
     * @example `True`
     */
    "AutoRenew": string;
    /**
     * 设置实例自动续费时长。单位：月，取值：1~9、12。如果AutoRenew为true时，该参数必须有值。
     * @example `1`
     */
    "Duration"?: string;
    /**
     * 设置是否不再续费，参数**RenewalStatus**的优先级高于参数**AutoRenew**。如果不传入参数**RenewalStatus**，则默认以参数**AutoRenew**为准。
     * - AutoRenewal：设置为自动续费。
     * - Normal：取消自动续费。
     * - NotRenewal：不再续费。
     * 传入该值后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ENS实例可以更改成待续费（Normal）后，再自行续费或设置为自动续费。
     * @example `AutoRenewal`
     */
    "RenewalStatus"?: string;
}
