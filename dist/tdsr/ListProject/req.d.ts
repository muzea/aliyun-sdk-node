export interface ListProjectRequest {
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 页长
     * @example `20`
     */
    "PageSize": number;
    /**
     * 项目名称（使用name%搜索）
     * @example `项目A`
     */
    "Name"?: string;
}
