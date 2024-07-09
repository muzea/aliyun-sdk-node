export interface ListFunctionExecuteLogRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 文件ID
     * @example `1`
     */
    "FileId": number;
    /**
     * 函数名
     * @example `someFunc`
     */
    "FunctionName": string;
    /**
     * 函数所部署的环境，0：沙箱环境；1：生产环境。
     * @example `0`
     */
    "Env": number;
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
