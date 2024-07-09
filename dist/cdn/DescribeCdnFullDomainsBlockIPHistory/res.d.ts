export interface DescribeCdnFullDomainsBlockIPHistoryResponse {
    /**
     * 请求ID。
     * @example `BCD7D917-76F1-442F-BB75-C810DE34C761`
     */
    RequestId: string;
    /**
     * 操作结果。
     */
    IPBlockInfo: {
        /**
         * 下发的IP/IP段。
         * @example `1.XXX.XXX.0~1.XXX.XXX.255
        `
         */
        BlockIP: string;
        /**
         * 下发时间。
         * @example `2023-04-24 18:49:37
        `
         */
        DeliverTime: string;
        /**
         * 下发状态。
         * + Success：下发成功。
         * + Failed：下发失败，或未有下发记录。
         * @example `Success`
         */
        Status: string;
    }[];
    /**
     * 结果信息码。
     * Code不为0可能有以下三种情况：
     * + IP格式不正确。
     * + 时间格式不正确。
     * + 其他。
     * @example `0`
     */
    Code: number;
    /**
     * 接口返回状态描述。
     * @example `OK`
     */
    Description: string;
}
