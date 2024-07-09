export interface SearchAlertContactResponse {
    /**
     * 请求ID。
     * @example `21E85B16-75A6-429A-9F65-8AAC9A54****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PageBean: {
        /**
         * 返回结果的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 返回结果的每页项目数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回结果的总项数数量。
         * @example `23`
         */
        TotalCount: number;
        /**
         * 联系人对象列表。
         */
        Contacts: {
            /**
             * 更新时间的时间戳。
             * @example `1580258717000`
             */
            UpdateTime: number;
            /**
             * 钉钉机器人Webhook URL。
             * @example `https://oapi.dingtalk.com/robot/send?access_token=91f2f6****`
             */
            DingRobot: string;
            /**
             * Webhook信息。
             * @example `{\"body\":\"{   \\\"msg_type\\\": \\\"text\\\",   \\\"content\\\": {     \\\"text\\\": \\\"$content\\\"   } }\",\"header\":{\"Arms-Content-Type\":\"json\"},\"method\":\"post\",\"params\":{},\"url\":\"https://***",\"userId\":\"1131971649***\"}",`
             */
            Webhook: string;
            /**
             * 联系人邮箱地址。
             * @example `someone@example.com`
             */
            Email: string;
            /**
             * 联系人ID。
             * @example `123`
             */
            ContactId: number;
            /**
             * 创建时间的时间戳。
             * @example `1572349025000`
             */
            CreateTime: number;
            /**
             * 用户ID。
             * @example `113197164949****`
             */
            UserId: string;
            /**
             * 联系人名称。
             * @example `John Doe`
             */
            ContactName: string;
            /**
             * 是否接收系统通知：
             * - `true`：接收系统通知。
             * - `false`：不接收系统通知。
             * @example `false`
             */
            SystemNoc: boolean;
            /**
             * 联系人所在的联系人组。如果联系人被添加至多个联系人组中，则多个联系人组之间会使用竖线（|）分隔。
             * @example `默认分组|SRE分组`
             */
            Content: string;
            /**
             * 联系人电话号码。
             * @example `1381111*****`
             */
            Phone: string;
            /**
             * 资源组 ID。
             * @example `rg-acfmxyexli2****`
             */
            ResourceGroupId: string;
        }[];
    };
}
