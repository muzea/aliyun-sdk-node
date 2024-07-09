export interface UploadRoutineCodeRequest {
    /**
     * 边缘函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 代码版本描述。
     * @example `Hello World`
     */
    "CodeDescription": string;
}
