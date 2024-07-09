export interface ListMergeRequestsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
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
     * 页码，默认值为1，从第1页开始
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小，默认值为20，取值范围【1,100】
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 代码组ID，支持多个ID，以逗号分隔
     * @example `889910, 889911`
     */
    "groupIds"?: string;
    /**
     * 代码库ID，支持多个ID，以逗号分隔
     * @example `2308912, 2308913`
     */
    "projectIds"?: string;
    /**
     * 创建人阿里云账号ID，支持多个，以逗号分隔
     * @example `1234567890`
     */
    "authorIds"?: string;
    /**
     * 评审人阿里云账号ID，支持多个，以逗号分隔
     * @example `1234567890123`
     */
    "reviewerIds"?: string;
    /**
     * 合并请求状态，默认查询所有状态
     * - opened：已开启，包含评审中、待合并、待开发状态
     * - closed：已关闭
     * - merged：已合并
     * - all：所有，若是all，可以不用传值；其他无效字符，也默认查询所有。
     * @example `opened`
     */
    "state"?: string;
    /**
     * 搜索关键字，匹配合并请求的标题
     * @example `test-search`
     */
    "search"?: string;
    /**
     * 排序字段，默认值为updated_at
     * - created_at：创建时间
     * - updated_at：更新时间
     * 若传入其他无效字符，默认使用updated_at
     * @example `updated_at`
     */
    "orderBy"?: string;
    /**
     * 排序方式，默认值为desc
     * - desc：降序
     * - asc：升序
     * @example `desc`
     */
    "sort"?: string;
    /**
     * 该字段主要用于过滤新旧版本的合并请求，默认不过滤，同时获取新旧版本的内容，若是一直使用新版合并请求，可忽略该参数。可选值：
     * - new：仅查询新版合并请求
     * - old：仅查询旧版合并请求
     * @example `new`
     */
    "filter"?: string;
    /**
     * 类标ID列表，多个ID以逗号分隔
     * @example `b5b5738b94954bc6aa5a293316ed1d24`
     */
    "labelIds"?: string;
    /**
     * 起始创建时间
     * > ISO 8601格式，如2019-03-15T08:00:00Z，大小比较为 "大于等于"
     * @example `2019-03-15T08:00:00Z`
     */
    "createdBefore"?: string;
    /**
     * 截止创建时间
     * > ISO 8601格式，如2019-03-15T08:00:00Z，大小比较为 "小于"
     * > 创建时间范围：[createdBefore, createdAfter)，即左闭右开区间
     * @example `2019-03-15T08:00:00Z`
     */
    "createdAfter"?: string;
}
