export interface CreateResourceAccountRequest {
    /**
     * 成员显示名称。
     * 长度范围：2~50个字符或汉字。
     * 格式：允许输入汉字、英文字母、数字、下划线（_）、半角句号（.）、短划线（-）和空格。
     * 成员显示名称在资源目录内必须唯一。
     * @example `Dev`
     */
    "DisplayName": string;
    /**
     * 父资源夹ID。
     * @example `fd-r23M55****`
     */
    "ParentFolderId"?: string;
    /**
     * 结算账号ID。置空则采用新创建的成员自主结算。
     * @example `12323344****`
     */
    "PayerAccountId"?: string;
    /**
     * 账号名称前缀。置空则系统随机生成。
     * <props="china">长度范围：2~50个字符或汉字。</props>
     * <props="intl">长度范围：2~37个字符。</props>
     * 格式：允许输入英文字母、数字和特殊字符`_.-`，必须以英文字母或数字开头和结尾，且不能输入连续的特殊字符`_.-`。
     * 完整账号名称的格式为<AccountNamePrefix>@<ResourceDirectoryId>.aliyunid.com，例如：`alice@rd-3G****.aliyunid.com`
     * 账号名称在资源目录内必须唯一。
     * @example `alice`
     */
    "AccountNamePrefix"?: string;
    /**
     * 成员的标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 成员的身份类型。取值：
     * - resell（默认值）：分销账号。创建的成员将自动与您的分销商建立分销关系，同时您需要使用管理账号为新成员付款。
     * - non_resell ：非分销账号。创建的成员为阿里云普通账号，与您当前的分销商无关联关系，该账号直接从阿里云购买资源，需自主付款。
     * > 该参数仅支持国际站分销客户。
     * @example `resell`
     */
    "ResellAccountType"?: string;
}
