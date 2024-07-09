export interface DescribeCapacityInfoResponse {
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
         * 该业务链的条数配额。
         * @example `10000000`
         */
        CountQuota: number;
        /**
         * 该业务链的容量配额（单位：字节）。
         * @example `800000000000`
         */
        CapacityQuota: number;
        /**
         * 该业务链已使用条数。
         * @example `30000`
         */
        UsedCount: number;
        /**
         * 该业务链已使用容量（单位：字节）。
         * @example `870000000`
         */
        UsedCapacity: number;
        /**
         * 当前用户在该业务链已使用的容量（单位：字节）。
         * @example `70000000`
         */
        MemberUsedCapacity: number;
        /**
         * 当前用户该业务链已使用的条数。
         * @example `26666`
         */
        MemberUsedCount: number;
    };
}
