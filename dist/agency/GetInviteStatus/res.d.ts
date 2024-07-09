export interface GetInviteStatusResponse {
    /**
     * 状态码  错误代码值: 3057: InviteId为空
     * @example `200`
     */
    Code: string;
    /**
     * 提示信息
     * @example `成功`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功 的。不代表后续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 返回数据
         */
        InviteStatus: {
            /**
             * 结果码
             * 取值范围:
             *  - 200 OK
             * - 1109 系统错误
             * @example `200`
             */
            Code: string;
            /**
             * 提示信息
             * @example `成功`
             */
            Message: string;
            /**
             * 候选值:True/False，代表了是否当前API调用本身是成功 的。不代表后续业务操作的成功。
             * @example `true`
             */
            Success: boolean;
            /**
             * 邀请记录状态结果list
             */
            InviteStatusList: {
                /**
                 * 发送邀请邮件的时间
                 * @example `2018-02-12`
                 */
                GmtCreate: string;
                /**
                 * 邀请状态:
                 * - 0 未访问注册URL
                 * - 1 注册失败
                 * - 2 成功注册
                 * - 3 已访问注册URL但是没有提交表单
                 * @example `2`
                 */
                Status: number;
                /**
                 * 账户类型:
                 * - 1 Agency的终端客户
                 * - 2 Reseller的终端客户
                 * - 5 Reseller类型2级伙伴
                 * @example `1`
                 */
                SubAccountType: string;
                /**
                 * 分销客户账户所属分销商UID。
                 * @example `1093238769140523`
                 */
                ParentId: string;
                /**
                 * 分销客户账户成功关联分销商账户的时间。如果没有关联则为空。
                 * @example `2018-02-13`
                 */
                AssociationSuccessTime: string;
                /**
                 * 分销客户CID
                 * @example `1234567890123`
                 */
                Cid: number;
                /**
                 * 分销客户UID
                 * @example `1234567890123`
                 */
                Uid: number;
            };
        }[];
    };
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
