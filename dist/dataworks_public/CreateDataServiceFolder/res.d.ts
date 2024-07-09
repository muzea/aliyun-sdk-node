export interface CreateDataServiceFolderResponse {
    /**
     * 创建的文件夹ID。
     * @example `123`
     */
    FolderId: number;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-E****`
     */
    RequestId: string;
}
