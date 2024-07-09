export interface DescribeCasComputersRequest {
    /**
     * 分页参数，第几页
     * @example `21`
     */
    "CurrentPage"?: number;
    /**
     * 名称
     * @example `opscenter`
     */
    "Name"?: string;
    /**
     * 每页大小
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 工作空间
     * @example `shfinpre`
     */
    "Workspace": string;
    /**
     * 应用服务id列表
     */
    "AppServiceIdsRepeatList"?: string[];
}
