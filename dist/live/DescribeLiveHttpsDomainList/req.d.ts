export interface DescribeLiveHttpsDomainListRequest {
    /**
     * 取得第几页，取值范围为：**[1,10000]**。
     * @example `5`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 加速域名。
     * @example `demo.aliyun.com`
     */
    "Keyword"?: string;
}
