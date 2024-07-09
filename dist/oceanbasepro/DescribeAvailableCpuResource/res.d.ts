export interface DescribeAvailableCpuResourceResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 可用的 CPU 资源列表信息。
     */
    Data: {
        /**
         * 租户的 unit 个数。
         * @example `2`
         */
        UnitNum: number;
        /**
         * 单个 unit 最小需申请的 CPU 核数。
         * @example `2`
         */
        MinCpu: number;
        /**
         * 单个 unit 最大可申请的 CPU 核数。
         * @example `10`
         */
        MaxCpu: number;
        /**
         * unitnum变更检查结果
         * @example `UnitNum.Change.Accept`
         */
        ReviewCode: string;
        /**
         * 建议
         * @example `UnitNum.RejectComment.Storage`
         */
        Comment: string;
    }[];
}
