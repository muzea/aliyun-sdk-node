export interface CreateServiceGroupRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务小组名称
         * @example `我的服务组`
         */
        serviceGroupName: string;
        /**
         * 用户ID
         */
        userIds: number[];
        /**
         * 是否开启webhook
         * DISABLE关闭
         * ENABLE开启
         * @example `ENABLE`
         */
        enableWebhook: string;
        /**
         * webhookType   WEIXIN_GROUP 微信   DING_GROUP 钉钉
         * @example `WEIXIN_GROUP 微信群 DING_GROUP`
         */
        webhookType: string;
        /**
         * 服务描述
         * @example `这个是一个服务描述`
         */
        serviceGroupDescription: string;
        /**
         * webhooklink
         * @example `WWWWWWW`
         */
        webhookLink: string;
        /**
         * 监控源消息模版
         */
        monitorSourceTemplates: {
            /**
             * 消息模版ID
             * @example `111`
             */
            templateId: number;
            /**
             * 监控源ID
             * @example `111`
             */
            monitorSourceId: number;
            /**
             * 监控源名字
             * @example `zabbix`
             */
            monitorSourceName: string;
            /**
             * 模版内容
             * @example `xx`
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
