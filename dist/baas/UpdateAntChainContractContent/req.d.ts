export interface UpdateAntChainContractContentRequest {
    /**
     * 文件ID
     * @example `R6XMn59e`
     */
    "ContentId": string;
    /**
     * 上级目录ID
     * @example `R38DYDop`
     */
    "ParentContentId"?: string;
    /**
     * 更新文件/文件夹名称
     * @example `newFile`
     */
    "ContentName"?: string;
    /**
     * 文件内容
     * @example `update content`
     */
    "Content"?: string;
}
