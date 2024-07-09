export interface CreateAggregatorRequest {
    /**
     * 账号组名称。
     * @example `Test_Group`
     */
    "AggregatorName": string;
    /**
     * 账号组描述。
     * @example `测试组`
     */
    "Description": string;
    /**
     * 账号组内的所有成员账号。
     * > - 当`AggregatorType`为`RD时，该参数可以为空，表示将资源目录中的所有成员添加至全局账号组。
     * > - 当`AggregatorType`为`FOLDER`时，该参数可以为空，表示将资源目录中某个资源夹中的所有成员添加至资源夹账号组。
     */
    "AggregatorAccounts"?: {
        /**
         * 成员ID。
         * 关于如何获取成员ID，请参见[ListAccounts](~~160016~~)。
         * @example `171322098523****`
         */
        AccountId: number;
        /**
         * 成员名称。
         * 关于如何获取成员名称，请参见[ListAccounts](~~160016~~)。
         * @example `Alice`
         */
        AccountName: string;
        /**
         * 成员归属。仅支持`ResourceDirectory`（资源目录）。
         * @example `ResourceDirectory`
         */
        AccountType: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
     * @example `1594295238-f9361358-5843-4294-8d30-b5183fac****`
     */
    "ClientToken"?: string;
    /**
     * 账号组类型。取值：
     * - RD：全局账号组。
     * - FOLDER：资源夹账号组。必须同时设置`FolderId`。关于如何获取资源夹ID，请参见[ListAccounts](~~160016~~)。
     * - CUSTOM（默认值）：自定义账号组。必须同时设置`AggregatorAccounts`中的`AccountId`和`AccountType`。
     * @example `CUSTOM`
     */
    "AggregatorType"?: string;
    /**
     * 绑定的资源夹ID。
     * 当`AggregatorType`为`FOLDER`时，必须设置本参数。
     * @example `fd-brHdgv****`
     */
    "FolderId"?: string;
}
