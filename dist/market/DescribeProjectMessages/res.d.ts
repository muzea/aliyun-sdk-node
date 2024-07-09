export interface DescribeProjectMessagesResponse {
    /**
     * 请求ID
     * @example `00eb4de1-6cff-4f56-833e-7b1e070e398d`
     */
    RequestId: string;
    /**
     * 留言总条数
     * @example `28`
     */
    TotalCount: number;
    /**
     * 成功状态标识
     * @example `true`
     */
    Success: boolean;
    Result: {
        /**
         * 留言时间（Unix时间戳）
         * @example `1589015560000`
         */
        GmtCreate: number;
        /**
         * 留言人的阿里云UID
         * @example `452611111****`
         */
        Operator: number;
        /**
         * 操作人角色，取值：
         * - System：系统
         * - Custom：客户
         * - Provider：服务提供商
         * @example `Provider`
         */
        OperatorRole: string;
        /**
         * 留言内容
         * @example `尊敬的客户您好，我们已经为您上传了方案，请您查阅，然后尽快将您的意见反馈给我们。`
         */
        Content: string;
        /**
         * 留言人名称
         * @example `***科技技术有限公司`
         */
        OperatorName: string;
    }[];
}
