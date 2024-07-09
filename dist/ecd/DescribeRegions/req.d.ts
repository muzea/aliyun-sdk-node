export interface DescribeRegionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定业务Location的展示语言，默认是中文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
