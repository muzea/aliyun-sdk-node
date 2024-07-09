export interface ListFunctionFilesRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 文件类型，0：单文件；1：包文件
     * @example `1`
     */
    "FileType": number;
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
