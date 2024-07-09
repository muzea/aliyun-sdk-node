export interface DescribeApiHistoryRequest {
    /**
     * API分组ID，系统生成，全局唯一。
     * @example `3013a55c0c44483f984d26df27120513`
     */
    "GroupId"?: string;
    /**
     * 指定的API编号。
     * @example `dc6e17ee3120404c839bbcd7622ab6ed`
     */
    "ApiId": string;
    /**
     * 环境名称，取值为：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * - **PRE**：预发
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 指定要查询的历史版本号。
     * @example `20211122155403834`
     */
    "HistoryVersion": string;
}
