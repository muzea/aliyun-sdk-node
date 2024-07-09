export interface ListAccessTokensResponse {
    /**
     * 请求ID。
     * @example `E2DA3097-79B9-53AE-B0DF-281DC54F****`
     */
    RequestId: string;
    AccessTokens: {
        /**
         * 迁移源数组信息。
         */
        AccessToken: {
            /**
             * 激活码ID。
             * @example `at-bp1akz2zp67r0k6r****`
             */
            AccessTokenId: string;
            /**
             * 激活码的有效期。有效期为1~90天，默认为30天。
             * @example `30`
             */
            TimeToLiveInDays: string;
            /**
             * 激活码使用次数上限。取值范围为1~1000。
             * 默认值为100。
             * @example `100`
             */
            Count: string;
            /**
             * 已注册的迁移源数。
             * @example `5`
             */
            RegisteredCount: string;
            /**
             * 激活码创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2022-09-09T02:35:44Z`
             */
            CreationTime: string;
            /**
             * 激活码状态。可能值：
             * - activated：已激活。
             * - unactivated：未激活。
             * - expired：已过期。
             * @example `activated`
             */
            Status: string;
            /**
             * 激活码名称。
             * @example `test_name`
             */
            Name: string;
            /**
             * 激活码描述信息。
             * @example `这是激活码`
             */
            Description: string;
        }[];
    };
    /**
     * 迁移源总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageSize: number;
    /**
     * 每页行数。可能值：
     * - 10
     * - 20
     * - 50
     * 默认值：20。
     * @example `20`
     */
    PageNumber: number;
}
