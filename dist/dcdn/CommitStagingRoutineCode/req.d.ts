export interface CommitStagingRoutineCodeRequest {
    /**
     * Routine函数名，在同一个账号下唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 代码版本描述。
     * @example `Hello World`
     */
    "CodeDescription": string;
}
