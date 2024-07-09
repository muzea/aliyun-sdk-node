export interface Mobile3MetaVerifyIntlResponse {
    /**
     * 请求Id
     * @example `D241532C-4EE9-5A2A-A5A5-C1FD98CE2EDD`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 核验结果码。
         * - 1：核验一致
         * - 2：核验不一致
         * - 3：未查得
         * @example `1`
         */
        BizCode: string;
        /**
         * 核验详细结果
         * - 101:验证通过
         * - 201:⼿机号和姓名不⼀致，⼿机号和证件号不⼀致
         * - 202:⼿机号和姓名⼀致，⼿机号和证件号不⼀致
         * - 203:⼿机号和证件号⼀致，⼿机号和姓名不⼀致
         * - 204:其他不⼀致
         * - 301:查⽆记录
         * @example `101`
         */
        SubCode: string;
        /**
         * 运营商名称
         * - CMCC：移动
         * - CUCC：联通
         * - CTCC：电信
         * @example `CMCC`
         */
        IspName: string;
    };
}
