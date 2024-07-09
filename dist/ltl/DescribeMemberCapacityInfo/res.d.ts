export interface DescribeMemberCapacityInfoResponse {
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
         * 用户已使用该业务链容量（单位：字节）。
         * @example `70000000`
         */
        UsedCapacity: string;
        /**
         * 账户标识。
         * @example `717534457003****`
         */
        MemberId: string;
        /**
         * 账户名称。
         * @example `张三`
         */
        MemberName: string;
        /**
         * 用户已使用该业务链条数。
         * @example `26666`
         */
        UsedCount: string;
        /**
         * 阿里云RAM用户UID。
         * @example `19720316234381****`
         */
        MemberUid: string;
    }[];
}
