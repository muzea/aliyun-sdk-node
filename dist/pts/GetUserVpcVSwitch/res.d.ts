export interface GetUserVpcVSwitchResponse {
    /**
     * 交换机的数量。
     * @example `6`
     */
    VSwitchCount: number;
    /**
     * 请求ID。
     * @example `0235E5FC-4C7C-5F0C-843C-FC674F15F947`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 每页显示记录条数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 交换机列表。
     */
    VSwitchList: {
        /**
         * 专有网络ID。
         * @example `vpc-wz9bpdaebft6j23fesdf84v2f1um3a`
         */
        VpcId: string;
        /**
         * 最大可添加施压机数量。
         * @example `1000`
         */
        MaxAgentCount: number;
        /**
         * 交换机中可用的IP地址数量。
         * @example `1000`
         */
        AvailableIpAddressCount: number;
        /**
         * 交换机ID。
         * @example `vsw-bp1eil9df23rsd8l1sevebiszooj`
         */
        VSwitchId: string;
        /**
         * 虚拟交换机名称
         * @example `my-vswitch`
         */
        VSwitchName: string;
    }[];
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
