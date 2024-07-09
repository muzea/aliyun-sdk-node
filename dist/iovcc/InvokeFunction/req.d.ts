export interface InvokeFunctionRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 函数文件ID
     * @example `1`
     */
    "FileId": number;
    /**
     * 函数名称
     * @example `someFunc`
     */
    "FunctionName": string;
    /**
     * 函数所部署的环境，0：沙箱环境；1：生产环境。
     * @example `0`
     */
    "Env": number;
    /**
     * 调用函数的入参
     * @example `{"key":"value"}`
     */
    "Parameters": string;
}
