export interface GetAccountFactoryBaselineResponse {
    /**
     * 请求ID。
     * @example `60D54503-F1F6-51B6-B6FA-A70CBDA2A68C`
     */
    RequestId: string;
    /**
     * 基线ID。
     * @example `afb-bp16ae2k8a3yo3d*****`
     */
    BaselineId: string;
    /**
     * 基线名称。
     * @example `Default`
     */
    BaselineName: string;
    /**
     * 基线项列表。
     */
    BaselineItems: {
        /**
         * 基线项的名称。
         * @example `ACS-BP_ACCOUNT_FACTORY_VPC`
         */
        Name: string;
        /**
         * 基线项的版本。
         * @example `1.0`
         */
        Version: string;
        /**
         * 基线项的配置。
         * 格式为JSON字符串。
         * @example `{\"Notifications\":[{\"GroupKey\":\"account_msg\",\"Contacts\":[{\"Name\":\"aa\"}],\"PmsgStatus\":1,\"EmailStatus\":1,\"SmsStatus\":1}]}`
         */
        Config: string;
    }[];
    /**
     * 创建时间。
     * @example `2022-11-28T00:46:34Z`
     */
    CreateTime: string;
    /**
     * 更新时间。
     * @example `2022-11-02T01:00:07Z`
     */
    UpdateTime: string;
    /**
     * 基线描述。
     * @example `默认基线`
     */
    Description: string;
    /**
     * 基线类型。取值：
     * - System：系统默认基线。
     * - Custom：用户自定义基线。
     * @example `Custom`
     */
    Type: string;
}
