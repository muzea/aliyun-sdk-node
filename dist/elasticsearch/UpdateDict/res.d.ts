export interface UpdateDictResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 词典文件大小，单位：Byte。
         * @example `2782602`
         */
        fileSize: number;
        /**
         * 词典文件来源类型，支持：
         * - OSS：OSS开放存储
         * - ORIGIN：保留之前已经上传的词典
         * @example `ORIGIN`
         */
        sourceType: string;
        /**
         * 词典文件名称。
         * @example `SYSTEM_MAIN.dic`
         */
        name: string;
        /**
         * 词典类型，支持：
         * - MAIN：IK主分词词库
         * - STOP：IK停用词词库
         * @example `MAIN`
         */
        type: string;
    }[];
}
