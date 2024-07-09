export interface EnrollAccountRequest {
    /**
     * 账号名称前缀。
     * - 如果是新建资源账号，则该参数必填。
     * - 如果是注册应用到已有账号，则该参数不需要填写。
     * @example `test-account`
     */
    "AccountNamePrefix"?: string;
    /**
     * 账号显示名称。
     * - 如果是新建资源账号，则该参数必填。
     * - 如果是注册应用到已有账号，则该参数不需要填写。
     * @example `test-account`
     */
    "DisplayName"?: string;
    /**
     * 父资源夹ID。
     * - 如果是新建资源账号，该参数不填，则默认创建在Root资源夹下。
     * - 如果是注册应用到已有账号，则该参数不需要填写。
     * @example `fd-5ESoku****`
     */
    "FolderId"?: string;
    /**
     * 结算账号ID。
     * - 如果是新建资源账号，该参数不填，则默认为自主结算。
     * - 如果是注册应用到已有账号，则该参数不需要填写。
     * @example `19534534552****`
     */
    "PayerAccountUid"?: number;
    /**
     * 注册账号ID。
     * - 如果是新建资源账号，则该参数不需要填写。
     * - 如果是注册应用到已有账号，则该参数必填。
     * @example `12868156179****`
     */
    "AccountUid"?: number;
    /**
     * 基线项配置数组。
     * 如果传递了该参数，那么基线项的配置将和指定账号基线进行合并。相同的基线项将以该参数的配置为准。建议您将该参数置空，通过`BaselineId`参数指定账号基线，通过现有基线将配置应用到账号上。
     */
    "BaselineItems"?: {
        /**
         * 基线项名称。
         * @example `ACS-BP_ACCOUNT_FACTORY_VPC`
         */
        Name: string;
        /**
         * 基线项版本。
         * @example `1.0`
         */
        Version: string;
        /**
         * 基线项配置。
         * @example `{\"Notifications\":[{\"GroupKey\":\"account_msg\",\"Contacts\":[{\"Name\":\"aa\"}],\"PmsgStatus\":1,\"EmailStatus\":1,\"SmsStatus\":1}]}`
         */
        Config: string;
        /**
         * 是否跳过基线项。取值：
         * - false：不跳过。
         * - true：跳过。
         * @example `false`
         */
        Skip: boolean;
    }[];
    /**
     * 基线ID。
     * 置空则默认使用系统默认基线。
     * @example `afb-bp1durvn3lgqe28v****`
     */
    "BaselineId"?: string;
    /**
     * 成员的身份类型。取值：
     * - resell（默认值）：分销账号。创建的成员将自动与您的分销商建立分销关系，同时您需要使用管理账号为新成员付款。
     * - non_resell：非分销账号。创建的成员为阿里云普通账号，与您当前的分销商无关联关系，该账号直接从阿里云购买资源，需自主付款。
     * >
     * > 该参数仅支持国际站分销客户。
     * @example `resell`
     */
    "ResellAccountType"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
