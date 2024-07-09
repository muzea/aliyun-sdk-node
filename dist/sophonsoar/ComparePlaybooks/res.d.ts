export interface ComparePlaybooksResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2EC05B06-BF3C-5F3E-8FE8-3B1FAD76087A`
     */
    RequestId: string;
    /**
     * 比较结果。
     */
    CompareResult: {
        /**
         * 两个版本是否相同的标记，**true**表示相同，**false**表示不相同。
         * @example `false`
         */
        Same: boolean;
        /**
         * 用于比较的第二个版本，是否为新增版本：
         * - **true**：表示为新增版本
         * - **false**：表示不是新增版本
         * @example `true`
         */
        New: boolean;
        /**
         * 比较结果的描述信息。
         * @example `The first version adds one node compared to the second version`
         */
        Description: string;
    };
}
