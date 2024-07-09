export interface ListEdgeTranscodeJobRequest {
    /**
     * 机房ID。
     * @example `cluster-1`
     */
    "ClusterId": string;
    /**
     * 边缘转码类型，枚举：
     * - common，通用(普通+窄带高清1.0)。
     * - nbhd-2，窄带高清2.0。
     * - ultra-hd，超高清。
     * > 该参数不填写时，会展示用户有对应转码类型权限的转码模板
     * @example `common`
     */
    "Type"?: string;
    /**
     * 边缘转码任务状态，枚举：
     * - 0 未启动。
     * - 1 运行中。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 当前页码。默认值为1.
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，即每页显示条数。默认值为10，最大值为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 排序规则，按CreateTime排序。默认是desc，枚举：
     * - desc 降序排序。
     * - asc 升序排序。
     * @example `desc`
     */
    "SortBy"?: string;
    /**
     * 搜索关键词，枚举：
     * - 任务ID，任务ID支持精确匹配。
     * - 任务名称，任务名称支持模糊搜索。
     * @example `test`
     */
    "Keyword"?: string;
}
