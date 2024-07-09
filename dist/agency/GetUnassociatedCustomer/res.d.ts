export interface GetUnassociatedCustomerResponse {
    /**
     * 错误代码，候选值:
     * 200: OK
     * 1109: 系统错误
     * @example `200`
     */
    Code: string;
    /**
     * message信息
     * @example `成功`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后 续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 分页信息
     */
    PageInfo: {
        /**
         * 分页，每页数量
         * @example `10`
         */
        PageSize: number;
        /**
         * 分页，总量
         * @example `12`
         */
        Total: number;
        /**
         * 分页，当前页
         * @example `1`
         */
        Page: number;
    };
    InviteInfoList: {
        /**
         * 邀请信息列表
         */
        InviteInfo: {
            /**
             * 邀请状态:
             * - 0 未访问注册URL
             * - 1 成功注册
             * - 2 注册失败
             * - 3 已访问注册URL但是没有提交表单
             * @example `1`
             */
            Status: number;
            /**
             * 发送邮件的时间
             * @example `2023-05-10`
             */
            GmtCreate: string;
            /**
             * 被邀请客户名称
             * @example `我的客户`
             */
            AccountNickname: string;
            /**
             * 被邀请者email
             * @example `12345@qq.com`
             */
            Email: string;
            /**
             * 邀请ID
             * @example `190`
             */
            InviteId: number;
        }[];
    };
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `23309219-4A34-589D-A3E0-9B2A3BFFD24F`
     */
    RequestId: string;
}
