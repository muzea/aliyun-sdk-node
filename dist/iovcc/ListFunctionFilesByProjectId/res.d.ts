export interface ListFunctionFilesByProjectIdResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 文件记录
     */
    Files: {
        /**
         * 文件类型，0：单文件；1：包文件
         * @example `1`
         */
        Type: number;
        /**
         * 文件状态，0：正常；1：已删除
         * @example `0`
         */
        Status: number;
        /**
         * 创建时间，精确到毫秒的Unix时间戳
         * @example `1535604251000`
         */
        GmtCreate: number;
        /**
         * 修改时间，精确到毫秒的Unix时间戳
         * @example `1535872636000`
         */
        GmtModified: number;
        /**
         * 文件名
         * @example `hello.zip`
         */
        Name: string;
        /**
         * 文件ID
         * @example `1`
         */
        Id: number;
        /**
         * 文件内容ID
         * @example `1`
         */
        ContentId: number;
    }[];
}
