export interface ListUsersResponse {
    /**
     * 满足条件的记录总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `69161997-6030-53BA-A333-DBEC83B732FF`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidTid`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Specified parameter Tid is not valid.`
     */
    ErrorMessage: string;
    UserList: {
        /**
         * 用户详情列表。
         */
        User: {
            /**
             * 用户状态，返回值说明如下：
             * - **NORMAL**：正常
             * - **DISABLE**：禁用
             * - **DELETE**：已删除
             * @example `NORMAL`
             */
            State: string;
            /**
             * 当天查询行数。
             * @example `0`
             */
            CurResultCount: number;
            /**
             * 用户ID。
             * @example `8****`
             */
            UserId: string;
            /**
             * 最后登录时间。
             * @example `2021-11-08 13:43:43`
             */
            LastLoginTime: string;
            /**
             * 当天最高查询行数。
             * @example `50000`
             */
            MaxResultCount: number;
            /**
             * 父账号UID。
             * @example `140692647406****`
             */
            ParentUid: string;
            RoleIdList: {
                /**
                 * 角色ID列表。
                 */
                RoleIds: number[];
            };
            RoleNameList: {
                /**
                 * 角色列表。
                 */
                RoleNames: string[];
            };
            /**
             * 用户昵称。
             * @example `test_NickName`
             */
            NickName: string;
            /**
             * 当天最高查询次数。
             * @example `2000`
             */
            MaxExecuteCount: number;
            /**
             * 当天查询次数。
             * @example `0`
             */
            CurExecuteCount: number;
            /**
             * 用户手机号码。
             * > - 如果您已经在控制台界面右上角头像处的**通知**里配置过手机号码，此处将返回。
             * > - 如果您没有配置过手机号码，此处则没有返回。
             * @example `1389999****`
             */
            Mobile: string;
            /**
             * 用户UID。
             * @example `167382665015****`
             */
            Uid: string;
            /**
             * 电子邮箱，用于接收消息通知。
             * > - 如果您已经在控制台界面右上角头像处的**通知**里配置过电子邮箱，此处将返回。
             * > - 如果您没有配置过电子邮箱，此处则没有返回。
             * @example `username@example.com`
             */
            Email: string;
            /**
             * 钉钉机器人，用于接收消息通知。
             * > - 如果您已经在控制台界面右上角头像处的**通知**里配置过钉钉机器人，此处将返回。
             * > - 如果您没有配置过钉钉机器人，此处则没有返回。
             * @example `https://XXX.dingtalk.com/robot/send?access_token=9b7a4a562cbe7fcdea9962afac7b9d7b4504d564948083419750f9cafa78e4ef`
             */
            DingRobot: string;
            /**
             * Webhook，用于接收消息通知。
             * > - 如果您已经配置过Webhook，当DMS中有消息通知时，系统会将消息通知发送到您指定的URL地址。
             * > - 如果您没有配置过，此处则没有返回。
             * @example `http://dms-XXX.aliyun.com:8***`
             */
            Webhook: string;
            /**
             * Webhook签名方式，返回值说明如下：
             * - **NONE**：不签名
             * - **HMAC\_SHA1**：HMAC\_SHA1
             * @example `HMAC_SHA1`
             */
            SignatureMethod: string;
            /**
             * 消息通知方式，返回值可能为多个值，单个返回值说明如下：
             * - **SMS**：短信
             * - **EMAIL**：电子邮箱
             * - **DINGDING**：钉钉
             * - **DINGROBOT**：钉钉机器人
             * - **WEBHOOK**：Webhook
             * @example `DINGROBOT`
             */
            NotificationMode: string;
        }[];
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
