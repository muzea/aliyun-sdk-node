export interface ListProjectLabelsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https:
     * //devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID或者全路径
     * @example `2835387 或 codeup/codeup-demo`
     */
    "repositoryIdentity": string;
    /**
     * 搜索关键字，匹配类标名称
     * @example `TEST`
     */
    "search"?: string;
    /**
     * 页码，默认值为1，从第1页开始
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小，默认值为20，取值范围【1,100】
     * @example `20`
     */
    "pageSize"?: number;
    /**
     * 排序字段，可选值：
     * - label_name：默认，按类标名称排序
     * @example `label_name`
     */
    "orderBy"?: string;
    /**
     * 排序方式，默认为desc
     * - desc：降序
     * - asc：升序
     * @example `desc`
     */
    "sort"?: string;
    /**
     * 是否返回关联的合并请求数量，默认为false，不返回
     * @example `false`
     */
    "withCounts"?: boolean;
}
