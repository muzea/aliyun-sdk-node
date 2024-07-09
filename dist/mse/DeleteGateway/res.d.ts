export interface DeleteGatewayResponse {
    /**
     * 请求ID。
     * @example `2FFEA345-BE30-5FE0-8885-42E2DEFD5FE6`
     */
    RequestId: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因，例如：TaskId not found。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码。状态码为200表示成功，其余取值表示失败。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 主键ID。
         * @example `12`
         */
        Id: number;
        /**
         * 网关名称。
         * @example `mse-bc1a29b0-reg-center-0-1`
         */
        Name: string;
        /**
         * 网关唯一ID，系统自动生成的唯一标示符。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 用户信息。
         * @example `1231254`
         */
        PrimaryUser: string;
        /**
         * 网关状态：
         * 0: 创建中
         * 1: 创建失败
         * 2: 运行中
         * 3: 变更中
         * 4: 缩容中
         * 6: 扩容中
         * 8: 删除中
         * 10: 重启中
         * 11: 重建中
         * 12: 升级中
         * 13: 升级失败
         * @example `1`
         */
        Status: number;
        /**
         * 网关归属的VpcId
         * @example `vpc-bp1328cm01m6uel42b5zb`
         */
        Vpc: string;
        /**
         * 交换机ID。
         * @example `vsw-bp18zeqxx6mpuq843z4n5`
         */
        Vswitch: string;
        /**
         * 安全组。
         * @example `sg-bp11ufzqn6mmb8dtzz82`
         */
        SecurityGroup: string;
        /**
         * 网关规格。
         * @example `MSE_GTW_16_32_200_c`
         */
        Spec: string;
        /**
         * 网关副本数量。
         * @example `2`
         */
        Replica: number;
        /**
         * 创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 最后一次更新网关实例的时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
    };
}
