export interface CreateInstanceRequest {
    /**
     * 实例名称，长度4-32个字符。
     * @example `测试实例`
     */
    "Name": string;
    /**
     * 实例的描述，长度不超过256个字符。
     * @example `云呼叫中心的测试实例。`
     */
    "Description"?: string;
    /**
     * 呼叫中心实例的二级域名，即实例ID，全局唯一。长度为4-48个字符，仅可包含大小写英文字母、数字、下划线（_）和短横线（-）。
     * @example `ccc-test`
     */
    "DomainName": string;
    /**
     * 待创建的呼叫中心实例的号码列表，要求当前账户拥有号码使用权且号码未被其他实例使用。
     * @example `["0830011xxxx", "0830312xxxx"]`
     */
    "NumberList": string;
    /**
     * 作为该呼叫中心实例管理员的RAM ID列表，成功创建后，该列表下的RAM ID将自动以管理员的身份导入到新创建的实例中。
     * @example `["24861380681070****","105980354482****"]`
     */
    "AdminRamIdList": string;
}
