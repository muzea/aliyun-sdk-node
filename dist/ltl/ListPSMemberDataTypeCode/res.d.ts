export interface ListPSMemberDataTypeCodeResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应内容。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        Num: number;
        /**
         * 总条数。
         * @example `10`
         */
        Total: number;
        /**
         * 每页数量。
         * @example `2`
         */
        Size: number;
        /**
         * 数据项。
         */
        PageData: {
            /**
             * 账户标识。
             * @example `717534457003****`
             */
            MemberId: string;
            /**
             * 存证类型编码。
             * @example `E***`
             */
            DataTypeCode: string;
            /**
             * 账户名称。
             * @example `某某公司账户`
             */
            MemberName: string;
            /**
             * 阿里云RAM用户UID。
             * @example `19720316234381****`
             */
            MemberUid: string;
        }[];
    };
}
