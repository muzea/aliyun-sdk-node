export interface CreateDownloadUrlRequest {
    /**
     * 任务id，通话来自这个任务
     * @example `137da36b41304bcd999a0a7895dc6881`
     */
    "DownloadTaskId": string;
    /**
     * 文件ID，文件的唯一标识符。
     * @example `6f91885fa24b4c408d8f4eb392fd8ae6`
     */
    "FileId": string;
}
