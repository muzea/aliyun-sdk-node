export interface DescribeCategoryTemplateRuleListResponse {
    /**
     * 当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 返回结果的请求ID。
     * @example `136082B3-B21F-5E9D-B68E-991FFD205D24`
     */
    RequestId: string;
    /**
     * 每页显示模板规则的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前模板的规则总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 模板规则列表。
     */
    Items: {
        /**
         * 模板规则的开启状态。取值：
         * - **0**：表示未开启状态。
         * - **1**：表示开启状态。
         * - **null**：表示全部状态，包括：开启和未开启状态。
         * @example `1`
         */
        Status: number;
        /**
         * 模板规则用于扫描数据的范围。使用JSON数组转化的字符串格式表示。JSON数组中的每个元素是一个扫描数据的范围，包含以下字段：
         * - **Asset**：String类型，表示资产类型，包括：RDS、DRDS、PolarDB、OTS、ADB、OceanBase。
         * - **Content**：String类型，表示扫描资产的范围。JSON数组中的每个元素是一个扫描数据的范围，包含以下字段：
         *
         *     - **Range**：String类型，表示匹配范围，包括：Instance、database、table、column、project（只适用于MaxCompute资产类型）、bucket（只适用于OSS资产类型）、object（只适用于OSS资产类型）。
         *     - **Operator**：String类型，表示匹配条件，包括：equals（表示等于）、 regex（表示正则匹配）、prefix（表示前缀匹配）、suffix（表示后缀匹配）。
         *     - **Value**：String类型，表示匹配内容。
         * @example `[{"Asset":"RDS","Content":[{"Range":"database","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"RDS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"project","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"table","Operator":"regex","Value":"register"}]},{"Asset":"ODPS","Content":[{"Range":"column","Operator":"regex","Value":"register"}]}]`
         */
        IdentificationScope: string;
        /**
         * 模板规则的风险等级。取值范围为**1**~**11**。取值：
         * - **1**：表示无风险。
         * - **2**：表示S1级风险等级。
         * - **3**：表示S2级风险等级。
         * - **4**：表示S3级风险等级。
         * - **5**：表示S4级风险等级。
         * - **6**：表示S5级风险等级。
         * - **7**：表示S6级风险等级。
         * - **8**：表示S7级风险等级。
         * - **9**：表示S8级风险等级。
         * - **10**：表示S9级风险等级。
         * - **11**：表示S10级风险等级。
         * - **null**：表示全部风险等级，包括：无风险、S1、S2、S3、S4、S5、S6、S7、S8、S9和S10级风险等级。
         * @example `2`
         */
        RiskLevelId: number;
        /**
         * 规则描述。
         * @example `用于识别身份证号的模板规则`
         */
        Description: string;
        /**
         * 关联的原子模型ID列表，通过半角逗号（,）分隔。
         * @example `1001,1002`
         */
        IdentificationRuleIds: string;
        /**
         * 模板规则名字。
         * @example `身份证号`
         */
        Name: string;
        /**
         * 该模板规则的唯一标识ID。
         * @example `100`
         */
        Id: number;
    }[];
}
