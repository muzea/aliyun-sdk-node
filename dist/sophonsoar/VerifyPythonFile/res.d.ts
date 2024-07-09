export interface VerifyPythonFileResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F72685FB-A6E6-5A9A-97F7-6DC1056E63CE`
     */
    RequestId: string;
    /**
     * python代码的校验结果集，如果为空，则表示代码语法正确
     */
    Syntax: {
        /**
         * 报错代码的启始行数
         * @example `2`
         */
        StartLineNumber: number;
        /**
         * 报错代码的启始列数
         * @example `2`
         */
        StartColumn: number;
        /**
         * 报错代码的结束行数
         * @example `5`
         */
        EndLineNumber: number;
        /**
         * 报错代码的结束列数
         * @example `5`
         */
        EndColumn: number;
        /**
         * 代码的具体报错信息
         * @example `undefined name 'ab'`
         */
        Message: string;
        /**
         * 代码的错误等级
         * - 4 表示一般错误
         * - 8 表示严重错误
         * @example `4`
         */
        Severity: number;
    }[];
}
