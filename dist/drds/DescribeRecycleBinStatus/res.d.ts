export interface DescribeRecycleBinStatusResponse {
    /**
     * 表回收站状态，取值范围如下：
     * * disable：未开启
     * * enable：开启
     * @example `disable`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `ACB5258F-25AF-4D7C-8FAA-B6FE60******`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
