export interface DescribeProjectOperateLogsResponse {
    /**
     * 成功状态标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID
     * @example `e6037e86-657f-4194-bb6a-7b26973aec8d`
     */
    RequestId: string;
    /**
     * 无
     */
    Result: {
        /**
         * 操作时间（Unix时间戳）
         * @example `1587624497000`
         */
        GmtCreate: number;
        /**
         * 操作人阿里云UID
         * @example `0`
         */
        Operator: number;
        /**
         * 操作人角色，取值：
         * - System：系统
         * - Custom：客户
         * - Provider：服务提供商
         * @example `System`
         */
        OperatorRole: string;
        /**
         * 操作内容描述
         * @example `进入分配服务商操作人`
         */
        Description: string;
        /**
         * 操作人名称
         * @example `系统`
         */
        OperatorName: string;
    }[];
}
