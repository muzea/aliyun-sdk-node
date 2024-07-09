export interface DescribeWebPreciseAccessRuleResponse {
    /**
     * 本次请求的ID。
     * @example `209EEFBF-B0C7-441E-8C28-D0945A57A638`
     */
    RequestId: string;
    /**
     * 网站业务精确访问控制规则。
     */
    PreciseAccessConfigList: {
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 规则列表。
         */
        RuleList: {
            /**
             * 匹配动作。取值：
             * - **accept**：放行
             * - **block**：封禁
             * - **challenge**：挑战
             * @example `accept`
             */
            Action: string;
            /**
             * 规则来源。取值：
             * - **manual**：手动添加（默认）
             * - **auto**：自动生成
             * @example `manual`
             */
            Owner: string;
            /**
             * 规则有效期。单位：秒。规则的匹配动作为阻断时（**action**为**block**）生效，在规则有效期内阻断访问请求。**0**表示永久生效。
             * @example `0`
             */
            Expires: number;
            /**
             * 规则名称。
             * @example `testrule`
             */
            Name: string;
            /**
             * 匹配条件列表。
             */
            ConditionList: {
                /**
                 * 逻辑符。
                 * @example `belong`
                 */
                MatchMethod: string;
                /**
                 * 匹配字段。
                 * @example `ip`
                 */
                Field: string;
                /**
                 * 匹配内容。
                 * @example `1.1.1.1`
                 */
                Content: string;
                /**
                 * 自定义HTTP头部字段名称。
                 * > 仅在**Field**为**header**时有效。
                 * @example `null`
                 */
                HeaderName: string;
                ContentList: string[];
            }[];
        }[];
    }[];
}
