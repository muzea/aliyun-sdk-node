export interface GetUserResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的用户详细信息。
     */
    User: {
        /**
         * 用户的显示姓名。
         * @example `Bob`
         */
        DisplayName: string;
        /**
         * 用户备注信息。
         * @example `commet`
         */
        Comment: string;
        /**
         * 用户的邮箱地址。
         * @example `1099**@qq.com`
         */
        Email: string;
        /**
         * 用户的手机号码。
         * @example `1359999****`
         */
        Mobile: string;
        /**
         * 用户手机号码的国际域名。取值：
         * - **CN**：中国内地（+86）
         * - **HK**：中国香港（+852）
         * - **MO**：中国澳门（+853）
         * - **TW**：中国台湾（+886）
         * - **RU**：俄罗斯（+7）
         * - **SG**：新加坡（+65）
         * - **MY**：马来西亚（+60）
         * - **ID**：印度尼西亚（+62）
         * - **DE**：德国（+49）
         * - **AU**：澳大利亚（+61）
         * - **US**：美国（+1）
         * - **AE**：迪拜（+971）
         * - **JP**：日本（+81）
         * - **GB**：英国（+44）
         * - **IN**：印度（+91）
         * - **KR**：韩国（+82）
         * - **PH**：菲律宾（+63）
         * - **CH**：瑞士（+41）
         * - **SE**：瑞典（+46）
         * @example `CN`
         */
        MobileCountryCode: string;
        /**
         * 用户ID。
         * @example `1`
         */
        UserId: string;
        /**
         * 用户的来源。取值：
         * - **Local**：本地用户
         * - **Ram**：RAM用户
         * @example `Local`
         */
        Source: string;
        /**
         * 用户的登录名称。
         * @example `abcabc_def`
         */
        UserName: string;
        /**
         * 用户的唯一标识。
         * > 该参数是堡垒机用户对应的RAM用户的唯一标识。用户来源为RAM用户（即**Source**取值为**Ram**）时，返回该参数。用户来源为本地用户（即**Source**取值为**Local**）时，该参数返回值为空。
         * @example `122748924538****`
         */
        SourceUserId: string;
        /**
         * 用户状态组。
         */
        UserState: string[];
        /**
         * 用户有效期开始时间（秒，时间戳格式）
         * @example `1669630029`
         */
        EffectiveStartTime: number;
        /**
         * 用户有效期结束时间（秒，时间戳格式）
         * @example `1672502400`
         */
        EffectiveEndTime: number;
        /**
         * 下次登录是否需要重置密码。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        NeedResetPassword: boolean;
        /**
         * 打开的双因子认证方式的数组
         */
        TwoFactorMethods: string[];
        /**
         * 用户双因子状态，取值：
         * - **Global**：遵循全局设定
         * - **Disable**：关闭双因子
         * - **Enable**：开启双因子，遵循单个用户设定
         * @example `Enable`
         */
        TwoFactorStatus: string;
        /**
         * 消息通知语言设置。
         * - **Global**：遵循全局
         * - **Custom**：自定义
         * @example `Custom`
         */
        LanguageStatus: string;
        /**
         * 当LanguageStatus为Custom 时，Language为必填。 取值：
         * - **zh-cn**：简体中文
         * - **en**：英文
         * @example `en`
         */
        Language: string;
    };
}
