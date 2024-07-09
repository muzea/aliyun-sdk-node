export interface VideoAppReportRequest {
    /**
     * 业务参数
     */
    "Payload"?: {
        DeviceId: string;
        /**
         * 会员是否登录。
         * @example `true`
         */
        isLogin: boolean;
        /**
         * 该账号是否为会员。
         * @example `true`
         */
        isVip: boolean;
        /**
         * 会员的开始时间。
         * @example `1652337963097`
         */
        startTime: number;
        /**
         * 会员的结束时间。
         * @example `1652337963097`
         */
        endTime: number;
        /**
         * 账号的昵称。
         * @example `test`
         */
        loginNick: string;
        /**
         * 账户的手机号码。
         * @example `188*777`
         */
        phone: string;
        /**
         * 应用包名。
         * @example `com.***.test`
         */
        pkgName: string;
        /**
         * 明文uuid
         * @example `731D5F********DC3B`
         */
        originUuid: string;
    };
    /**
     * 用户标识信息
     */
    "UserInfo": {
        /**
         * 用户标识，设置为userOpenId或userUnionId。
         * @example `HOFF****my7Iw=`
         */
        Id: string;
        /**
         * 用户Id的类型
         * - OPEN_ID：默认的用户ID标识。
         * - UNION_ID: 组织维度的用户ID标识，在天猫精灵技能应用开放平台申请过组织后才会有该值。
         * @example `OPEN_ID`
         */
        IdType: string;
        /**
         * 编码类型，获取天猫精灵的用户标识的途径有多种，不同途径对应不同的编码类型。
         * - PACKAGE_NAME：apk包名，Android应用客户链路的编码类型。
         * - SKILL_ID：技能ID，云端链路的编码类型。
         * @example `PACKAGE_NAME`
         */
        EncodeType: string;
        /**
         * 编码类型对应的值
         * - 编码类型是SKILL_ID时，其值为应用的Skill ID。
         * - 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `12**45`
         */
        EncodeKey: string;
        /**
         * 组织ID，如果IdType为UNION_ID时必填。
         * @example `1**2`
         */
        OrganizationId: string;
    };
    /**
     * 设备标识信息
     */
    "DeviceInfo"?: {
        /**
         * 设备标识，设置为deviceOpenId或deviceUnionId。
         * @example `DAFE****ce3ej=`
         */
        Id: string;
        /**
         * 设备Id的类型
         * - OPEN_ID：默认的设备ID标识。
         * - UNION_ID: 组织维度的设备ID标识，在天猫精灵技能应用开放平台申请过组织后才会有该值。
         * @example `OPEN_ID`
         */
        IdType: string;
        /**
         * 编码类型，获取天猫精灵的设备标识的途径有多种，不同途径对应不同的编码类型。
         * - PACKAGE_NAME：apk包名，Android应用客户链路的编码类型。
         * - SKILL_ID：技能ID，云端链路的编码类型。
         * @example `PACKAGE_NAME`
         */
        EncodeType: string;
        /**
         * 编码类型对应的值
         * - 编码类型是SKILL_ID时，其值为应用的Skill ID。
         * - 编码类型是PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `12**45`
         */
        EncodeKey: string;
        /**
         * 组织ID，如果IdType为UNION_ID时必填。
         * @example `1**2`
         */
        OrganizationId: string;
    };
}
