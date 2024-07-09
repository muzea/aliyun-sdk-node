export interface ListRepositoryGroupsRequest {
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
     * 父路径的namespaceId
     * - 若查询所有组，那么该值为企业所对应的namespaceId（非organizationId）
     * - 若查询某个组下的所有组，那么该值为组所对应的namespaceId
     * @example `26842`
     */
    "parentId": number;
    /**
     * 页码
     * 默认值为1，从第1页开始
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小
     * 默认值为20，取值范围【1,100】
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 搜索关键字
     * @example `Demo`
     */
    "search"?: string;
    /**
     * 排序字段，仅有更新时间和创建时间的排序，默认为按照更新时间排序
     * - 更新时间：updated_at
     * - 创建时间：created_at
     * @example `updated_at`
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
     * 是否包含个人的私有组
     * @example `false`
     */
    "includePersonal"?: boolean;
}
