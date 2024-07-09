export interface QuotaListExportPagedRequest {
    /**
     * 分页页码，从1开始
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 每页大小，最大100
     * @example `10`
     */
    "PageSize": number;
    /**
     * 多语言参数，默认英文
     * en：英文
     * zh：中文
     * ja：日文
     * @example `en`
     */
    "Language"?: string;
}
