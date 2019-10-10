interface GenerateVulReportRequest {
    "RegionId"?: string;
    "TaskIds": string[];
    /**
    * 指定访问源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定返回结果的语言环境。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { GenerateVulReportRequest };