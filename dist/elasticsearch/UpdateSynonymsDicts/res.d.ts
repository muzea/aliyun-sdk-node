export interface UpdateSynonymsDictsResponse {
    /**
     * 请求ID。
     * @example `7C5622CC-B312-426F-85AA-B0271*******`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 词典文件大小，单位：Byte。
         * @example `220`
         */
        fileSize: number;
        /**
         * 词典文件来源类型，支持：
         * - OSS：OSS开放存储
         * - ORIGIN：保留之前已经上传的词典
         * @example `OSS`
         */
        sourceType: string;
        /**
         * 词典文件名称。
         * @example `deploy_0.txt`
         */
        name: string;
        /**
         * 词典类型，支持：SYNONYMS（同义词）。
         * @example `SYNONYMS`
         */
        type: string;
    }[];
}
