export interface GetServiceGroupResponse {
    /**
     * 请求ID
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 返回结果
     */
    data: {
        /**
         * 修改时间
         * @example `2020-05-03 15:39:39`
         */
        updateTime: string;
        /**
         * 用户ID数组
         */
        users: {
            /**
             * 用户ID
             * @example `10`
             */
            userId: number;
            /**
             * 用户名字
             * @example `jack`
             */
            userName: string;
            /**
             * 手机号
             * @example `1390000****`
             */
            phone: string;
            /**
             * 服务组ID
             * @example `1`
             */
            serviceGroupId: number;
            roleNameList: string[];
        }[];
        /**
         * 服务组描述
         * @example `服务描述`
         */
        serviceGroupDescription: string;
        /**
         * webhook 跳转地址
         * @example `wwwwwww`
         */
        webhookLink: string;
        /**
         * webhook类型 WEIXIN_GROUP 企微群  DING_GROUP钉钉群
         * @example `WEIXIN_GROUP`
         */
        webhookType: string;
        /**
         * ENABLE 启用 DISABLE 禁用
         * @example `ENABLE`
         */
        enableWebhook: string;
        /**
         * 服务组名称
         * @example `冲上云霄`
         */
        serviceGroupName: string;
        /**
         * 服务组ID
         * @example `1000`
         */
        serviceGroupId: number;
        /**
         * 创建时间
         * @example `2020-08-08 10:00:00`
         */
        createTime: string;
    };
}
