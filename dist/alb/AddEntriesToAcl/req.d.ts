export interface AddEntriesToAclRequest {
    /**
     * ACL实例ID。
     * @example `acl-hp34s2h0xx1ht4nwo****`
     */
    "AclId": string;
    /**
     * 添加的访问控制条目列表。单次调用最多支持20个访问控制条目。
     */
    "AclEntries": {
        /**
         * 访问控制条目备注描述，长度为2~256个字符，可包含英文字母、数字、中文、半角逗号（,）、半角句号（.）、半角分号（;）、正斜线（/）、at（@）、下划线（_）和短划线（-）。
         * 单次调用最多支持20个访问控制条目。
         * @example `test-entry`
         */
        Description: string;
        /**
         * 访问控制条目IP地址段。
         * 单次调用最多支持20个访问控制条目。
         * @example `10.0.1.0/24`
         */
        Entry: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会在访问控制策略组中添加IP条目。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
}
