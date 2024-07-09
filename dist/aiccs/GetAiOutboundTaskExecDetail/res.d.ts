export interface GetAiOutboundTaskExecDetailResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口是否调用成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务执行列表。
     */
    Data: {
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 是否有下一页。
         * @example `true`
         */
        HasNextPage: boolean;
        /**
         * 任务总数。
         * @example `199`
         */
        TotalResults: number;
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 外呼号码执行列表。
         */
        List: {
            /**
             * 本次外呼关联的活动ID。
             * @example `123456`
             */
            CaseId: number;
            /**
             * 任务批次。
             * @example `1`
             */
            BatchVersion: number;
            /**
             * 业务自定义信息
             * @example `123`
             */
            BizData: string;
            /**
             * 外呼号码。
             * @example `150****0000`
             */
            PhoneNum: string;
            /**
             * 外呼次数。
             * @example `1`
             */
            CallCount: number;
            /**
             * 执行状态。取值：
             * - **1**：待呼叫。
             * - **2**：呼叫中。
             * - **3**：已完成。
             * - **4**：已终止。
             * - **5**：待重呼。
             * @example `1`
             */
            Status: number;
            /**
             * 执行状态描述。
             * @example `待呼叫`
             */
            StatusDesc: number;
            /**
             * 最后一次外呼结果。
             * @example `未接通`
             */
            LastCallResult: string;
            /**
             * 号码导入时间。时间戳格式，单位戳：毫秒。
             * @example `1632289999000`
             */
            CreateTime: number;
        }[];
    };
}
