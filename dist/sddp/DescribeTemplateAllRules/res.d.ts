export interface DescribeTemplateAllRulesResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `769FB3C1-F4C9-4******`
     */
    RequestId: string;
    /**
     * 模型对象列表。
     */
    RuleList: {
        /**
         * 模型名字。
         * @example `Model Name`
         */
        Name: string;
        /**
         * 模型唯一ID。
         * @example `376`
         */
        Id: number;
    }[];
}
