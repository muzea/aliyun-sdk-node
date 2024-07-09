export interface DescribeTargetResponse {
    /**
     * 查询到的机器配置信息总数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `79CFF74D-E967-5407-8A78-EE03B925FDAA`
     */
    RequestId: string;
    /**
     * 漏洞类型对应的机器设置。
     */
    Targets: {
        /**
         * 标记，可为空。
         * @example `del`
         */
        Flag: string;
        /**
         * 目标，机器uuid或机器分组id。
         * @example `5c5f0169-3527-40a2-b5ff-0bc1db8f****`
         */
        Target: string;
        /**
         * 目标类型。取值为：
         * - **uuid**：按单个资产添加
         * - **groupId**：按照服务器分组添加
         * @example `uuid`
         */
        TargetType: string;
    }[];
}
