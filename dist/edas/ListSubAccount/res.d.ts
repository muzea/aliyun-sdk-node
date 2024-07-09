export interface ListSubAccountResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `message`
     */
    Message: string;
    /**
     * 请求ID
     * @example `57609587-DFA2-41EC-****-*********`
     */
    RequestId: string;
    SubAccountList: {
        /**
         * 子账号和RAM用户列表
         */
        SubAccount: {
            /**
             * 子账号或RAM用户的EdasId
             * @example `28382009411268****`
             */
            SubEdasId: string;
            /**
             * 子账号或RAM用户的UserId
             * @example `ram1@117274586608****`
             */
            SubUserId: string;
            /**
             * 电子邮箱
             * @example `email@aliyun.com`
             */
            Email: string;
            /**
             * 云账号的UserId
             * @example `test@13624697***`
             */
            AdminUserId: string;
            /**
             * 云账号的Kp（旧概念，实际上就是云账号的EdasId）
             * @example `12456889****`
             */
            AdminUserKp: string;
            /**
             * 云账号的EdasId。
             * @example `12456889****`
             */
            AdminEdasId: string;
            /**
             * 子账号或RAM用户的Kp（旧概念，实际上就是子账号或RAM用户的EdasId）
             * @example `28382009411268****`
             */
            SubUserKp: string;
            /**
             * 联系方式
             * @example `1373322****`
             */
            Phone: string;
        }[];
    };
}
