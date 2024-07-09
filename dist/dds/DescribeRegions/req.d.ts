export interface DescribeRegionsRequest {
    /**
     * 地域ID。
     * >如果不填写，默认查询所有支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定返回参数**RegionName**和**ZoneName**的语言，取值说明：
     * - **zh**：默认值，中文。
     * - **en**：英文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
