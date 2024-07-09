export interface DescribeInfrastructuresResponse {
    /**
     * 请求ID
     * @example `32AC7E7F-5484-548D-8D3F-905238B75080`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
    Infrastructures: {
        /**
         * 基础设施信息列表
         */
        infrastructure: {
            /**
             * 基础设施类型
             * @example `aliyun`
             */
            Type: string;
            /**
             * 状态
             * @example `connected`
             */
            Status: string;
            /**
             * IP地址
             * @example `172.18.122.66`
             */
            IpAddress: string;
            /**
             * 基础设施ID
             * @example `is-0005qxusucbig0c42dlo`
             */
            InfrastructureId: string;
            /**
             * 状态异常原因
             * @example `cdr.console.plugin.failed_to_connect`
             */
            Errno: string;
            /**
             * 基础设施名称
             * @example `si-0006w0mxd3w8jiifu77l-infrastructure1`
             */
            Name: string;
        }[];
    };
}
