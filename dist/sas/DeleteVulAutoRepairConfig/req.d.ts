export interface DeleteVulAutoRepairConfigRequest {
    /**
     * 漏洞类型。取值：
     * - cve：Linux软件漏洞
     * - sys：Windows系统漏洞
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 漏洞别名。
     * @example `RHSA-2017:0184-Important: mysql security update`
     */
    "AliasName"?: string;
    /**
     * 指定要删除的配置ID列表。
     * > 您可以调用[ListVulAutoRepairConfig](~~ListVulAutoRepairConfig~~)接口获取配置ID。
     */
    "ConfigIdList"?: number[];
}
