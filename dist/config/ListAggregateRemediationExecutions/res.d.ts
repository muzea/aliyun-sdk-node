export interface ListAggregateRemediationExecutionsResponse {
    /**
     * 请求ID。
     * @example `13E67493-3165-529A-A961-BE9E4B11BA11`
     */
    RequestId: string;
    /**
     * 修正执行记录结果。
     */
    RemediationExecutionData: {
        /**
         * 修正执行记录列表。
         */
        RemediationExecutions: {
            /**
             * 修正执行记录调用ID。
             * @example `exec-befded3781994ccf****`
             */
            ExecutionInvocationId: string;
            /**
             * 修正执行记录状态，取值：
             * - Success：成功。
             * - Failed：失败。
             * @example `Success`
             */
            ExecutionStatus: string;
            /**
             * 修正资源类型。
             * @example `ACS::RDS::DBInstance`
             */
            ExecutionResourceType: string;
            /**
             * 修正执行记录创建时间。
             * @example `2023-06-25T11:48:15Z`
             */
            ExecutionCreateDate: string;
            /**
             * 修正执行失败的错误信息。
             * @example `Invocation time out.`
             */
            ExecutionStatusMessage: string;
            /**
             * 修正的资源ID。多个资源ID用半角逗号（,）分隔。
             * @example `rm-0jlk629z240l8****`
             */
            ExecutionResourceIds: string;
        }[];
        /**
         * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
         * @example `cNclqNaKs0Ds7zSNip0a****`
         */
        NextToken: string;
        /**
         * 单次请求返回结果的最大条数。
         * @example `10`
         */
        MaxResults: number;
    };
}
