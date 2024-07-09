export interface ListDeployedFunctionsResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 函数记录
     */
    Functions: {
        /**
         * 项目ID
         * @example `PE9FQC48`
         */
        ProjectId: string;
        /**
         * 创建时间，精确到毫秒的Unix时间戳
         * @example `1535604251000`
         */
        GmtCreate: number;
        /**
         * 函数名
         * @example `someFunc`
         */
        Name: string;
        /**
         * 修改时间，精确到毫秒的Unix时间戳
         * @example `1535872636000`
         */
        GmtModified: number;
        /**
         * 函数ID
         * @example `1`
         */
        Id: number;
        /**
         * 文件ID
         * @example `1`
         */
        FileId: number;
    }[];
}
