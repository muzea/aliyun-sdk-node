export interface ListCardAreaLimitSupportAreaRequest {
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * 默认不填中文
     * @example `en`
     */
    "AcceptLanguage"?: string;
    /**
     * 区域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 省份名称（非必填）。
     * @example `浙江省`
     */
    "ProvinceName"?: string;
}
