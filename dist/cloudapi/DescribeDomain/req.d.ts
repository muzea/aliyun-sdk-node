export interface DescribeDomainRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    "DomainName": string;
}
