export interface DescribeDataObjectsResponse {
    /**
     * 分页查询时，设置当前页面的页码。默认值：**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E6F6460E-4330-549A-BD89-C183FB17571E`
     */
    RequestId: string;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询结果总条数。
     * @example `21`
     */
    TotalCount: number;
    /**
     * 数据对象列表。
     */
    Items: {
        /**
         * 数据对象的名称。
         * @example `t_sddp_selfmysql_pers0`
         */
        Name: string;
        /**
         * 数据对象的唯一标识ID。
         * @example `20000`
         */
        Id: string;
        /**
         * 行业模版ID
         * @example `1`
         */
        TemplateId: number;
        /**
         * 数据对象所属的产品名称对应的ID。取值：
         * - **1**：MaxCompute
         * - **2**：OSS
         * - **3**：ADB-MYSQL
         * - **4**：TableStore
         * - **5**：RDS
         * - **6**：SELF_DB
         * - **7**：PolarDB-X
         * - **8**：PolarDB
         * - **9**：ADB-PG
         * - **10**：OceanBase
         * - **11**：MongoDB
         * - **25**：Redis
         * @example `5`
         */
        ProductId: number;
        /**
         * 数据对象的实例描述。
         * @example `instance description`
         */
        InstanceDescription: string;
        /**
         * 数据对象所属的产品名称。取值：
         * - **MaxCompute**
         * - **OSS**
         * - **ADB-MYSQL**
         * - **TableStore**
         * - **RDS**
         * - **SELF_DB**
         * - **PolarDB-X**
         * - **PolarDB**
         * - **ADB-PG**
         * - **OceanBase**
         * - **MongoDB**
         * - **Redis**
         * @example `RDS`
         */
        ProductCode: string;
        /**
         * 数据资产实例ID。
         * @example `rm-12*****`
         */
        InstanceId: string;
        /**
         * 最新扫描的时间戳，单位为毫秒。
         * @example `1687676649830`
         */
        LastScanTime: number;
        /**
         * 敏感数据数量
         * @example `1`
         */
        SensitiveCount: number;
        /**
         * 数据对象类型。
         * @example `text type`
         */
        ObjectType: string;
        /**
         * 数据对象的路径。
         * @example `rm-12**.db_***`
         */
        Path: string;
        /**
         * 地域名称。
         * @example `cn-hangzhou`
         */
        RegionName: string;
        /**
         * 敏感数据所数据的行业分类列表。
         */
        Categories: string[];
        /**
         * 数据标签列表。
         */
        ModelTags: {
            /**
             * 数据标签ID。取值：
             * - **101**：个人敏感信息。
             * - **102**：个人信息。
             * - **107**：通用信息。
             * @example `101`
             */
            Id: number;
            /**
             * 数据标签名称。取值：
             * - **个人敏感信息。**
             * - **个人信息。**
             * - **通用信息。**
             * @example `个人敏感信息`
             */
            Name: string;
        }[];
        /**
         * 命中的识别模型列表。
         */
        RuleList: {
            /**
             * 识别模型ID。
             * @example `1080`
             */
            RuleId: number;
            /**
             * 识别模型名称。
             * @example `name`
             */
            RuleName: string;
            /**
             * 敏感数据识别规则的风险等级ID。取值：
             * - **1**：N/A：未识别到敏感数据。
             * - **2**：S1：1级敏感数据。
             * - **3**：S2：2级敏感数据。
             * - **4**：S3：3级敏感数据。
             * - **5**：S4：4级敏感数据。
             * @example `2`
             */
            RiskLevelId: number;
            /**
             * 数据资产表的风险等级名称。取值：
             * - **N/A**：未识别到敏感数据。
             * - **S1**：1级敏感数据。
             * - **S2**：2级敏感数据。
             * - **S3**：3级敏感数据。
             * - **S4**：4级敏感数据。
             * @example `S1`
             */
            RiskLevelName: string;
            /**
             * 命中识别模型数量。
             * @example `590`
             */
            RuleCount: number;
        }[];
        /**
         * 文件分类名称。
         * @example `text file`
         */
        ObjectFileCategory: string;
        /**
         * 成员账号ID。
         * @example `**********8103`
         */
        MemberAccount: number;
        /**
         * 文件最新更新时间，单位为毫秒。
         * @example `1687676649830`
         */
        LastModifiedTime: number;
    }[];
}
