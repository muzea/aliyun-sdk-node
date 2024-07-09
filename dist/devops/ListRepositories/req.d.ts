export interface ListRepositoriesRequest {
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
     * 页码
     * 默认值为1，从第1页开始。
     * @example `2`
     */
    "page"?: number;
    /**
     * 每页大小
     * 默认值为20，取值范围【1,100】
     * @example `20`
     */
    "perPage"?: number;
    /**
     * 排序字段
     * 可选值：created_at,id,name,path,updated_at,last_activity_at”
     * @example `created_at`
     */
    "orderBy"?: string;
    /**
     * 排序方式
     * 默认值为desc
     * desc - 降序
     * asc - 升序
     * @example `desc`
     */
    "sort"?: string;
    /**
     * 搜索关键字
     * @example `Demo`
     */
    "search"?: string;
    /**
     * 是否列出归档项目
     * 可选值：true / false
     * @example `false`
     */
    "archived"?: boolean;
    /**
     * 最小权限过滤，枚举值：
     * - 20：浏览者
     * - 30：开发者
     * - 40：管理员
     * @example `40`
     */
    "minAccessLevel"?: number;
}
