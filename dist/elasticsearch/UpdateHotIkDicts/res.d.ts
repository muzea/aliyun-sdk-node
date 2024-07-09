export interface UpdateHotIkDictsResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 词典文件大小，单位：Byte。
         * @example `6`
         */
        fileSize: number;
        /**
         * 词典文件来源类型，支持：
         * - OSS：使用OSS开放存储
         * - ORIGIN：保留之前已经上传的词典
         * @example `OSS`
         */
        sourceType: string;
        /**
         * 词典文件名。
         * @example `deploy_0.dic`
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
