export interface GetUserResponse {
    /**
     * 用户信息。
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
         * @example `28`
         */
        CurResultCount: number;
        /**
         * 用户ID。
         * @example `51****`
         */
        UserId: string;
        /**
         * 最后登录控制台时间。
         * @example `2021-11-08 11:26:21`
         */
        LastLoginTime: string;
        /**
         * 当天最高查询行数。
         * @example `10000`
         */
        MaxResultCount: number;
        /**
         * 主账号UID。
         * >同一主账号UID下包含多个子账号UID。
         * @example `140692647406****`
         */
        ParentUid: number;
        RoleIdList: {
            /**
             * 角色ID列表。
             */
            RoleIds: number[];
        };
        RoleNameList: {
            /**
             * 角色名称列表。
             */
            RoleNames: string[];
        };
        /**
         * 用户昵称。
         * @example `User_NickName`
         */
        NickName: string;
        /**
         * 当天最高查询次数。
         * @example `2000`
         */
        MaxExecuteCount: number;
        /**
         * 当天查询次数。
         * @example `3`
         */
        CurExecuteCount: number;
        /**
         * 用户手机号码。
         * > - 如果您已经在控制台界面右上角头像处的**通知**里配置过手机号码，此处将返回。
         * > - 如果您没有配置过手机号码，此处则没有返回。
         * @example `1389223****`
         */
        Mobile: string;
        /**
         * 目标用户UID。
         * @example `22275482072787****`
         */
        Uid: string;
        /**
         * 电子邮箱，用于接收消息通知。
         * > - 如果您已经在控制台界面右上角头像处的**通知**里配置过电子邮箱，此处将返回。
         * > - 如果您没有配置过电子邮箱，此处则没有返回。
         * @example `Uesr_email`
         */
        Email: string;
        /**
         * 钉钉机器人，用于接收消息通知。
         * > - 如果您已经在控制台界面右上角头像处的**通知**里配置过钉钉机器人，此处将返回。
         * > - 如果您没有配置过钉钉机器人，此处则没有返回。
         * @example `https://XXX.dingtalk.com/robot/send?access_token=***`
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
         * Webhook签名方式。返回值说明如下：
         * - **NONE**：不签名
         * - **HMAC\_SHA1**：HMAC\_SHA1
         * @example `NONE`
         */
        SignatureMethod: string;
        /**
         * 消息通知方式，返回值可能为多个值，单个返回值说明如下：
         * - **SMS**：短信
         * - **EMAIL**：电子邮箱
         * - **DINGDING**：钉钉
         * - **DINGROBOT**：钉钉机器人
         * - **WEBHOOK**：Webhook
         * @example `EMAIL`
         */
        NotificationMode: string;
    };
    /**
     * 请求ID。
     * @example `804BB128-CAFA-5DD0-BA1E-43DDE488****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Unknown server error`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
