export interface RecognizeBankCardResponse {
    /**
     * 请求ID。
     * @example `D9C7521-0367-42EE-9646-FD066CCADB26`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 银行卡号。
         * @example `6212262315007683105`
         */
        CardNumber: string;
        /**
         * 有效日期，识别失败则返回空字符串。如有多个，则用逗号分隔，例如`03/17,04/05`。
         * @example `07/26`
         */
        ValidDate: string;
        /**
         * 银行名称，识别失败则返回空字符串。
         * @example `中国工商银行`
         */
        BankName: string;
        /**
         * 银行卡类型。取值如下：
         * - CC：贷记卡
         * - SCC：准贷记卡
         * - DCC：存贷合一卡
         * - DC：储蓄卡
         * - PC：预付卡
         * @example `CC`
         */
        CardType: string;
    };
}
