export interface DescribeFabricConsortiumSpecsResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 联盟的规格列表
     */
    Result: {
        /**
         * 规格名
         * @example `basic`
         */
        SpecName: string;
        /**
         * 标题
         * @example `基础版`
         */
        SpecTitle: string;
        /**
         * 是否启用
         * @example `true`
         */
        Enable: boolean;
    }[];
}
