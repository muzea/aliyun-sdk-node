export interface ListSecurityPoliciesResponse {
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF0F******`
     */
    RequestId: string;
    /**
     * 支持的安全策略列表。
     */
    SecurityPolicies: {
        /**
         * 支持的加密算法列表。
         */
        Ciphers: string[];
        /**
         * 资源组ID。
         * @example `rg-atstuj3rtop****`
         */
        ResourceGroupId: string;
        /**
         * 安全策略ID。
         * @example `sp-9cdjz6o******`
         */
        SecurityPolicyId: string;
        /**
         * 安全策略名称。
         * @example `test-secrity`
         */
        SecurityPolicyName: string;
        /**
         * 策略的状态，取值：
         * - **Configuring**：配置中。
         * - **Available**：正常可用。
         * @example `Available`
         */
        SecurityPolicyStatus: string;
        /**
         * 支持的TLS协议版本列表。
         */
        TLSVersions: string[];
        /**
         * ACL创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2023-02-15T07:37:33Z`
         */
        CreateTime: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `env`
             */
            Key: string;
            /**
             * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `product`
             */
            Value: string;
        }[];
    }[];
    /**
     * 列表条目数。
     * @example `1000`
     */
    TotalCount: number;
}
