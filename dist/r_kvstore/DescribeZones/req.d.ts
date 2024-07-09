export interface DescribeZonesRequest {
    /**
     * 地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId"?: string;
    /**
     * 设置返回后可用区名称的语言，取值：
     * * **zh-CN**（默认）：中文。
     * * **en-US**：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
}
