export interface ModifyRankingModelResponse {
    /**
     * 结果
     */
    result: {
        /**
         * 排序模型ID
         * @example `test1234`
         */
        rankingModelId: string;
        /**
         * 修改时间
         * @example `2020-11-11T09:47:43.000Z`
         */
        gmtModified: string;
        /**
         * 创建时间
         * @example `2020-11-11T09:47:43.000Z`
         */
        gmtCreate: string;
        /**
         * 数据源信息，召回表的数据来源，目前只支持ODPS
         * @example `{}`
         */
        meta: any;
    };
    /**
     * 错误code
     * @example `1`
     */
    code: string;
    /**
     * 请求id
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
    /**
     * 返回消息
     * @example `An internal server error occurred`
     */
    message: string;
}
