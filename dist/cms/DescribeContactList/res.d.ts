export interface DescribeContactListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `06D5ECC2-B9BE-42A4-8FA3-1A610FB08B83`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `15`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Contacts: {
        /**
         * 报警联系方式。
         */
        Contact: {
            /**
             * 报警更新时间戳。
             * 单位：毫秒。
             * @example `1552356159000`
             */
            UpdateTime: number;
            /**
             * 报警联系人姓名。
             * @example `Alice`
             */
            Name: string;
            /**
             * 报警创建时间戳。
             * 单位：毫秒。
             * @example `1552356159000`
             */
            CreateTime: number;
            /**
             * 报警的语言类型。取值：
             * - zh-cn：简体中文。
             * - en：英文。
             * @example `zh-cn`
             */
            Lang: string;
            /**
             * 描述信息。
             * @example `ECS联系人`
             */
            Desc: string;
            ContactGroups: {
                /**
                 * 无。
                 */
                ContactGroup: string[];
            };
            /**
             * 报警通知方式。
             */
            Channels: {
                /**
                 * 邮件地址。
                 * @example `Alice@example.com`
                 */
                Mail: string;
                /**
                 * 旺旺名称。
                 * @example `Alice`
                 */
                AliIM: string;
                /**
                 * 钉钉机器人地址。
                 * @example `https://oapi.dingtalk.com/robot/send?access_token=9bf44f8189597d07dfdd7a123455ffc112****`
                 */
                DingWebHook: string;
                /**
                 * 手机号码。
                 * @example `1333333****`
                 */
                SMS: string;
            };
            /**
             * 报警通道的状态。
             * <props="china">因为短信、电话号码和Email需要激活以后才能使用，所以当添加或修改报警通道时，如果处于未激活状态，则为PENDING；如果处于激活状态，则为OK。</props>
             * <props="intl">因为Email需要激活以后才能使用，所以当添加或修改报警通道时，如果处于未激活状态，则为PENDING；如果处于激活状态，则为OK。</props>
             * <props="partner">因为Email需要激活以后才能使用，所以当添加或修改报警通道时，如果处于未激活状态，则为PENDING；如果处于激活状态，则为OK。</props>
             */
            ChannelsState: {
                /**
                 * Email的状态。取值：
                 * - PENDING：对应报警通道未激活，激活后才能使用。
                 * - OK：对应报警通道正常，可正常报警。
                 * @example `PENDING`
                 */
                Mail: string;
                /**
                 * 旺旺名称的状态正常。
                 * 目前取值只支持：OK。OK表示旺旺名状态正常，对应的报警通道正常，可正常报警。
                 * > 该参数仅适用于中国站。
                 * @example `OK`
                 */
                AliIM: string;
                /**
                 * 钉钉机器人的状态正常。
                 * 目前取值只支持：OK。OK表示钉钉机器人状态正常，对应的报警通道正常，可正常报警。
                 * @example `OK`
                 */
                DingWebHook: string;
                /**
                 * 短信的状态。取值：
                 * - PENDING：对应报警通道未激活，激活后才能使用。
                 * - OK：对应报警通道正常，可正常报警。
                 * > 该参数仅适用于中国站。
                 * @example `OK`
                 */
                SMS: string;
            };
        }[];
    };
}
