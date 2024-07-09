export interface GetCMSIdByForeignIdResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE339D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 账户信息
     */
    Data: {
        /**
         * 账号状态
         * @example `1`
         */
        Status: number;
        /**
         * 客户类型
         * @example `1`
         */
        CustomerTypeId: number;
        /**
         * 头像
         * @example `xxxx`
         */
        Avatar: string;
        /**
         * 性别
         * @example `male`
         */
        Gender: string;
        /**
         * 外部id
         * @example `zhangsan`
         */
        ForeignId: string;
        /**
         * 用户id
         * @example `zhangsan`
         */
        UserId: string;
        /**
         * 昵称
         * @example `张三`
         */
        Nick: string;
        /**
         * 是否匿名
         * @example `false`
         */
        Anonymity: boolean;
        /**
         * 电话
         * @example `131111111111`
         */
        Phone: string;
    };
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
}
