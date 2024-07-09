export interface UpdateServiceGroupRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务组ID
         * @example `1`
         */
        serviceGroupId: number;
        /**
         * 是否开启webhook 0关闭  1开启
         * @example `ENABLE`
         */
        enableWebhook: string;
        /**
         * WEIXIN_GROUP 微信群 DING_GROUP 钉群
         * @example `WEIXINGROUP`
         */
        webhookType: string;
        /**
         * webhook跳转地址
         * @example `wwwwwww`
         */
        webhookLink: string;
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
         * 用户ID数组
         */
        userIds: number[];
        /**
         * 消息模版列表
         */
        monitorSourceTemplates: {
            /**
             * 消息模版ID
             * @example `1111`
             */
            templateId: number;
            /**
             * 监控源ID
             * @example `11111`
             */
            monitorSourceId: number;
            /**
             * 监控源名字
             * @example `zabbix`
             */
            monitorSourceName: string;
            /**
             * 模版内容
             * @example `内容`
             */
            templateContent: string;
        }[];
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
