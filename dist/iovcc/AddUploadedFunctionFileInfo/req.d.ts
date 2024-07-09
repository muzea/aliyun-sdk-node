export interface AddUploadedFunctionFileInfoRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 已上传的文件标识符
     * @example `function/file/1288127240930711/PE9FQC48/B1226EA3-2518-4164-8D2D-82B91A077020/hello.zip`
     */
    "ObjectKey": string;
    /**
     * 文件名
     * @example `hello.zip`
     */
    "FileName": string;
}
