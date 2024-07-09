export interface DeleteRoutineCodeRevisionRequest {
    /**
     * Routine函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 需要删除的代码版本号。
     * @example `123456`
     */
    "SelectCodeRevision": string;
}
