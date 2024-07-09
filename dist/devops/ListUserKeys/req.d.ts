export interface ListUserKeysRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513
    `
     */
    "accessToken"?: string;
    /**
     * 页码，默认值为1
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小，默认值为20，取值范围【1,100】
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 排序方式，默认值为desc
     * - asc：按排序字段升序排序
     * - desc：按排序字段降序排序
     * @example `desc`
     */
    "sort"?: string;
    /**
     * 排序字段，默认值为created_at
     * - created_at：创建时间
     * - updated_at：更新时间
     * @example `created_at`
     */
    "orderBy"?: string;
}
