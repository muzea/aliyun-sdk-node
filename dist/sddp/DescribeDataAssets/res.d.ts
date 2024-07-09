export interface DescribeDataAssetsResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `71064826-726F-4ADA-B879-05D8055476FB`
     */
    RequestId: string;
    /**
     * 分页查询时，每页最多显示的数据条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的存在敏感数据的资产总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 数据资产列表。
     */
    Items: {
        /**
         * OSS文件桶的ACL权限设置。
         * > 只有您将请求参数**RangeId**配置为**21**，即要查询的数据资产为OSS文件桶时，该参数才会显示。
         * @example `private`
         */
        Acl: string;
        /**
         * 数据资产创建时间，单位为毫秒。
         * @example `1536751124000`
         */
        CreationTime: number;
        /**
         * 数据资产所属的数据类型。
         * @example `OSS_BUCKET`
         */
        DataType: string;
        /**
         * 数据资产所属者账号。
         * @example `dtdep-239-******`
         */
        Owner: string;
        /**
         * 在所有数据资产中敏感数据所占的比例。
         * @example `45%`
         */
        SensitiveRatio: string;
        /**
         * 数据资产的防护状态，固定值：**false**。只有您将请求参数**RangeId**配置为**1**，即要查询的数据资产为MaxCompute项目时，该参数才会返回**true**或**false**。
         * - **false**: 未开启数据保护机制。
         * - **true**：开启数据保护机制。项目空间中的数据只能流入，不能流出。
         * @example `false`
         */
        Protection: boolean;
        /**
         * 数据的敏感度标记，固定值：**0**。只有您将请求参数**RangeId**配置为**1**，即要查询的数据资产为MaxCompute项目时，该参数才会返回**0**、**1**、**2**或**3**。
         * - **0**：不保密，Unclassified
         * - **1**：秘密，Confidential
         * - **2**：机密，Sensitive
         * - **3** ：高度机密，Highly Sensitive
         * @example `0`
         */
        Labelsec: boolean;
        /**
         * 所有数据资产的数量。例如：MaxCompute中项目、包或表的总数；RDS中数据库或表的总数；OSS中文件桶或Object的总数。
         * @example `432`
         */
        TotalCount: number;
        /**
         * 数据资产的风险等级ID。风险等级ID越高，表示识别出的数据越敏感。取值：
         * - **1**：未识别到敏感数据，无风险
         * - **2**：1级敏感数据风险
         * - **3**：2级敏感数据风险
         * - **4**：3级敏感数据风险
         * - **5**：4级敏感数据风险
         * - **6**：5级敏感数据风险
         * - **7**：6级敏感数据风险
         * - **8**：7级敏感数据风险
         * - **9**：8级敏感数据风险
         * - **10**：9级敏感数据风险
         * - **11**：10级敏感数据风险
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 数据资产命中的敏感数据识别规则名称。
         * @example `***规则`
         */
        RuleName: string;
        /**
         * 数据资产中是否包含敏感数据。取值：
         * - **true**：包含
         * - **false**：不包含
         * @example `true`
         */
        Sensitive: boolean;
        /**
         * OSS存储对象的Key值。
         * > 只有您将请求参数**RangeId**配置为**22**，即要查询的数据资产为OSS Object时，该参数才会显示。
         * @example `内部`
         */
        ObjectKey: string;
        /**
         * 数据资产的风险等级名称。
         * @example `中等风险等级`
         */
        RiskLevelName: string;
        /**
         * MaxCompute资产的风险等级名称。取值：
         * - **S1**：弱风险等级
         * - **S2**：中等风险等级
         * - **S3**：高级风险等级
         * - **S4**：最高风险等级
         * > 只有您将请求参数**RangeId**配置为**1**，即要查询的数据资产为MaxCompute项目时，该参数才会显示。
         * @example `S4`
         */
        OdpsRiskLevelName: string;
        /**
         * 数据资产所属产品类型ID。取值：
         * - **1**：MaxCompute
         * - **2**：OSS
         * - **3**：ADS
         * - **4**：OTS
         * - **5**：RDS
         * @example `5`
         */
        ProductId: string;
        /**
         * 数据资产名称。
         * @example `gxdata`
         */
        Name: string;
        /**
         * 数据资产中敏感数据总数。例如：MaxCompute中敏感的项目、包或表的总数；RDS中敏感的数据库或表的总数；OSS中敏感的文件桶或Object的总数。
         * @example `24`
         */
        SensitiveCount: number;
        /**
         * 数据资产的唯一标识ID。
         * @example `268`
         */
        Id: string;
        /**
         * 数据资产所属产品名称。
         * @example `RDS`
         */
        ProductCode: string;
    }[];
}
