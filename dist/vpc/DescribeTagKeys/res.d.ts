export interface DescribeTagKeysResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DE65F6B7-7566-4802-9007-96F2494AC512`
     */
    RequestId: string;
    TagKeys: {
        /**
         * 标签键集合。
         */
        TagKey: {
            /**
             * 标签键的类型。取值：
             * - **Custom**：用户自定义类型。
             * - **System**：系统类型。
             * @example `Custom`
             */
            Type: string;
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            TagKey: string;
        }[];
    };
}
