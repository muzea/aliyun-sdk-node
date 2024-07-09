export interface DescribeOssObjectDetailV2Response {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * OSS存储对象的详细信息。
     */
    OssObjectDetail: {
        /**
         * OSS存储对象类型名称。
         * @example `Excel file`
         */
        CategoryName: string;
        /**
         * OSS存储对象名称。
         * @example `obj_id`
         */
        Name: string;
        /**
         * OSS存储对象所属Bucket的名称。
         * @example `lv-demo`
         */
        BucketName: string;
        /**
         * OSS存储对象的风险等级名称。
         * @example `S1`
         */
        RiskLevelName: string;
        /**
         * OSS存储对象所属区域ID。
         * @example `cn-zhangjiakou`
         */
        RegionId: string;
        /**
         * OSS存储对象命中的敏感数据识别规则列表。
         */
        RuleList: {
            /**
             * OSS存储对象的风险等级名称。
             * @example `S1`
             */
            RiskLevelName: string;
            /**
             * OSS存储对象类型名称。
             * @example `Excel`
             */
            CategoryName: string;
            /**
             * OSS存储对象的风险等级ID。
             * - **1**：未识别到敏感数据。
             * - **2**：1级敏感数据。
             * - **3**：2级敏感数据。
             * - **4**：3级敏感数据。
             * - **5**：4级敏感数据。
             * @example `2`
             */
            RiskLevelId: number;
            /**
             * 命中敏感数据识别规则的次数。
             * @example `2`
             */
            Count: number;
            /**
             * 命中敏感数据识别规则的名称。
             * @example `name`
             */
            RuleName: string;
            /**
             * 数据标签列表。
             */
            ModelTags: {
                /**
                 * 识别模型的数据标签ID。
                 * - **101**：个人敏感信息。
                 * - **102**：个人信息。
                 * - **103**：重要数据。
                 * @example `101`
                 */
                Id: number;
                /**
                 * 识别模型的数据标签名称。
                 * - 个人敏感信息。
                 * - 个人信息。
                 * - 重要数据。
                 * @example `personal sensitive data`
                 */
                Name: string;
            }[];
        }[];
    };
}
