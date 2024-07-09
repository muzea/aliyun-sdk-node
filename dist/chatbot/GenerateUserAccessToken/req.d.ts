export interface GenerateUserAccessTokenRequest {
    /**
     * 用户昵称
     * @example `张三`
     */
    "Nick": string;
    /**
     * 用户在企业内部的用户id
     * @example `8882022040000000171`
     */
    "ForeignId": string;
    /**
     * 用户手机号码
     * @example `1381111****`
     */
    "Telephone"?: string;
    /**
     * 用户邮箱
     * @example `a***bcx@gmail.com`
     */
    "Email"?: string;
    /**
     * 用户需要带入到机器人的额外参数。使用JSON String格式。如果要使用访客名片，请按照以下格式带入：{
     *     "customerNameCard": [
     *         {
     *             "key": "姓名",
     *             "value": "张三"
     *         },
     *         {
     *             "key": "等级",
     *             "value": "v2"
     *         },
     *         {
     *             "key": "联系方式",
     *             "value": "123"
     *         }
     *     ]
     * }
     * > **访客名片信息会展示在人工工作台上**
     * @example `{
        "xx": 123,
        "yy": 22332,
        "customerNameCard": [
            {
                "key": "姓名",
                "value": "张三"
            },
            {
                "key": "等级",
                "value": "v2"
            },
            {
                "key": "联系方式",
                "value": "123"
            }
        ]
    }`
     */
    "ExtraInfo"?: string;
    /**
     * Token有效时间，单位秒。最大不得超过3600s
     * @example `1000`
     */
    "ExpireTime": number;
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
