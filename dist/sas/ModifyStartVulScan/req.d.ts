export interface ModifyStartVulScanRequest {
    /**
     * 设置一键扫描功能检测的漏洞类型。可设置以下取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏洞
     * - **cms**：Web-CMS漏洞
     * - **app**：应用漏洞
     * - **emg**：应急漏洞
     * - **image**：容器镜像漏洞
     * - **sca**：软件成分分析
     * > 如果该取值为空，会检测所有漏洞类型。
     * @example `"cve,sys,cms,app,emg"`
     */
    "Types"?: string;
    /**
     * 服务器列表。
     * @example `{"i-sdada-xxxxx","i-ifaedada-sfsasdxxx"}`
     */
    "Uuids"?: string;
}
