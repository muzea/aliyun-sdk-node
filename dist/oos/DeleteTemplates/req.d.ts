export interface DeleteTemplatesRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 将要删除模版名称列表
     * @example `["t1","t2"]`
     */
    "TemplateNames": string;
    /**
     * 删除模版时，是否顺带删除其相关的执行。
     * @example `false`
     */
    "AutoDeleteExecutions"?: boolean;
}
