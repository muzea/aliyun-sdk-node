export interface DescribeUuidsByVulNamesRequest {
    /**
     * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的漏洞类型。取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏洞
     * @example `cve`
     */
    "Type": string;
    /**
     * 漏洞的修复状态。多个修复状态使用半角逗号（,）分隔。取值：
     * - **1**：未修复
     * - **2**：修复失败
     * @example `1,2`
     */
    "StatusList"?: string;
    /**
     * 漏洞标签。
     * @example `oval`
     */
    "Tag"?: string;
    /**
     * 漏洞等级。多个漏洞等级使用半角逗号（,）分隔。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `high,low`
     */
    "Level"?: string;
    /**
     * 漏洞是否处理。取值：
     * - **y**：已处理
     * - **n**：未处理
     * @example `n`
     */
    "Dealed"?: string;
    /**
     * 资产分组ID。
     * @example `11286014`
     */
    "GroupId"?: number;
    /**
     * 要查询漏洞的VPC实例ID。多个ID使用半角逗号（,）分隔。
     * @example `vpc-uf6ssrvbrwe37ekw****,vpc-bp1aevy8sofi8mh1q****`
     */
    "VpcInstanceIds"?: string;
    /**
     * 要查询漏洞的资产信息，可以设置为资产名称、公网IP或私网IP（支持模糊查询）。
     * @example `10.7.`
     */
    "Remark"?: string;
    /**
     * 查询漏洞的tag标签。
     * @example `oval`
     */
    "SearchTags"?: string;
    /**
     * 容器检索字段名称。
     * @example `namespace`
     */
    "FieldName"?: string;
    /**
     * 容器检索字段值。
     * @example `cas-adad-qeqwe`
     */
    "FieldValue"?: string;
    /**
     * 查询类型。取值：
     * - **containerId**：容器ID
     * - **uuid**：资产ID
     * @example `uuid`
     */
    "TargetType"?: string;
    /**
     * 要查询的漏洞修复必要性等级。多个等级用半角逗号（,）分隔。取值：
     * - **asap**：高
     * - **later**：中
     * - **nntf**：低
     * @example `asap,later,nntf`
     */
    "Necessity"?: string;
    /**
     * 漏洞名称集合。
     * > 您可调用[DescribeGroupedVul](~~DescribeGroupedVul~~)接口获取该参数。
     */
    "VulNames": string[];
}
