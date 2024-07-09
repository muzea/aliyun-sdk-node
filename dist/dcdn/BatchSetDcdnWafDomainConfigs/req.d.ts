export interface BatchSetDcdnWafDomainConfigsRequest {
    /**
     * 需修改防护状态域名，最多输入50个，多个域名用英文逗号（,）分隔。
     * @example `example.com,example2.com`
     */
    "DomainNames": string;
    /**
     * 防护域名状态，取值：on、off、和空值。
     * - 接入域名时为**on**，此时ClientIpTag的值生效（选默认时为空；选自定义Header时为对应的值）。
     * - 删除域名时为**off**，此时ClientIpTag不生效。
     * - 只修改ClientIpTag时，DefenseStatus为空。
     * @example `on`
     */
    "DefenseStatus"?: string;
    /**
     * 指定的获取IP的Header值，当选择默认Header时，该值为空；选择自定义Header时，该值为用户输入的值。传多个值时需要使用逗号分隔，最多5个。
     * @example `X-Forwarded-For`
     */
    "ClientIpTag"?: string;
}
