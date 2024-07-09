export interface QueryMallCategoryListResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号
     * @example `7152F15C-7298-5531-9A76-2ED2C331****`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `SUCCESS`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `SUCCESS`
     */
    SubMessage: string;
    /**
     * 本次执行的结果成功与否
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的执行结果码
     * @example `0000`
     */
    Code: string;
    /**
     * 错误消息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 商品类目信息
     */
    Model: {
        /**
         * 后台类目ID
         * @example `5001****`
         */
        CategoryId: number;
        /**
         * 类目名称
         * @example `***电子产品`
         */
        Name: string;
        /**
         * 父类目ID
         * @example `1041577**`
         */
        ParentId: number;
        /**
         * 是否是叶子类目
         * @example `true`
         */
        Leaf: boolean;
    }[];
}
