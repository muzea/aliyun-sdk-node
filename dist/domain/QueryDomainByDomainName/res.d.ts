export interface QueryDomainByDomainNameResponse {
    /**
     * 域名所有者邮箱。
     * @example `username@example.com`
     */
    Email: string;
    /**
     * 注册时间。
     * @example `2017-12-07 17:02:13`
     */
    RegistrationDate: string;
    /**
     * 注册时间的时间戳。
     * @example `1584675448000`
     */
    RegistrationDateLong: number;
    /**
     * 域名实名认证状态。取值：
     * - **NONAUDIT**：未实名认证。
     * - **SUCCEED**：成功。
     * - **FAILED**：审核失败。
     * - **AUDITING**：审核中。
     * @example `NONAUDIT`
     */
    RealNameStatus: string;
    /**
     * 是否是溢价词。
     * @example `false`
     */
    Premium: boolean;
    /**
     * 命名审核状态。取值：
     * - **NONAUDIT**：未认证。
     * - **SUCCEED**： 成功。
     * - **FAILED**：审核失败。
     * - **AUDITING**：审核中。
     * @example `SUCCEED`
     */
    DomainNameVerificationStatus: string;
    /**
     * 到期时间的时间戳。
     * @example `1625111915000`
     */
    ExpirationDateLong: number;
    DnsList: {
        /**
         * dns列表。
         */
        Dns: string[];
    };
    /**
     * 域名转出状态。取值：
     * - **NORMAL**：正常。
     * - **PENDING**：正在转出万网。
     * @example `NORMAL`
     */
    TransferOutStatus: string;
    /**
     * 中文域名持有者。
     * @example `王先生`
     */
    ZhRegistrantOrganization: string;
    /**
     * 是否被clienthold。
     * @example `false`
     */
    EmailVerificationClientHold: boolean;
    /**
     * 邮箱是否已通过验证。取值：
     * - **0**：没有通过验证。
     * - **1**：已通过验证。
     * @example `1`
     */
    EmailVerificationStatus: number;
    /**
     * 域名所有者。
     * @example `Test litm`
     */
    RegistrantOrganization: string;
    /**
     * 域名转移锁状态。取值：
     * - **NONE_SETTING**：未设置。
     * - **OPEN**：已开启。
     * - **CLOSE**：已关闭。
     * @example `CLOSE`
     */
    TransferProhibitionLock: string;
    /**
     * 是否已开启隐私保护状态。
     * @example `false`
     */
    DomainNameProxyService: boolean;
    /**
     * 域名注册联系人类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     * @example `1`
     */
    RegistrantType: string;
    /**
     * 域名持有者修改状态。取值：
     * - **PENDING**：域名持有者信息修改中。
     * - **NORMAL**：正常。
     * @example `NORMAL`
     */
    RegistrantUpdatingStatus: string;
    /**
     * 唯一请求识别码。
     * @example `44101664-3E70-4F0E-89E5-CCB74BF*****`
     */
    RequestId: string;
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 域名实例编号。
     * @example `S20179H1BBI9****`
     */
    InstanceId: string;
    /**
     * 中文联系人。
     * @example `王先生`
     */
    ZhRegistrantName: string;
    /**
     * 到期时间。
     * @example `2019-12-07 17:02:13`
     */
    ExpirationDate: string;
    /**
     * 联系人。
     * @example `Test litm`
     */
    RegistrantName: string;
    /**
     * 阿里云用户编号。
     * @example `121000000****`
     */
    UserId: string;
    /**
     * 域名安全锁状态。取值：
     * - **NONE_SETTING**：未设置。
     * - **OPEN**：已开启。
     * - **CLOSE**：已关闭。
     * @example `CLOSE`
     */
    UpdateProhibitionLock: string;
    /**
     * 域名分组ID，可使用查询域名分组的[QueryDomainGroupList](~~69362~~)接口获取
     * @example `123456`
     */
    DomainGroupId: number;
    /**
     * 域名备注。
     * @example `测试备注`
     */
    Remark: string;
    /**
     * 域名分组名称。
     * @example `测试分组`
     */
    DomainGroupName: string;
    /**
     * 域名过期状态。取值：
     * - **1**：域名未过期。
     * - **2**：域名已过期。
     *
     * @example `1`
     */
    ExpirationDateStatus: string;
    /**
     * 域名到期日和当前的时间的天数差值。
     * @example `356`
     */
    ExpirationCurrDateDiff: number;
    /**
     * 域名类型。取值：
     * - New gTLD。
     * - gTLD。
     * - ccTLD。
     * @example `gTLD`
     */
    DomainType: string;
    /**
     * 域名状态。取值：
     * - 1：急需续费。
     * - 2：急需赎回。
     * - 3：正常。
     * @example `3`
     */
    DomainStatus: string;
    /**
     * 资源组id。
     * @example `rg-acfmw6bpc6n7zai`
     */
    ResourceGroupId: string;
    Tag: {
        /**
         * 标签列表。
         */
        Tag: {
            /**
             * 标签键。
             * @example `费用`
             */
            Key: string;
            /**
             * 标签值
             * @example `标签1`
             */
            Vaue: string;
        }[];
    };
}
