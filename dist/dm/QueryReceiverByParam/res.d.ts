export interface QueryReceiverByParamResponse {
    /**
     * 分页使用。如果还有更多结果，下次请求将该返回值设置到请求中的NextStart
     * @example `6aec200853#102#1638894326#rdwilbur@verizon.net`
     */
    NextStart: string;
    /**
     * 每页显示的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 总数量
     * @example `15`
     */
    TotalCount: number;
    data: {
        /**
         * 收件人列表详细信息
         */
        receiver: {
            /**
             * 收件人列表别名
             * @example `10***@163.com`
             */
            ReceiversAlias: string;
            /**
             * 收件人列表名称
             * @example `TKP000442-333`
             */
            ReceiversName: string;
            /**
             * 创建时间
             * @example `2019-09-29T13:28Z`
             */
            CreateTime: string;
            /**
             * 收件人列表ID
             * @example `0c910a7143044b1e116719eb678907b3`
             */
            ReceiverId: string;
            /**
             * UTC格式的创建时间
             * @example `1569734892`
             */
            UtcCreateTime: number;
            /**
             * 列表状态。取值：
             * - 0：正在上传
             * - 1：上传完成
             * @example `0`
             */
            ReceiversStatus: string;
            /**
             * 收件人地址总数
             * @example `3`
             */
            Count: string;
            /**
             * 描述
             * @example `通知`
             */
            Desc: string;
        }[];
    };
}
