export interface ModifyIpControlRequest {
    /**
     * IP访问控制的ID，代表了唯一的IP控制策略
     * @example `7ea91319a34d48a09b5c9c871d9768b1`
     */
    "IpControlId": string;
    /**
     * IP访问控制名称。支持大小写英文字母、中文、数字、下划线（_）、长度为[4,50]个字符, 且不能以下划线开头。
     * @example `testControl11`
     */
    "IpControlName"?: string;
    /**
     * 描述，不超过200个字符
     * @example `description`
     */
    "Description"?: string;
}
