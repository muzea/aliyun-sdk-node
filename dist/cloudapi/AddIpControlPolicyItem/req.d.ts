export interface AddIpControlPolicyItemRequest {
    /**
     * IP访问控制的ID，代表了唯一的IP控制策略。
     * @example `7ea91319a34d48a09b5c9c871d9768b1`
     */
    "IpControlId": string;
    /**
     * 指定策略限制的AppId，只有控制类型为白名单（即IpControlType为ALLOW）时，才可同时增加AppId的限制。
     * - 一次只能增加一个。
     * - 为空表示没有AppId的限制。
     * - 当该值不为空，表示在有IP限制的同时，还限制访问的AppId。
     * - 请注意：当该值不为空，如果API的安全认证为“无认证”，将限制所有的API调用。
     * - 当黑名单（IpControlType为REFUSE）时，该值不为空，API网关会自动忽略该值，只设置IP的限制。
     * @example `1111111`
     */
    "AppId"?: string;
    /**
     * 具体策略的IP或者IP段，多个请用英文分号（;）分割，最多添加10个。
     * @example `113.125.1.101;101.11.1.1`
     */
    "CidrIp": string;
}
