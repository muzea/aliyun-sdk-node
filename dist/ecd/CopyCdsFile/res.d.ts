export interface CopyCdsFileResponse {
    /**
     * 请求ID。
     * @example `93AD30C1-16B8-5C54-AD23-A51FF53F****`
     */
    RequestId: string;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `success`
     */
    Message: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 复制文件结果。
     */
    CopyCdsFileModel: {
        /**
         * 异步任务ID。当复制文件时，不返回该字段；当复制文件夹时，因为是后台异步复制，所以会返回该字段，调用[GetAsyncTask](~~2357404~~)并传入该异步任务ID即可获取任务详细信息。
         * @example `4221bf6e6ab43a255edc4463bffa6f5f5d31****`
         */
        AsyncTaskId: string;
        /**
         * 复制后的新文件或文件夹ID。
         * @example `6400727cb878821bcb414615a609b4072463****`
         */
        FileId: string;
    };
}
