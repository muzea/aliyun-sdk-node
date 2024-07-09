export interface DescribeDataObjectsRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。默认值：1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 建议填写，待查询的产品ID列表，多个用逗号分隔。取值：
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
     * > OSS与其他产品互斥，即如果待查询中有OSS，则不能有其他产品列表；默认查询的为非OSS产品。
     * @example `1,5`
     */
    "ProductIds"?: string;
    /**
     * 待查询模板的父分类列表，多个父分类ID用逗号分隔。
     * @example `234,236,238`
     */
    "ParentCategoryIds"?: string;
    /**
     * 待查询的数据对象关键字。
     * @example `t_sddp_selfmysql_pers0`
     */
    "QueryName"?: string;
    /**
     * 资产所在的地域。取值：
     * - **cn-beijing**：华北2（北京）。
     * - **cn-zhangjiakou**：华北3（张家口）。
     * - **cn-huhehaote**：华北5（呼和浩特）。
     * - **cn-hangzhou**：华东1（杭州）。
     * - **cn-shanghai**：华东2（上海）。
     * - **cn-shenzhen**：华南1（深圳）。
     * - **cn-hongkong**：中国香港。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 行业模版ID。
     * > 您可以通过调用[DescribeCategoryTemplateList](~~2399296~~)获取行业模板标识ID。
     * @example `1`
     */
    "TemplateId": number;
    /**
     * 数据资产所属的数据域ID。
     * @example `2`
     */
    "DomainId"?: number;
    /**
     * 待查询的数据标签，多个用逗号分隔。取值：
     * - **101**：个人敏感信息。
     * - **102**：个人信息。
     * - **107**：通用信息。
     * @example `101,102`
     */
    "ModelTagIds"?: string;
    /**
     * 指定要查询的数据资产的风险等级，存在多个时使用英文逗号（,）隔开。
     * - **2**：S1，弱风险等级。
     * - **3**：S2，中等风险等级。
     * - **4**：S3，高风险等级。
     * - **5**：S4，最高风险等级。
     * @example `2`
     */
    "RiskLevels"?: string;
    /**
     * 资产实例ID关键字。
     * @example `8vb54hn2g9j191ddz`
     */
    "InstanceId"?: string;
    /**
     * 行业模板的模型ID，多个ID通过逗号分隔。
     * > 您可以通过调用[DescribeTemplateAllRules](~~2536491~~)获取行业模板模型标识ID。
     * @example `101`
     */
    "ModelIds"?: string;
    /**
     * 支持识别的OSS文件类型。
     * > 您可以通过调用[DescribeDocTypes](~~2536492~~)获取支持识别的OSS文件类型，取返回值中的Code字段值，本参数仅对OSS类型的资产查询有效。
     * @example `100001`
     */
    "FileType"?: number;
    /**
     * 文件分类编码。
     * @example `1`
     */
    "FileCategoryCode"?: number;
    /**
     * 成员账号ID。
     * @example `**********8103`
     */
    "MemberAccount"?: number;
    /**
     * 此参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
