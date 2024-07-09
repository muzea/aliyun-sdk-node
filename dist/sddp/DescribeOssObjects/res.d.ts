export interface DescribeOssObjectsResponse {
    /**
     * 结果中当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 结果中每页显示的数据条数。
     * @example `12`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * OSS存储对象列表。
     */
    Items: {
        /**
         * OSS存储对象所属资产实例ID。
         * @example `1232122`
         */
        InstanceId: number;
        /**
         * 文件类型名称。
         * @example `MP4视频文件`
         */
        CategoryName: string;
        /**
         * OSS存储对象的风险等级ID。取值：
         * - **1**：N/A：未识别到敏感数据。
         * - **2**：S1：1级敏感数据。
         * - **3**：S2：2级敏感数据。
         * - **4**：S3：3级敏感数据。
         * - **5**：S4：4级敏感数据。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * OSS存储对象所有者所属区域ID。
         * @example `cn-***`
         */
        RegionId: string;
        /**
         * OSS存储文件ID。
         * @example `file-22***`
         */
        FileId: string;
        /**
         * 文件大小。单位：字节。
         * @example `20`
         */
        Size: number;
        /**
         * Bucket名称。
         * @example `oss-duplicate-***`
         */
        BucketName: string;
        /**
         * OSS存储对象的风险等级名称。
         * @example `中等风险等级`
         */
        RiskLevelName: string;
        /**
         * OSS存储对象类型。取值：**900001**（MP4视频文件）、**800015**（PDF文档）、**800005**（OSS配置文件）等。
         * @example `900001`
         */
        Category: number;
        /**
         * OSS存储对象名称。
         * @example `obj_id`
         */
        Name: string;
        /**
         * 命中规则数量。
         * @example `100`
         */
        RuleCount: number;
        /**
         * 命中字段数量。
         * @example `50`
         */
        SensitiveCount: number;
        /**
         * OSS存储对象的唯一标识ID。
         * @example `17383`
         */
        Id: string;
        /**
         * 规则列表。
         */
        RuleList: {
            /**
             * 搜索的关键词，支持模糊匹配。
             * @example `身份证`
             */
            Name: string;
            /**
             * OSS存储对象的风险等级ID。取值：
             * - **1**：N/A：未识别到敏感数据。
             * - **2**：S1：1级敏感数据。
             * - **3**：S2：2级敏感数据。
             * - **4**：S3：3级敏感数据。
             * - **5**：S4：4级敏感数据。
             * @example `2`
             */
            RiskLevelId: number;
            /**
             * 规则的命中次数。
             * @example `100`
             */
            Count: number;
        }[];
        /**
         * 文件分类编码。
         * @example `1`
         */
        FileCategoryCode: number;
        /**
         * 文件分类名称。
         * @example `text file`
         */
        FileCategoryName: string;
        /**
         * 上一次修改文件的时间。
         * @example `1536751124000
        `
         */
        LastModifiedTime: number;
    }[];
}
