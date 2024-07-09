export interface QuerySlsLogStoreListRequest {
    /**
     * 应用ID。
     * @example `af58edcf-f7eb-****-****-db4e425f****`
     */
    "AppId": string;
    /**
     * 日志服务采集类型：
     * - file: 文件类型。
     * - stdout: 标准输出类型。
     * @example `file`
     */
    "Type": string;
    /**
     * 查询页面大小。
     * @example `1000`
     */
    "PageSize"?: number;
    /**
     * 查询页码，从1开始编号。
     * @example `1`
     */
    "CurrentPage"?: number;
}
