export interface DeleteDomainRequest {
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    "DomainName": string;
}
