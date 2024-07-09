export interface DescribeContactListByContactGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The group is not exists.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `06D5ECC2-B9BE-42A4-8FA3-1A610FB08B83`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Contacts: {
        /**
         * 报警联系人。
         */
        Contact: {
            /**
             * 更新报警联系人的时间戳。
             * 单位：毫秒。
             * @example `1552323252000`
             */
            UpdateTime: number;
            /**
             * 报警联系人的姓名。
             * @example `Alice`
             */
            Name: string;
            /**
             * 创建报警联系人的时间戳。
             * 单位：毫秒。
             * @example `1552314252000`
             */
            CreateTime: number;
            /**
             * 报警联系组的描述。
             * @example `ECS`
             */
            Desc: string;
            /**
             * 报警通道。
             */
            Channels: {
                /**
                 * 报警联系人的Email地址。
                 * @example `alice@example.com`
                 */
                Mail: string;
                /**
                 * 报警联系人的旺旺名称。
                 * > 该参数仅适用于中国站。
                 * @example `Alice`
                 */
                AliIM: string;
                /**
                 * 报警联系人的钉钉机器人地址。
                 * @example `https://oapi.dingtalk.com/robot/send?access_token=9bf44f8189597d07dfdd7a123455ffc112****`
                 */
                DingWebHook: string;
                /**
                 * 报警联系人的手机号码。
                 * > 该参数仅适用于中国站。
                 * @example `1333333****`
                 */
                SMS: string;
            };
        }[];
    };
}
