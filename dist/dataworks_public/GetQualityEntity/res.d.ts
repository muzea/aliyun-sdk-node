export interface GetQualityEntityResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `6d739ef6-098a-47****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 分区表达式关联的调度节点信息，包括：
         * - ProjectName：调度节点所在的项目名称。
         * - NodeID：调度节点的节点ID。
         * @example `[{"projectName":"xc_DP****","nodeId":7000026****}]`
         */
        RelativeNode: string;
        /**
         * 责任人的阿里云账号名称。
         * @example `test`
         */
        OnDutyAccountName: string;
        /**
         * 任务节点。
         * @example `0`
         */
        Task: number;
        /**
         * 分区表名称。
         * @example `test_dqc_de****`
         */
        TableName: string;
        /**
         * 订阅人，接收告警信息的阿里云账号ID。
         * @example `1822931****`
         */
        Followers: string;
        /**
         * 责任人，指配置分区表达式的账号ID。
         * @example `1822931****`
         */
        OnDuty: string;
        /**
         * 分区表达式。
         * @example `dt=$[yyyymmdd-1]`
         */
        MatchExpression: string;
        /**
         * 创建分区表达式的时间。
         * @example `1593964800000`
         */
        CreateTime: number;
        /**
         * 引擎或数据源的名称。
         * @example `autotest`
         */
        ProjectName: string;
        /**
         * 是否关联调度，取值如下：
         * - true：已关联调度。
         * - false：未关联调度。
         * @example `true`
         */
        HasRelativeNode: boolean;
        /**
         * 引擎或者数据源的类型。
         * @example `odps`
         */
        EnvType: string;
        /**
         * 分区表达式的级别，取值如下：
         * - 0（SQL级别）：指每段SQL语句执行完毕后都会触发DQC执行校验。
         * - 1（任务级别）：指所有SQL语句均执行完毕后，统一进行校验。
         * @example `0`
         */
        EntityLevel: number;
        /**
         * 更新人，指更新分区表达式的账号ID。
         * @example `1822931****`
         */
        ModifyUser: string;
        /**
         * SQL级别的分区表达式。
         * @example `0`
         */
        Sql: number;
        /**
         * 分区表达式ID。
         * @example `4003918`
         */
        Id: number;
        /**
         * 更新分区表达式的时间。
         * @example `1593964800000`
         */
        ModifyTime: number;
    }[];
}
