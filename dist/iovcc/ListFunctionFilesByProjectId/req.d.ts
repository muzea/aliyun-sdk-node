export interface ListFunctionFilesByProjectIdRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 目标页号，默认为1
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页所显示的项数，默认为10
     * @example `10`
     */
    "PageSize"?: number;
}
