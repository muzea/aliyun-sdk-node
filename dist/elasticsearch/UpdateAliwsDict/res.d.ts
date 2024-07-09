export interface UpdateAliwsDictResponse {
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
         * 文件大小，单位：Byte。
         * @example `6226`
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
         * 上传的文件名称。
         * @example `aliws_ext_dict.txt`
         */
        name: string;
        /**
         * 词典类型，支持：ALI_WS（AliNLP分词）。
         * @example `ALI_WS`
         */
        type: string;
    }[];
}
