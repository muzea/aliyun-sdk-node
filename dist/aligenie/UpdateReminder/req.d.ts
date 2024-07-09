export interface UpdateReminderRequest {
    /**
     * 该服务的请求入参。
     */
    "Payload": {
        /**
         * 更新的提醒ID。
         * @example `20***34`
         */
        Id: number;
        /**
         * 提醒信息的详细内容。
         * @example `更新提醒内容`
         */
        Content: string;
        /**
         *
         * @example `20****01`
         */
        SubjectId: string;
        /**
         *
         * @example `12****56`
         */
        UserId: number;
        /**
         *
         * @example `BED****AAC`
         */
        DeviceId: string;
        /**
         * 该调用是否为调试。
         * @example `true`
         */
        IsDebug: boolean;
        /**
         * 提醒的调度信息。
         */
        RecurrenceRule: {
            /**
             * 触发提醒的时间年份。
             * @example `2021`
             */
            Year: number;
            /**
             * 触发提醒的时间月份。
             * @example `10`
             */
            Month: number;
            /**
             * 触发提醒的时间日期。
             * @example `25`
             */
            Day: number;
            /**
             * 触发提醒的时间时钟数。
             * @example `12`
             */
            Hour: number;
            /**
             * 触发提醒的时间分钟数。
             * @example `3`
             */
            Minute: number;
            /**
             * 触发提醒的时间秒钟数。
             * @example `3`
             */
            Second: number;
            /**
             * 循环类型：
             * - ONCE：单次
             * - DAILY：每天
             * - WEEKLY：每周
             * - MONTHLY：每月
             * @example `ONCE`
             */
            Freq: string;
            /**
             * 提醒开始的生效时间，时间戳毫秒。
             * @example `1635134400000`
             */
            StartDateTime: number;
            /**
             * 提醒结束的失效时间，时间戳毫秒。
             * @example `1635134700000`
             */
            EndDateTime: number;
            /**
             * 设置按月提醒，即每月几号触发提醒。
             */
            DaysOfMonth: number[];
            /**
             * 设置按周提醒，即每周几触发提醒。
             */
            DaysOfWeek: number[];
        };
    };
    /**
     * 用户标识信息。
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
         * - UNION_ID: 组织维度的用户ID标识，在天猫精灵技能应用平台申请过组织后才会有该值。
         * @example `OPEN_ID`
         */
        IdType: string;
        /**
         * 编码类型，获取猫精的用户标识的途径有多种，不同途径对应不同的编码类型。
         * - PACKAGE_NAME：apk包名，Android应用客户链路的编码类型。
         * - SKILL_ID：技能ID，云端链路的编码类型。
         * @example `PACKAGE_NAME`
         */
        EncodeType: string;
        /**
         * 编码类型对应的值。
         * - 编码类型设置为SKILL_ID时，其值为应用的Skill ID。
         * - 编码类型设置为PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `12**45`
         */
        EncodeKey: string;
        /**
         * 组织ID，**IdType**设置为**UNION_ID**时，该参数必填。
         * @example `1**2`
         */
        OrganizationId: string;
    };
    /**
     * 设备标识信息。
     */
    "DeviceInfo": {
        /**
         * 设备标识，设置为deviceOpenId或deviceUnionId。
         * @example `DAFE****ce3ej=`
         */
        Id: string;
        /**
         * 设备Id的类型。
         * - OPEN_ID：默认的设备ID标识。
         * - UNION_ID: 组织维度的设备ID标识，在猫精技能应用平台申请过组织后才会有该值。
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
         * 编码类型对应的值。
         * - 编码类型设置为SKILL_ID时，其值为应用的Skill ID。
         * - 编码类型设置为PACKAGE_NAME时，其值为对应客户端App的packageName。
         * @example `12**45`
         */
        EncodeKey: string;
        /**
         * 组织ID，**IdType**设置为**UNION_ID**时，该参数必填。
         * @example `1**2`
         */
        OrganizationId: string;
    };
}
