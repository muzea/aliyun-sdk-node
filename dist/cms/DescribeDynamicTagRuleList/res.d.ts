export interface DescribeDynamicTagRuleListResponse {
    /**
     * 请求ID。
     * @example `0D50523D-8D59-4A61-B58E-E2286ECFB3A9`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 标签列表的条目总数。
     * @example `2`
     */
    Total: number;
    TagGroupList: {
        /**
         * 应用分组的规则列表。
         */
        TagGroup: {
            /**
             * 标签同步到应用分组的状态。
             * - `RUNNING`：进行中。
             * - `FINISH`：已完成。
             * @example `FINISH`
             */
            Status: string;
            /**
             * 条件表达式之间的关系。取值：
             * - `and`：和。
             * - `or`：或。
             * > 目前仅支持一种组合条件。
             * @example `or`
             */
            MatchExpressFilterRelation: string;
            /**
             * 资源所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 标签键。
             * @example `tagkey1`
             */
            TagKey: string;
            /**
             * 标签规则ID。
             * @example `1536df65-a719-429d-8813-73cc40d7****`
             */
            DynamicTagRuleId: string;
            MatchExpress: {
                /**
                 * 标签生成应用分组的匹配表达式。
                 */
                MatchExpress: {
                    /**
                     * 标签值。
                     * `TagValue`和`TagValueMatchFunction`配合使用。
                     * @example `*`
                     */
                    TagValue: string;
                    /**
                     * 标签值的匹配方法。取值：
                     * - all：全部。
                     * - startWith：前缀。
                     * - endWith：后缀。
                     * - contains：包含。
                     * - notContains：不包含。
                     * - equals：相等。
                     * @example `all`
                     */
                    TagValueMatchFunction: string;
                    /**
                     * 标签键。
                     * @example `azone-version`
                     */
                    TagKey: string;
                }[];
            };
            TemplateIdList: {
                /**
                 * 报警模板ID列表。
                 */
                TemplateIdList: string[];
            };
            ContactGroupList: {
                /**
                 * 报警联系组列表。
                 */
                ContactGroupList: string[];
            };
            TagValueBlacklist: {
                /**
                 * 动态规则不处理的TagValue。当用户删除动态Tag分组的时候，分组对应的TagValue会添加到黑名单；在之后有新的资源新增此TagValue时，不会创建对应的分组。
                 */
                TagValueBlacklist: string[];
            };
        }[];
    };
}
