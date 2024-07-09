export interface DescribeRegionsRequest {
    /**
     * 地域名称和可用区名称（即返回数据中`LocalName`）返回值所使用的语言，取值说明：
     * * **zh-CN**：中文。
     * * **en-US**：英文。
     * * **ja**：日文。
     * > 若该参数不填写，默认使用中文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
}
