export interface AppUseTimeReportRequest {
    /**
     * 业务参数
     */
    "Payload"?: {
        UserId: string;
        DeviceId: string;
        SubjectId: string;
        /**
         * 动作项
         * - start表示开始
         * - end表示结束
         * @example `start`
         */
        Action: string;
        /**
         * 步进码，开始与结束的动作要唯一匹配。
         * @example `2`
         */
        StepCode: string;
        /**
         * 资源ID。
         * @example `1`
         */
        ResourceId: string;
        /**
         * 资源类型：
         * - 0表示游戏
         * - 1表示音频
         * - 2表示视频
         * @example `1`
         */
        ResourceType: number;
        /**
         * 是否会员专享权益：
         * - 1表示是
         * - 0表示否
         * @example `1`
         */
        IsPrivilege: number;
        /**
         * 会员类型：
         * - 0表示猫精会员
         * - 1表示三方自有会员
         * @example `1`
         */
        VipType: number;
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
