export interface DeleteFunctionFileRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 文件名
     * @example `hello.zip`
     */
    "FileName": string;
    /**
     * 文件类型。**0**：单文件；**1**：包文件。
     * @example `1`
     */
    "FileType"?: number;
}
