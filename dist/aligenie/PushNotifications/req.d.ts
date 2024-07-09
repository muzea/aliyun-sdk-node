export interface PushNotificationsRequest {
    /**
     * 消息推送入参对象。
     */
    "NotificationUnicastRequest": {
        /**
         * 消息推送的目标信息。
         */
        SendTarget: {
            /**
             * 推送的目标类型，获取到对应设备或用户标识时的类型：
             * -  ` DEVICE_UNION_ID ` ：设备unionId
             * -  ` DEVICE_OPEN_ID ` ：设备openId
             * -  ` USER_UNION_ID ` ：用户unionId
             * -  ` USER_OPEN_ID ` ：用户openId
             * @example `DEVICE_OPEN_ID`
             */
            TargetType: string;
            /**
             * 推送目标类型对应的标识值。
             * @example `2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=`
             */
            TargetIdentity: string;
        };
        /**
         * 消息模板，在天猫精灵应用平台中申请消息模板时得到的模板ID。
         * @example `2iU81*****G9elJ`
         */
        MessageTemplateId: string;
        /**
         * 占位符信息，例如：模板【你好，{nick}！】，此处可以是：{"nick":"小甜甜"}。此外，在占位符参数里我们还可以对填写的应用调起链接增加参数，以支持跳转到指定地址的功能，如：`{"nick":"小甜甜","_URL_SUFFIX_":"xxx"}`。消息弹窗内的跳转地址就是：应用调起链接+`${_URL_SUFFIX_}`，此功能只对配置了调起链接的应用有效
         * @example `{"nick":"张三"}`
         */
        PlaceHolder: any;
        /**
         * 编码类型，获取猫精的设备标识的途径有多种，不同途径对应不同的编码类型：
         * - PACKAGE_NAME：apk包名
         * - SKILL_ID：技能ID
         * @example `PACKAGE_NAME`
         */
        EncodeType: string;
        /**
         * 编码类型对应的值。
         * - 编码类型是SKILL_ID时，其值为webhook服务中得到的skill ID。
         * - 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `apk包名`
         */
        EncodeKey: string;
        /**
         * 组织标识，推送类型是`XX_UNION_XX`时才需要配。当存在多种途径获取猫精设备或用户标识且又需要能互通的情况下需要找平台申请组织，申请通过后由平台分配得到。
         * @example `2`
         */
        OrganizationId: string;
        /**
         * 调试标识，当技能应用处于调试阶段时，设置此标识将决定获取技能应用信息时，是编辑态信息还是线上信息。
         * @example `true`
         */
        IsDebug: boolean;
    };
    /**
     * 身份信息。
     */
    "TenantInfo"?: {
        /**
         *
         * @example `20*****01`
         */
        SubjectId: string;
    };
}
