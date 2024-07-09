export interface ListCasesResponse {
    /**
     * 请求ID。
     * @example `7CC6523B-0E51-1B62-8DA5-6A9831CAE316`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `100`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 联系人名单执行详情列表。
         */
        List: {
            /**
             * 通话被放弃的类型，即未成功接通的原因。
             * @example `NA`
             */
            AbandonType: string;
            /**
             * 已尝试次数，对该联系人的总呼叫次数。
             * @example `1`
             */
            AttemptCount: number;
            /**
             * 外呼失败原因。
             * @example `无`
             */
            FailureReason: string;
            /**
             * 电话号码。
             * @example `1888888****`
             */
            PhoneNumber: string;
            /**
             * 状态。
             * @example `Connected`
             */
            State: string;
            /**
             * 系统生成的联系人ID，客户无需关心。
             * @example `60ecb1a2-4480-4d01-bede-c5b7655bfadf`
             */
            CaseId: string;
            /**
             * 客户自定义变量，格式为JSON对象，对象最多包含10个属性，每个属性的名称和值均由客户自定义，客户在创建预测式外呼活动时可以设置。
             * @example `{"name":"yy","客戶标签":"tag-yy"}`
             */
            CustomVariables: string;
            /**
             * 通话被放弃的阶段。
             *  -  IVR(IVR交互阶段),
             *  - Queuing(排队阶段),
             *  - Ringing(坐席振铃阶段).
             * @example `Ringing`
             */
            AbandonPhase: string;
        }[];
    };
}
