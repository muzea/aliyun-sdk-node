export interface DescribeImageBaselineDetailResponse {
    /**
     * 本次请求的ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF4****`
     */
    RequestId: string;
    /**
     * 镜像基线详情列表。
     */
    BaselineDetail: {
        /**
         * 基线检查风险项的加固建议。
         * @example `删除泄漏的AK信息。`
         */
        Advice: string;
        /**
         * 异步请求ID。
         * @example `async__c6f3b0b54613383b40bdce593ffe****`
         */
        ResultId: string;
        /**
         * 基线风险项的描述。
         * @example `Access Key泄露，会导致Access Key被冒用的风险。`
         */
        Description: string;
        /**
         * 基线子项的别名。
         * @example `Access Key泄露`
         */
        BaselineItemAlias: string;
        /**
         * 基线主项名称的别名。
         * @example `Access Key泄露`
         */
        BaselineNameAlias: string;
        /**
         * 基线主项分类的别名。
         * @example `ak_leak`
         */
        BaselineClassAlias: string;
        /**
         * 基线子项的key。
         * @example `ak_leak`
         */
        BaselineItemKey: string;
        /**
         * 基线问题提示。
         * @example `/usr/aksk.txt:LTAI4GBEG5zaqX**********`
         */
        Prompt: string;
        /**
         * 检查项的风险等级。
         * - **high**：高，表示风险等级高。
         * - **medium**：中，表示风险等级为中等。
         * - **low**：低，表示风险等级低。
         * @example `high`
         */
        Level: string;
    };
}
