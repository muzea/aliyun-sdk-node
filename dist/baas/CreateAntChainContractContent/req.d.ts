export interface CreateAntChainContractContentRequest {
    /**
     * 合约工程ID
     * @example `bDXK1b8Z`
     */
    "ProjectId": string;
    /**
     * 上级目录ID
     * @example `R38DYDop`
     */
    "ParentContentId"?: string;
    /**
     * 新建文件/文件夹名称
     * @example `newFile`
     */
    "ContentName": string;
    /**
     * 是否是文件夹
     * @example `false`
     */
    "IsDirectory": boolean;
    /**
     * 新建文件/文件夹内容
     * @example `""`
     */
    "Content"?: string;
}
