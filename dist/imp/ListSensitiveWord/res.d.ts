export interface ListSensitiveWordResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用查询敏感词的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 敏感词的列表。
         */
        WordList: string[];
        /**
         * 总共添加的敏感词总数。
         * @example `100`
         */
        TotalCount: number;
    };
}
