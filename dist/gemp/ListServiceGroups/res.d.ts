export interface ListServiceGroupsResponse {
    /**
     * Id of the request
     * @example `sssss`
     */
    requestId: string;
    /**
     * 服务组列表
     */
    data: {
        /**
         * 服务组ID
         * @example `1`
         */
        serviceGroupId: number;
        /**
         * 是否已经排班
         * @example `true`
         */
        isScheduled: boolean;
        /**
         * 服务组名字
         * @example `我的服务组`
         */
        serviceGroupName: string;
        /**
         * 服务组描述
         * @example `服务组描述`
         */
        serviceGroupDescription: string;
        /**
         * 修改时间
         * @example `2020-08-09 15:50:30`
         */
        updateTime: string;
        /**
         * ENABLE 启用 DISABLE 禁用
         * @example `ENABLE`
         */
        enableWebhook: string;
        /**
         * WEIXIN_GROUP 微信 DING_GROUP 钉钉 
         * @example `WEIXIN_GROUP`
         */
        webhookType: string;
        /**
         * webhook 跳转地址
         * @example `wwwwwwwwww`
         */
        webhookLink: string;
        /**
         * 服务组用户列表
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
             * 服务组ID
             * @example `1`
             */
            serviceGroupId: number;
            /**
             * 手机号
             * @example `1390000****`
             */
            phone: string;
            /**
             * 邮箱
             * @example `wy930***@163.com`
             */
            email: string;
            /**
             * 用户是否关联了移动APP1:是 0:否
             * @example `1`
             */
            isRelated: number;
        }[];
    }[];
    /**
     * 当前页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 分页大小
     * @example `10`
     */
    pageSize: number;
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
}
