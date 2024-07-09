export interface QueryReceiverDetailResponse {
    /**
     * Data收件人内容的字段名
     * @example `UserName,NickName,Gender,Birthday,Mobile`
     */
    DataSchema: string;
    /**
     * 分页使用。如果还有更多结果，下次请求将该返回值设置到请求中的NextStart
     * @example `90f0243616#401#b68c2af70b9664b2843f90fd3630b1a3-1650779410#xxx@demo.aliyun.com`
     */
    NextStart: string;
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 总数量（废弃字段，历史原因兼容）
     * @example `361`
     */
    TotalCount: number;
    data: {
        /**
         * 详情信息
         */
        detail: {
            /**
             * 内容
             * @example `{'Domains': ['a.example.net', 'b.example.net', 'c.example.net', 'd.example.net']}`
             */
            Data: string;
            /**
             * UTC格式的创建时间
             * @example `1569734892`
             */
            UtcCreateTime: number;
            /**
             * 收件人地址
             * @example `a***@example.net`
             */
            Email: string;
            /**
             * 创建时间
             * @example `2019-09-29T13:28Z`
             */
            CreateTime: string;
        }[];
    };
}
