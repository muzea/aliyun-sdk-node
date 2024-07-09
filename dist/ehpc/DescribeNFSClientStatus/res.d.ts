export interface DescribeNFSClientStatusResponse {
    /**
     * 客户端部署状态。可能值：
     * - NotInstalled：未安装
     * - Running：安装中
     * - Finished：已安装
     * @example `Running`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `3EB7FCEE-D731-4948-85A3-4B2C341CA983`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Result: {
        /**
         * 命令执行结果。
         * @example `TmV3LUlWtmOWc6XxpZW50Rm9yLi4uDQ****`
         */
        Output: string;
        /**
         * 调用记录状态，与Status的状态一致。
         * @example `Running`
         */
        InvokeRecordStatus: string;
        /**
         * 使用base64解码Output字段，最后一个非空行为True表示安装成功，否则失败。
         * @example `0`
         */
        ExitCode: number;
    };
}
