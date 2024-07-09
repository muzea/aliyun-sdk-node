export interface DescribeComputeResourceResponse {
    /**
     * 计算资源规格列表。
     */
    ComputeResource: {
        /**
         * 控制台显示的计算资源规格。
         * @example `8 Core 32 GB（单机版）`
         */
        DisplayValue: string;
        /**
         * 真实的计算资源规格。
         * @example `8 Core 32 GB`
         */
        RealValue: string;
    }[];
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEAW`
     */
    RequestId: string;
}
