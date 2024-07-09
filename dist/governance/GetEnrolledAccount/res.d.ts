export interface GetEnrolledAccountResponse {
    /**
     * 请求ID。
     * @example `768F908D-A66A-5A5D-816C-20C93CBBFEE3`
     */
    RequestId: string;
    /**
     * 账号ID。
     * @example `12868156179*****`
     */
    AccountUid: number;
    /**
     * 账号显示名称。
     * @example `test-account`
     */
    DisplayName: string;
    /**
     * 所属的资源目录管理账号ID。
     * @example `19534534552*****`
     */
    MasterAccountUid: number;
    /**
     * 父资源夹ID。
     * @example `fd-5ESoku****`
     */
    FolderId: string;
    /**
     * 结算账号ID。
     * @example `19534534552*****`
     */
    PayerAccountUid: number;
    /**
     * 注册账号时的输入参数。
     */
    Inputs: {
        /**
         * 账号名称前缀。
         * @example `test-account`
         */
        AccountNamePrefix: string;
        /**
         * 账号显示名称。
         * @example `test-account`
         */
        DisplayName: string;
        /**
         * 父资源夹ID。
         * @example `fd-5ESoku****`
         */
        FolderId: string;
        /**
         * 结算账号ID。
         * @example `19534534552*****`
         */
        PayerAccountUid: number;
        /**
         * 账号ID。
         * @example `12868156179*****`
         */
        AccountUid: number;
        /**
         * 基线项列表。
         */
        BaselineItems: {
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
             * @example `{\"Contacts\":[{\"Name\":\"governance\",\"Email\":\"wibud5210+10@gmail.com\",\"Mobile\":\"1234\",\"Position\":\"Other\"}]}`
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
    };
    /**
     * 基线实施进度。
     */
    Progress: {
        /**
         * 基线项名称。
         * @example `ACS-BP_ACCOUNT_FACTORY_VPC`
         */
        Name: string;
        /**
         * 基线项实施状态。取值：
         * - Pending：等待中。
         * - Running：实施中。
         * - Finished：实施成功。
         * - Failed：实施失败。
         * @example `Running`
         */
        Status: string;
    }[];
    /**
     * 创建时间。
     * @example `2021-11-01T02:38:27Z`
     */
    CreateTime: string;
    /**
     * 更新时间
     * @example `2021-11-01T02:38:27Z`
     */
    UpdateTime: string;
    /**
     * 账号注册状态。取值：
     * - Pending：等待中。
     * - Running：创建实施中。
     * - Finished：创建成功。
     * - Failed：创建失败。
     * - Scheduling：调度中。
     * - ScheduleFailed：调度失败。
     * @example `Finished`
     */
    Status: string;
    /**
     * 错误信息。
     * > 当`Status`为`Failed`或`ScheduleFailed`时，返回该错误信息。
     */
    ErrorInfo: {
        /**
         * 错误码。
         * @example `EntityAlreadyExists.Role`
         */
        Code: string;
        /**
         * 错误信息。
         * @example `The role already exists.`
         */
        Message: string;
        /**
         * 处理建议。
         * @example `https://next.api.aliyun.com/troubleshoot?q=EntityAlreadyExists.Role\u0026product=Ram`
         */
        Recommend: string;
        /**
         * 请求ID。
         * @example `6D5EAA86-2D41-5CB7-8DA7-B60093ACAA4E`
         */
        RequestId: string;
    };
    /**
     * 是否初始化完成。取值：
     * - false：未完成。
     * - true：已完成。
     * @example `true`
     */
    Initialized: boolean;
    /**
     * 当前应用的基线ID。
     * @example `afb-bp1adadfadsf***`
     */
    BaselineId: string;
    /**
     * 基线项配置数组。
     */
    BaselineItems: {
        /**
         * 基线项的名称。
         * @example `ACS-BP_ACCOUNT_FACTORY_VPC`
         */
        Name: string;
        /**
         * 基线项版本。
         * @example `1.0`
         */
        Version: string;
        /**
         * 基线项配置
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
}
