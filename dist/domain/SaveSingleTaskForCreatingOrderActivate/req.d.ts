export interface SaveSingleTaskForCreatingOrderActivateRequest {
    /**
     * 域名联系人（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `测试`
     */
    "ZhRegistrantName"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 想要注册的域名。
     * >注册域名时必须指定域名持有者信息，不指定域名持有者信息会导致域名注册失败。您可以通过RegistrantProfileId参数指定信息模板定义域名持有者信息。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 购买周期，单位为**年**。默认为**1年**，最长可购买**10年**。
     * @example `1`
     */
    "SubscriptionDuration"?: number;
    /**
     * 域名信息模板编号（信息模板包含域名持有者名称、域名联系人、电话、邮箱等信息），仅能使用已实名认证的域名信息模板编号进行域名注册。如果您已经创建了域名注册信息模板，可通过调用[QueryRegistrantProfiles](~~QueryRegistrantProfiles~~)接口查询域名信息模板编号。
     * > 传入本参数后，无需再传入**RegistrantType**、**ZhRegistrantOrganization**、**ZhRegistrantName**、**ZhProvince**、**ZhCity**、**ZhAddress**、**RegistrantOrganization**、**RegistrantName**、**Province**、**City**、**Address**、**PostalCode**、**Country**、**TelArea**、**Telephone**、**TelExt**和**Email**参数。
     * @example `123`
     */
    "RegistrantProfileId"?: number;
    /**
     * 是否开启域名隐私保护服务。取值：
     * - **true**：开启。
     * - **false**：不开启。
     * 默认值为**true**。
     *
     * @example `false`
     */
    "EnableDomainProxy"?: boolean;
    /**
     * 是否允许注册白金词，取值：
     * - **false**：不允许。
     * - **true**：允许。
     * 默认值为**false**。
     * @example `false`
     */
    "PermitPremiumActivation"?: boolean;
    /**
     * 是否使用阿里云DNS，取值为**true**|**false**，默认为**true**。
     * > - 取值为**true**时，您无需再传入**Dns1**和**Dns2**参数，否则传入的**Dns1**和**Dns2**参数不会生效。
     * - 取值为**false**时，您还需要传入**Dns1**和**Dns2**参数。
     *
     * @example `true`
     */
    "AliyunDns"?: boolean;
    /**
     * 自定义DNS1。
     * > - 当**AliyunDns**取值为**false**时，本参数才可用且必须传入。
     * - 请务必确保自定义DNS的正确性，否则可能导致注册失败。
     * @example `ns1.aliyun.com`
     */
    "Dns1"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 城市（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `北京市`
     */
    "ZhCity"?: string;
    /**
     * 域名持有者名称（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `测试`
     */
    "ZhRegistrantOrganization"?: string;
    /**
     * 国家代码，例如**CN**。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `CN`
     */
    "Country"?: string;
    /**
     * 自定义DNS2。
     * > - 当**AliyunDns**取值为**false**时，本参数才可用且必须传入。
     * - 请务必确保自定义DNS的正确性，否则可能导致注册失败。
     * @example `ns2.aliyun.com`
     */
    "Dns2"?: string;
    /**
     * 省份（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `北京`
     */
    "ZhProvince"?: string;
    /**
     * 详细地址（中文）。
     * > 该参数仅适用于中国站。当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `朝阳区`
     */
    "ZhAddress"?: string;
    /**
     * 城市（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `bei jing shi`
     */
    "City"?: string;
    /**
     * 域名持有者名称（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `ce shi`
     */
    "RegistrantOrganization"?: string;
    /**
     * 域名联系人（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `ce shi`
     */
    "RegistrantName"?: string;
    /**
     * 省份（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `bei jing`
     */
    "Province"?: string;
    /**
     * 详细地址（英文）。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `chao yang qu`
     */
    "Address"?: string;
    /**
     * 电子邮箱。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 邮政编码。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `1234567`
     */
    "PostalCode"?: string;
    /**
     * 电话国家代码，例如中国为**86**。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `86`
     */
    "TelArea"?: string;
    /**
     * 电话号码。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `12345678`
     */
    "Telephone"?: string;
    /**
     * 分机号码。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `1234`
     */
    "TelExt"?: string;
    /**
     * 域名持有者类型。取值：
     * - **1**：个人。
     * - **2**：企业、组织等。
     * > 当未传入**RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
     * @example `1`
     */
    "RegistrantType"?: string;
    /**
     * 是否允许注册商标词，取值：
     * - **false**：不允许。
     * - **true**：允许。
     * @example `false`
     */
    "TrademarkDomainActivation"?: boolean;
    /**
     * 代金券编号，默认为字符串。
     * @example `123456`
     */
    "CouponNo"?: string;
    /**
     * 是否使用代金券。取值：
     * - **true**：使用
     * - **false**：不使用
     * 默认值为**false**。
     * @example `false`
     */
    "UseCoupon"?: boolean;
    /**
     * 优惠券编号。
     * @example `123123`
     */
    "PromotionNo"?: string;
    /**
     * 是否使用优惠券，取值：
     * - **false**：不允许。
     * - **true**：允许。
     * 默认值为**false**。
     * @example `false`
     */
    "UsePromotion"?: boolean;
    /**
     * 无。
     * @example `rg-XX`
     */
    "ResourceGroupId"?: string;
}
