export interface ExecuteSparkStatementRequest {
    /**
     * 一段代码块，使用Linux系统的 '\n' 来代表切到新的一行。
     * @example `print(2+2)\n`
     */
    "Code": string;
    /**
     * Spark作业的ID。
     * @example `j202106071620hangzhou****`
     */
    "JobId": string;
    /**
     * 执行代码的语言是什么, 取值：
     * - **scala**
     * - **python**
     * - **sql**
     * @example `sql`
     */
    "Kind"?: string;
}
