export interface GetAuthVersionStatisticResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2CA2BDF6-F3BD-51A4-BAAC-30B02F7A3FBB`
     */
    RequestId: string;
    /**
     * 资产授权版本统计信息集合。
     */
    Statistics: {
        /**
         * 云安全中心版本。取值：
         * - **1**：免费版（未授权）
         * - **6**：防病毒版
         * - **5**：高级版
         * - **3**：企业版
         * - **7**：旗舰版
         * - **10**：仅采购增值服务
         * @example `6`
         */
        AuthVersion: number;
        /**
         * 当前授权的服务器数量。
         * @example `1`
         */
        Count: number;
    }[];
}
