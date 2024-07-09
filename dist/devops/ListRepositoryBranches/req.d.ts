export interface ListRepositoryBranchesRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2709413`
     */
    "repositoryId": number;
    /**
     * 页码，默认值为1，从第1页开始。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小，默认值为20，取值范围【1,100】
     * @example `20`
     */
    "pageSize"?: number;
    /**
     * 搜索关键字
     * @example `Demo`
     */
    "search"?: string;
    /**
     * 排序方式，默认为 updated_desc
     * - updated_desc：按更新时间降序排序
     * - updated_asc：按更新时间升序排序
     * @example `updated_desc`
     */
    "sort"?: string;
}
