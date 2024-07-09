export interface GenerateFileUrlByKeyRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 文件key。格式为：protocol://serverInstance/bucketPath/fileKey
     * @example `oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx`
     */
    "FileKey"?: string;
    /**
     * 文件名称
     * @example `test.docx`
     */
    "FileName"?: string;
}
