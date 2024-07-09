export interface ListAddonsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 查询参数。
     * @example `mysql`
     */
    "Search"?: string;
    /**
     * 查询字段，是否正则匹配, 默认为false。
     * @example `false`
     */
    "Regexp"?: boolean;
    /**
     * 语言环境，默认为中文 zh | en。
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 标签筛选。
     * @example `database`
     */
    "Category"?: string;
}
