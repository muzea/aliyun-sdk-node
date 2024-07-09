export interface ListQuotaApplicationTemplatesRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 配额维度。
     */
    "Dimensions"?: {
        /**
         * 配额维度的Key。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 配额维度的Key和Value必须同时设置。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > - N的取值范围取决于云产品支持的维度个数。
         * > - 配额维度的Key和Value必须同时设置。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
    /**
     * 配额ID。
     * @example `q_security-groups`
     */
    "QuotaActionCode"?: string;
    /**
     * 模版配额项ID。
     * @example `1****`
     */
    "Id"?: string;
    /**
     * 查询的最大记录条数。
     * 取值范围：1~100。
     * 默认值：30。
     * @example `30`
     */
    "MaxResults"?: number;
    /**
     * 用来标记开始查询数据的位置。
     * > 不设置该参数，表示从头开始。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 配额种类。取值：
     * - CommonQuota：通用配额。
     * - WhiteListLabel：权益配额。
     * - FlowControl：API速率配额。
     * @example `CommonQuota`
     */
    "QuotaCategory"?: string;
}
