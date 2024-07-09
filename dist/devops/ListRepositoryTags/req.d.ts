export interface ListRepositoryTagsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `611b75680fc7bf0dbe1dce55`
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
     * 页码
     * 默认值为1，从第1页开始
     * @example `2`
     */
    "page"?: number;
    /**
     * 每页大小
     * 默认值为20，取值范围【1,100】
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 排序方式，默认值为updated_desc
     * - updated_asc：更新时间，升序
     * - updated_desc：更新时间，降序
     * - name_asc：标签名称，升序
     * - name_desc：标签名称，降序
     * @example `updated_desc`
     */
    "sort"?: string;
    /**
     * 搜索关键字（匹配标签名称）
     * @example `Demo`
     */
    "search"?: string;
}
