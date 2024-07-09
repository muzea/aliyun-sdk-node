export interface ExecDatamaskRequest {
    /**
     * 指定脱敏模板ID。在[数据安全中心控制台](https://yundun.console.aliyun.com/?p=sddp#/dm/dmConfig/cn-zhangjiakou)上新建模板后会生成模板ID，您可以在**数据脱敏**>**脱敏配置**>**脱敏模板**页面获取**模板ID**。
     * - 若脱敏模板匹配类型是**字段名称**，则取**Data**中的**dataHeaderList**进行匹配。
     * - 若脱敏模板匹配类型是**敏感类型**，则取**Data**中的**ruleList**进行匹配。
     * @example `1`
     */
    "TemplateId": number;
    /**
     * 指定需要脱敏的数据。采用JSON格式的字符串表述，包含以下字段：
     * - **dataHeaderList**：数据的列名，顺序和需要脱敏的数据一一对应。
     * - **dataList**：需要脱敏的数据。
     * - **ruleList** ：敏感类型ID列表，顺序和需要脱敏的数据一一对应。
     *                         敏感类型ID是数字，不同的数字代表不同的敏感类型，可通过[DescribeRules](~~DescribeRules~~)接口获取。
     * @example `{"dataHeaderList":["name","age"],"dataList":[["lily",18],["lucy",17]],"ruleList":[1002,null]}`
     */
    "Data": string;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
    /**
     * 设置请求和返回消息的语言类型。默认值为**zh_cn**。取值
     * - **zh_cn**：简体中文
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
}
