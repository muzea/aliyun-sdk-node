export interface SendNotificationsRequest {
    /**
     * 消息推送入参对象。
     */
    "NotificationUnicastRequest": {
        /**
         * 消息推送的目标信息。
         */
        SendTarget: {
            DeviceId: string;
        };
        /**
         * 消息模板，在天猫精灵应用平台中申请消息模板时得到的模板id。
         * @example `2iU81*****G9elJ`
         */
        MessageTemplateId: string;
        /**
         * 占位符信息，例如：模板【你好，{nick}！】，此处可以是：{"nick":"小甜甜"}。此外，在占位符参数里我们还可以对填写的应用调起链接增加参数，以支持跳转到指定地址的功能，如：`{"nick":"小甜甜","_URL_SUFFIX_":"xxx"}`。消息弹窗内的跳转地址就是：应用调起链接+`${_URL_SUFFIX_}`，此功能只对配置了调起链接的应用有效
         * @example `{"nick":"张三"}`
         */
        PlaceHolder: any;
        /**
         * 调试标识，当技能应用处于调试阶段时，设置此标识将决定获取技能应用信息时，是编辑态信息还是线上信息。
         * @example `false`
         */
        IsDebug: boolean;
    };
    /**
     * 身份信息。
     */
    "TenantInfo"?: {
        /**
         *
         * @example `20********01`
         */
        SubjectId: string;
    };
    /**
     * 用户标识信息
     */
    "UserInfo": {
        /**
         * 用户标识（userOpenId或userUnionId）
         * @example `HOFF****my7Iw=`
         */
        Id: string;
        /**
         * 用户Id的类型
         *  - OPEN_ID：默认的用户ID标识
         * - UNION_ID: 组织维度的用户ID标识，在猫精技能应用开放平台申请过组织后才会有
         * @example `OPEN_ID`
         */
        IdType: string;
        /**
         * 编码类型，获取猫精的用户标识的途径有多种，不同途径对应不同的编码类型
         *  - PACKAGE_NAME：apk包名，Android应用客户链路的编码类型
         *  - SKILL_ID：技能ID，云端链路的编码类型
         * @example `PACKAGE_NAME`
         */
        EncodeType: string;
        /**
         * 编码类型对应的值，编码类型是SKILL_ID时，其值为应用的Skill ID； 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `12**45`
         */
        EncodeKey: string;
        /**
         * 组织ID，如果IdType为UNION_ID时必填
         * @example `1**2`
         */
        OrganizationId: string;
    };
    /**
     * 设备标识信息
     */
    "DeviceInfo": {
        /**
         * 设备标识（deviceOpenId或deviceUnionId）
         * @example `DAFE****ce3ej=`
         */
        Id: string;
        /**
         * 设备Id的类型
         *  - OPEN_ID：默认的设备ID标识
         *  - UNION_ID: 组织维度的设备ID标识，在猫精技能应用开放平台申请过组织后才会有
         * @example `OPEN_ID`
         */
        IdType: string;
        /**
         * 编码类型，获取猫精的设备标识的途径有多种，不同途径对应不同的编码类型
         *  - PACKAGE_NAME：apk包名，Android应用客户链路的编码类型
         *  - SKILL_ID：技能ID，云端链路的编码类型
         * @example `PACKAGE_NAME`
         */
        EncodeType: string;
        /**
         * 编码类型对应的值，编码类型是SKILL_ID时，其值为应用的Skill ID； 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `12**45`
         */
        EncodeKey: string;
        /**
         * 组织ID，如果IdType为UNION_ID时必填
         * @example `1**2`
         */
        OrganizationId: string;
    };
}
