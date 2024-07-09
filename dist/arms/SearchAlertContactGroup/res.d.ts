export interface SearchAlertContactGroupResponse {
    /**
     * 请求ID
     * @example `4D6C358A-A58B-4F4B-94CE-F5AAF023****`
     */
    RequestId: string;
    /**
     * 报警联系人分组信息
     */
    ContactGroups: {
        /**
         * 更新时间的时间戳
         * @example `1529668855000`
         */
        UpdateTime: number;
        /**
         * 报警联系人分组名称
         * @example `TestGroup`
         */
        ContactGroupName: string;
        /**
         * 报警联系人分组ID
         * @example `746`
         */
        ContactGroupId: number;
        /**
         * 创建时间的时间戳
         * @example `1529668855000`
         */
        CreateTime: number;
        /**
         * 用户ID
         * @example `113197164949****`
         */
        UserId: string;
        /**
         * 联系人对象列表
         */
        Contacts: {
            /**
             * 更新时间的时间戳
             * @example `1580258717000`
             */
            UpdateTime: number;
            /**
             * 钉钉机器人Webhook URL
             * @example `https://oapi.dingtalk.com/robot/send?access_token=91f2f6****`
             */
            DingRobot: string;
            /**
             * 联系人邮箱地址
             * @example `someone@example.com`
             */
            Email: string;
            /**
             * 联系人ID
             * @example `123`
             */
            ContactId: number;
            /**
             * 创建时间的时间戳
             * @example `1572349025000`
             */
            CreateTime: number;
            /**
             * 用户ID
             * @example `113197164949****`
             */
            UserId: string;
            /**
             * 联系人名称
             * @example `John Doe`
             */
            ContactName: string;
            /**
             * 是否接收系统通知：
             * - true：接收系统通知
             * - false：不接收系统通知
             * @example `false`
             */
            SystemNoc: boolean;
            /**
             * 联系人电话号码
             * @example `1381111*****`
             */
            Phone: string;
        }[];
    }[];
}
