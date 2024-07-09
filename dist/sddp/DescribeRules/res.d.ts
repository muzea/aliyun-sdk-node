export interface DescribeRulesResponse {
    /**
     * 结果中显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     *  结果中每页显示的数据条数。
     * @example `12`
     */
    PageSize: number;
    /**
     *  结果中数据的总条数。
     * @example `23`
     */
    TotalCount: number;
    /**
     * 敏感数据识别规则列表。
     */
    Items: {
        /**
         * 敏感数据识别规则的创建人账号显示名。
         * @example `****test`
         */
        DisplayName: string;
        /**
         * 敏感数据识别规则的检测状态。取值：
         * - **0**：关闭。
         * - **1**：开启。
         * @example `1`
         */
        Status: number;
        /**
         * 规则支持的数据资产类型，取值：
         * - **0**：支持全部资产。
         * - **1**：支持结构化资产。
         * - **2**：支持非结构化资产。
         * @example `2`
         */
        SupportForm: number;
        /**
         * 危险等级。
         * - **1**：低危。
         * - **2**：中危。
         * - **3**：高危。
         * @example `2`
         */
        WarnLevel: number;
        /**
         * 敏感数据识别规则的创建人账号ID。
         * @example `0`
         */
        UserId: number;
        /**
         * 统计表达式。
         * @example `1`
         */
        StatExpress: string;
        /**
         * 敏感数据识别规则的修改时间。格式：时间戳。单位：毫秒。
         * @example `1545277010000`
         */
        GmtModified: number;
        /**
         * 敏感数据识别规则的敏感等级ID。取值：
         * - **1**：N/A：未识别到敏感数据。
         * - **2**：S1：1级敏感数据。
         * - **3**：S2：2级敏感数据。
         * - **4**：S3：3级敏感数据。
         * - **5**：S4：4级敏感数据。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 敏感数据识别规则的描述信息。
         * @example `用于识别IP地址`
         */
        Description: string;
        /**
         * 数据资产所属的产品名称对应的ID。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
         * @example `2`
         */
        ProductId: number;
        /**
         * 敏感数据识别规则的名称。
         * @example `IP地址`
         */
        Name: string;
        /**
         * 敏感数据识别规则的内容。
         * >内置识别规则，即CustomType为0的识别规则，不返回规则的内容。
         * @example `(?:\\D|^)((?:(?:25[0-4]|2[0-4]\\d|1\\d{2}|[1-9]\\d{1})\\.)(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){2}(?:25[0-5]|2[0-4]\\d|1[0-9]\\d|[1-9]\\d|[1-9]))(?:\\D|$)`
         */
        Content: string;
        /**
         * 数据资产所属的产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `MaxCompute`
         */
        Target: string;
        /**
         * 敏感数据识别规则的创建人账号登录名。
         * @example `det1111`
         */
        LoginName: string;
        /**
         * 敏感数据识别规则内容所属类型名称。
         * @example `正则表达式`
         */
        CategoryName: string;
        /**
         * 内容类型，取值：**1**：SQL注入尝试利用，**2**：SQL注入尝试绕过， **3**：存储过程滥用，**4**：缓冲区溢出，**5**：基于报错的SQL注入等。
         * @example `1`
         */
        ContentCategory: string;
        /**
         * 命中次数。
         * @example `3`
         */
        HitTotalCount: number;
        /**
         * 规则父类分组。
         * @example `4_1`
         */
        GroupId: string;
        /**
         * 敏感数据识别规则类型。
         * - 0：表示系统内置。
         * - 1：表示用户自定义。
         * @example `1`
         */
        CustomType: number;
        /**
         * 敏感数据识别规则的风险等级名称。取值：
         * - **N/A**：未识别到敏感数据。
         * - **S1**：1级敏感数据。
         * - **S2**：2级敏感数据。
         * - **S3**：3级敏感数据。
         * - **S4**：4级敏感数据。
         * @example `S2`
         */
        RiskLevelName: string;
        /**
         * 敏感数据识别规则的创建时间。格式：时间戳。单位：毫秒。
         * @example `1545277010000`
         */
        GmtCreate: number;
        /**
         * 敏感数据识别规则内容的类型。取值：
         * - **0**：关键字。
         * - **2**：正则表达式。
         * @example `2`
         */
        Category: number;
        /**
         * 主维度key。
         * @example `key`
         */
        MajorKey: string;
        /**
         * 保存记录的敏感数据识别规则的唯一标识ID。
         * @example `20000`
         */
        Id: number;
        /**
         * 数据资产所属的产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
         * @example `MaxCompute`
         */
        ProductCode: string;
        /**
         * 匹配类型。取值：
         * - **1**：规则匹配。
         * - **2**：词典匹配。
         * @example `1`
         */
        MatchType: number;
    }[];
}
