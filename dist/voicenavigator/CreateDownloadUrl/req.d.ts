export interface CreateDownloadUrlRequest {
    /**
     * 任务id
     * @example `073f092da0a847b9bf76eb88b5931c7a`
     */
    "DownloadTaskId": string;
    /**
     * 文件的ID，您可以使用[ListFiles](~~173942~~)接口查询对应文件的ID。
     * @example `22626c39603744f5a08d4d715315561a`
     */
    "FileId": string;
}
