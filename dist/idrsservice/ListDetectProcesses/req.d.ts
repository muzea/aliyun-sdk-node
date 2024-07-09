export interface ListDetectProcessesRequest {
    /**
     * 页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 检测流程名称
     * @example `检测流程名称`
     */
    "Name"?: string;
    /**
     * 是否发布
     * @example `true`
     */
    "PublishStatus"?: boolean;
    /**
     * 类型：remote（远程双录），local（本地双录）
     * @example `LOCAL`
     */
    "Type"?: string;
    /**
     * 排序
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * 排序字段:CONTENT发布时间、DRAFT草稿时间
     * @example `CONTENT`
     */
    "SortKey"?: string;
}
