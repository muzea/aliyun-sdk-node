export interface CreateTicketRequest {
    /**
     * 开通嵌入的报表ID。
     * 目前仅支持仪表板，电子表格，自助取数和大屏。
     * @example `a206f5f3-****-e9b17c835b03`
     */
    "WorksId": string;
    /**
     * 组件ID。为以上仪表板中某个组件的ID，其他作品类型不支持。
     * 获取组件ID调用的接口请参见[QueryWorksBloodRelationship](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryWorksBloodRelationship?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&lang=JAVA&tab=DOC&sdkStyle=old)。
     * @example `0fc6a275c7f64f17b1****a306ce0f31`
     */
    "CmptId"?: string;
    /**
     * Ticket的票据数量，每次使用票据访问后，Ticket的票据数量减1。
     * - 默认值为1。
     * - 建议值为1。
     * - 最大值为99999。
     * @example `1`
     */
    "TicketNum"?: number;
    /**
     * Quick BI的UserId，非您的阿里云账号ID。
     * 您可以调用[QueryUserInfoByAccount](https://next.api.aliyun.com/api/quickbi-public/2022-01-01/QueryUserInfoByAccount?spm=a2c4g.11186623.0.0.15615d7aWVvWAl&params={}&tab=DOC&sdkStyle=old)接口，获取UserId。UserId样例为fe67f61a35a94b7da1a34ba174a7****。
     * > UserId和AccountName只填一个即可，不填时默认绑定报表的Owner，访问报表时将以该用户身份访问。若您需要配置数据行级权限，请参见[行级权限](https://help.aliyun.com/document_detail/323482.htm?spm=a2c4g.11186623.0.0.3da12f1fUfqvPi#section-6jx-sa4-0vz)。
     * @example `46e537466****92704c8`
     */
    "UserId"?: string;
    /**
     * 用户的账号名称。
     * - 如果用户是阿里云主账号**wangwu**，格式为**[主账号]**，例如**wangwu**。
     * - 如果用户是RAM账号**zhangsan**@aliyun.cn**，格式为**[主账号：子账号]**，例如**wangwu:zhangsan****。
     * > UserId和AccountName只填一个即可，不填时默认绑定报表的Owner，访问报表时将以该用户身份访问。若您需要配置数据行级权限，请参见[行级权限](https://help.aliyun.com/document_detail/323482.htm?spm=a2c4g.11186623.0.0.3da12f1fUfqvPi#section-6jx-sa4-0vz)。
     * @example `测试用户`
     */
    "AccountName"?: string;
    /**
     * 用户的账号类型。
     * - 1：阿里云账号
     * - 3：Quick BI自建账号
     * - 4：钉钉
     * - 5：RAM子账号
     * - 9：企业微信
     * - 10：飞书
     * > 若AccountName不为空时，则AccountType也不能为空。
     * @example `1`
     */
    "AccountType"?: number;
    /**
     * 过期时间
     * - 单位：分钟
     * - 默认：240
     * @example `200`
     */
    "ExpireTime"?: number;
    /**
     * 报表的水印参数。
     * - 不得超过50个字符。
     * - 当报表类型为大屏时，不支持水印传参。
     * @example `三方嵌入`
     */
    "WatermarkParam"?: string;
    /**
     * 报表过滤条件的全局参数。
     * - JsonArray格式的字符串。
     * > 若您需要使用全局参数能力，请联系[Quick BI运营负责人](https://h5-alimebot.dingtalk.com/intl/index.htm?spm=a2c4g.11186623.0.0.3da14f6chrDv9e&sourceType=ding_talk&from=DEFFB9G5KBByQkwq23wneFIOmaJ)。
     * @example `[{"paramKey":"price","joinType":"and","conditionList":[{"operate":">","value":"0"}]}]`
     */
    "GlobalParam"?: string;
}
