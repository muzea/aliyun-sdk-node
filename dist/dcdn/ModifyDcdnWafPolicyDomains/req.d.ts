export interface ModifyDcdnWafPolicyDomainsRequest {
    /**
     * 防护策略ID，仅支持单个输入。
     * @example `1000001`
     */
    "PolicyId": number;
    /**
     * 绑定方式，取值：
     * - 0：替换
     * - 1：添加
     * - 不填默认替换。
     * > - 仅**BindDomains**有值时生效。当**BindDomains**中存在域名已绑定到默认策略上时，返回错误`Policy.DefaultAndCustom.BindToSameDomain`。
     * > - 当指定策略为默认策略时不生效（仅替换）。
     * @example `0`
     */
    "Method"?: number;
    /**
     * 需绑定指定防护策略的域名，最多输入50个，多个域名用英文逗号（,）分隔。
     * > **BindDomains**和**UnbindDomains**字段二选一。
     * @example `example.com,example2.com`
     */
    "BindDomains"?: string;
    /**
     * 需解绑指定防护策略的域名，最多输入50个，多个域名用英文逗号（,）分隔。
     * > **BindDomains**和**UnbindDomains**字段二选一。
     * @example `example3.com`
     */
    "UnbindDomains"?: string;
}
