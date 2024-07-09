export interface DescribeRegionsRequest {
    /**
     * 指定地域支持的语言。取值：
     * - zh（默认值）：中文。
     * - en：英文。
     * - ja：日文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId"?: string;
}
