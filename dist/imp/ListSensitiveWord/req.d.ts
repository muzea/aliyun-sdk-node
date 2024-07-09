export interface ListSensitiveWordRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 分页查询的当前页，从1开始，每次分页查询时递增加1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 单次分页查询的大小。如果不填，默认为100，如果超过100，则被限制为100。
     * @example `100`
     */
    "PageSize"?: number;
}
