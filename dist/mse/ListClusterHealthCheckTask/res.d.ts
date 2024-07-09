export interface ListClusterHealthCheckTaskResponse {
    /**
     * 请求ID。
     * @example `4E9FDCFE-0738-493B-B801-82BDFBCB****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * Code仅仅用来和success同步
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 列表的页码。
         * @example `0`
         */
        PageNumber: number;
        /**
         * 查询到的总数。
         * @example `9`
         */
        TotalSize: number;
        /**
         * 输入时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 风险评估任务列表。
         */
        Result: {
            /**
             * ID。
             * @example `1`
             */
            Id: number;
            /**
             * 总得分。
             * @example `60`
             */
            Score: number;
            /**
             * 总检查项数。
             * @example `10`
             */
            TotalItem: number;
            /**
             * 总风险项数。
             * @example `3`
             */
            TotalRisk: number;
            /**
             * 实例ID。
             * @example `mse_ingresspost-cn-0jbvrcex****`
             */
            InstanceId: string;
            /**
             * 集群类型。
             * @example `Nacos-Ans`
             */
            ClusterType: string;
            /**
             * 冗余字段。
             * @example `null
            `
             */
            Type: string;
            /**
             * 任务状态。
             * @example `FINISH`
             */
            Status: string;
            /**
             * 集群归属用户ID。
             * @example `123456`
             */
            PrimaryUser: string;
            /**
             * 规格。
             * @example `MSE_SC_2_4_200_c`
             */
            Spec: string;
            /**
             * 集群节点数量。
             * @example `3`
             */
            Replica: string;
            /**
             * 版本号。
             * @example `NACOS_ANS_1_2_1_3`
             */
            VersionCode: string;
            /**
             * 完整版本号。
             * @example `1.2.1`
             */
            AppVersion: string;
            /**
             * 冗余字段。
             * @example `null`
             */
            ImageVersion: string;
            /**
             * 任务创建时间。
             * @example `2022-06-20T06:51:46Z`
             */
            CreateTime: string;
            /**
             * 最后更新时间。
             * @example `2022-11-12 15:07:55`
             */
            UpdateTime: string;
            /**
             * 风险项列表。
             */
            RiskList: {
                /**
                 * ID。
                 * @example `3426`
                 */
                Id: number;
                /**
                 * 关联的父任务ID。
                 * @example `1`
                 */
                TaskId: number;
                /**
                 * 风险名称。
                 * @example `引擎版本过低`
                 */
                RiskName: string;
                /**
                 * 风险编码。
                 * @example `22020010001`
                 */
                RiskCode: string;
                /**
                 * 集群归属用户ID。
                 * @example `123456`
                 */
                PrimaryUser: string;
                /**
                 * 冗余字段。
                 * @example `null`
                 */
                Type: number;
                /**
                 * 冗余字段。
                 * @example `null`
                 */
                Values: string;
                /**
                 * 冗余字段。
                 * @example `null`
                 */
                Module: string;
                /**
                 * 风险类型。
                 * @example `版本风险`
                 */
                RiskType: string;
                /**
                 * 风险等级，取值：
                 * - HIGH  高风险
                 * - MID   中风险
                 * - LOW  低风险
                 * @example `MID`
                 */
                RiskLevel: string;
                /**
                 * 建议。
                 * @example `{\"desc\":\"请尽快升级至最新版本\",\"links\":[{\"type\":\"upgrade\",\"desc\":\"点击升级\"}]}`
                 */
                Suggestion: string;
                /**
                 * 现状。
                 * @example `{\"desc\":\"当前引擎版本过低，有大量功能缺失\",\"links\":[{\"type\":\"url\",\"value\":\"https://xxxx"\",\"desc\":\"版本说明\"}]}`
                 */
                Situation: string;
                /**
                 * 描述说明。
                 * @example `{\"desc\":\"引擎版本过低，有大量功能缺失，请尽快升级至最新版本！\"}`
                 */
                Description: string;
                /**
                 * 是否禁用此风险项通知功能。
                 * - true  禁用风险项通知
                 * - false 开启风险项通知
                 * @example `false`
                 */
                Mute: boolean;
                /**
                 * 冗余字段。
                 * @example `null`
                 */
                NoticeFeature: boolean;
            }[];
            /**
             * 付费类型。
             * @example `PREPAY`
             */
            ChargeType: string;
        }[];
    };
}
