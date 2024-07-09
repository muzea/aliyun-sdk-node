export interface ListLiveFilesResponse {
    /**
     * Id of the request
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 文件列表。
         */
        FileList: {
            /**
             * 文件名称。
             * @example `12345/**​/1.ts`
             */
            FileName: string;
            /**
             * 文件下载地址，有效期为7天。
             * @example `https://aliyundoc.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3/1.ts`
             */
            Url: string;
        }[];
    };
}
