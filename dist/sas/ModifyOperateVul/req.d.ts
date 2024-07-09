export interface ModifyOperateVulRequest {
    /**
     * 要处理的漏洞的信息。该参数为JSON格式，包含以下字段：
     * - **name**：漏洞的名称
     * - **uuid**：存在漏洞的服务器的UUID
     * - **tag**：漏洞的标签。取值：
     *     - **oval**：Linux软件漏洞
     *     - **system**：Windows系统漏洞
     *     - **cms**：Web-CMS漏洞
     * > 其他漏洞类型该参数的取值可调用[DescribeVulList](~~DescribeVulList~~)接口获取漏洞的信息。
     * - **isFront**：Windows补丁是否是前置补丁。此参数仅处理Windows系统漏洞时设置，处理其他类型漏洞可忽略。取值：
     *     - **0**：否
     *     - **1**：是
     * > 支持批量处理漏洞，多个漏洞信息之间使用半角逗号（,）分隔。您可调用[DescribeVulList](~~DescribeVulList~~)接口获取漏洞的信息。
     * @example `[{"name":"alilinux2:2.1903:ALINUX2-SA-2022:0007","uuid":"a3bb82a8-a3bd-4546-acce-45ac34af****","tag":"oval","isFront":0},{"name":"alilinux2:2.1903:ALINUX2-SA-2022:0007","uuid":"98a6fecc-88cd-46f2-8e35-f808a388****","tag":"oval","isFront":0}]`
     */
    "Info": string;
    /**
     * 漏洞的处理方式。取值：
     * - **vul_fix**：修复漏洞
     * - **vul_verify**：验证漏洞
     * - **vul_ignore**：忽略漏洞
     * - **vul\_undo\_ignore**：取消忽略
     * - **vul_delete**：删除漏洞
     * @example `vul_fix`
     */
    "OperateType": string;
    /**
     * 要处理的漏洞的类型。取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏洞
     * - **cms**：Web-CMS漏洞
     * - **emg**：应急漏洞
     * - **app**：应用漏洞
     * - **sca**：软件成分分析漏洞
     * > 应急漏洞（emg）、应用漏洞（app）和软件成分分析漏洞（sca）不支持执行漏洞修复操作。
     * @example `cve`
     */
    "Type": string;
    /**
     * 处理漏洞的方式为**忽略**时的原因。
     * > 仅漏洞的处理方式为**忽略**（即**OperateType**配置为**vul_ignore**）时，需要设置该参数。
     * @example `not operate`
     */
    "Reason"?: string;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From"?: string;
}
