export interface InstallCloudMonitorRequest {
    /**
     * 要安装的云监控插件的版本。您可以通过[插件概览](~~183431~~)获取最新的云监控插件版本。
     * @example `3.5.6`
     */
    "ArgusVersion": string;
    /**
     * 安装云监控插件时所需要的AccessKey。您可以调用[DescribeMonitoringAgentAccessKey](~~114948~~)接口获取该参数。
     * > 仅非阿里云服务器安装云监控插件需要设置此参数。
     * @example `usY*****R_U`
     */
    "AgentAccessKey"?: string;
    /**
     * 安装云监控插件时所需要的AccessSecret。您可以调用[DescribeMonitoringAgentAccessKey](~~114948~~)接口获取该参数。
     * > 仅非阿里云服务器安装云监控插件需要设置此参数。
     * @example `UCxF2R1sIO90XlU9****`
     */
    "AgentSecretKey"?: string;
    /**
     * 要安装云监控插件的服务器的实例ID列表。多个ID之间使用半角逗号（,）分隔。
     */
    "InstanceIdList"?: string[];
    /**
     * 要安装云监控插件的服务器的UUID列表。多个UUID之间使用半角逗号（,）分隔。
     */
    "UuidList"?: string[];
}
