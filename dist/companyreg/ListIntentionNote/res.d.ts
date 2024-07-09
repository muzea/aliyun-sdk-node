export interface ListIntentionNoteResponse {
    /**
     * 当前页码
     * @example `0`
     */
    CurrentPageNum: number;
    /**
     * 总页码
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 每页显示条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D`
     */
    RequestId: string;
    /**
     * 总记录数
     * @example `3`
     */
    TotalItemNum: number;
    /**
     * 小记列表
     */
    Data: {
        /**
         * 类型
         * @example `1`
         */
        Type: string;
        /**
         * 小记内容
         * @example `测试`
         */
        Note: string;
        /**
         * 来源
         * @example `1`
         */
        Source: number;
        /**
         * 创建时间
         * @example `2022-01-25 10:21:38`
         */
        CreateTime: string;
        /**
         * 需求ID
         * @example `I20210420142416000001`
         */
        IntentionBizId: string;
    }[];
}
