export interface GetQualityFollowerResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `38cbdef0-f6cf-49`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 订阅关系的信息。
     */
    Data: {
        /**
         * 订阅人的阿里云账号名称。
         * @example `test`
         */
        FollowerAccountName: string;
        /**
         * 分区表的名称。
         * @example `dual`
         */
        TableName: string;
        /**
         * 告警的模式，取值如下：
         * - 1（邮件）
         * - 2（邮件和短信）
         * - 4（钉钉群机器人或hook）
         * - 5（钉钉群机器人@ALL）
         * @example `1`
         */
        AlarmMode: number;
        /**
         * 分区表达式的ID。
         * @example `1234`
         */
        EntityId: string;
        /**
         * 引擎或者数据源的名称。
         * @example `autotest`
         */
        ProjectName: string;
        /**
         * 订阅关系的ID。
         * @example `123`
         */
        Id: number;
        /**
         * 订阅人，用于接收告警信息。
         * @example `1234`
         */
        Follower: string;
        /**
         * 数据质量规则订阅配置的创建时间。
         * @example `1541576644000`
         */
        CreateTime: number;
        /**
         * 数据质量规则订阅配置的更新时间。
         * @example `1541576644000`
         */
        ModifyTime: number;
    }[];
}
