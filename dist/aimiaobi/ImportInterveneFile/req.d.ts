export interface ImportInterveneFileRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 上传文件名字
     * @example `import.xls`
     */
    "DocName"?: string;
    /**
     * 文件地址
     * @example `http://xxx/xxx.xls`
     */
    "FileUrl"?: string;
    /**
     * 文件osskey
     * @example `import.xsl`
     */
    "FileKey"?: string;
}
