export interface DescribeRoutineCodeRevisionRequest {
    /**
     * 边缘函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 需要查看的JS代码版本号。
     * @example `1611151912787121550`
     */
    "SelectCodeRevision": string;
}
