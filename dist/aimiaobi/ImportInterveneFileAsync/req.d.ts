export interface ImportInterveneFileAsyncRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 上传文件名字
     * @example `import.xls`
     */
    "DocName"?: string;
    /**
     * 文件地址
     * @example `https://xxx/import.xls`
     */
    "FileUrl"?: string;
    /**
     * 文件osskey
     * @example `import.xls`
     */
    "FileKey"?: string;
}
