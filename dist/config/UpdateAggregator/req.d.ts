export interface UpdateAggregatorRequest {
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-dacf86d8314e00eb****`
     */
    "AggregatorId": string;
    /**
     * 账号组名称。
     * 关于如何获取账号组名称，请参见[ListAggregators](~~255797~~)。
     * @example `Test_Group`
     */
    "AggregatorName"?: string;
    /**
     * 账号组描述。
     * 关于如何获取账号组描述，请参见[ListAggregators](~~255797~~)。
     * @example `测试组`
     */
    "Description"?: string;
    /**
     * 账号组内的成员列表。
     * > 更新账号组时，该参数可以为空，为空表示不更新成员列表。如果您需要更新成员列表，则`AccountId`和`AccountType`必须同时设置。
     */
    "AggregatorAccounts"?: {
        /**
         * 成员ID。
         * 关于如何获取成员ID，请参见[ListAccounts](~~160016~~)。
         * > 如果您需要更新成员列表，则`AccountId`和`AccountType`必须同时设置。
         * @example `173808452267****`
         */
        AccountId: number;
        /**
         * 成员名称。
         * 关于如何获取成员名称，请参见[ListAccounts](~~160016~~)。
         * > 如果您需要更新成员列表，则`AccountId`和`AccountType`必须同时设置。
         * @example `Tony`
         */
        AccountName: string;
        /**
         * 成员归属。仅支持ResourceDirectory（资源目录）。
         * > 如果您需要更新成员列表，则`AccountId`和`AccountType`必须同时设置。
         * @example `ResourceDirectory`
         */
        AccountType: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
}
