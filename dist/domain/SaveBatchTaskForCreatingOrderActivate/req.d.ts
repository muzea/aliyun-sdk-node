export interface SaveBatchTaskForCreatingOrderActivateRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 代金券编号。
     * @example `123456`
     */
    "CouponNo"?: string;
    /**
     * 是否使用代金券。
     * @example `false`
     */
    "UseCoupon"?: boolean;
    /**
     * 优惠券编号。
     * @example `123124`
     */
    "PromotionNo"?: string;
    /**
     * 是否使用优惠券。
     * @example `false`
     */
    "UsePromotion"?: boolean;
    /**
     * 任务详情列表。
     */
    "OrderActivateParam": {
        /**
         * 分机号码。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `1234`
         */
        TelExt: string;
        /**
         * 是否使用阿里云DNS，取值为**true**|**false**，默认为**true**。
         * > - 取值为**true**时，您无需再传入**OrderActivateParam.N.Dns1**和**OrderActivateParam.N.Dns2**参数，否则传入的**OrderActivateParam.N.Dns1**和**OrderActivateParam.N.Dns2**参数不会生效。
         * - 取值为**false**时，您还需要传入**OrderActivateParam.N.Dns1**和**OrderActivateParam.N.Dns2**参数。
         * @example `true`
         */
        AliyunDns: boolean;
        /**
         * 是否允许注册白金词，默认为**false**。
         * @example `true`
         */
        PermitPremiumActivation: boolean;
        /**
         * 省份（中文）。
         * > 该参数仅适用于中国站。当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `北京`
         */
        ZhProvince: string;
        /**
         * 电话号码。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `1820000****`
         */
        Telephone: string;
        /**
         * 域名持有者名称（英文）。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `zhang san`
         */
        RegistrantOrganization: string;
        /**
         * 城市（英文）。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `bei jing shi`
         */
        City: string;
        /**
         * 想要注册的域名。
         * > 注册域名时必须指定域名持有者信息，不指定域名持有者信息会导致域名注册失败。您可以通过OrderActivateParam.N.RegistrantProfileId参数指定信息模板定义域名持有者信息。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 城市（中文）。
         * > 该参数仅适用于中国站。当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `北京市`
         */
        ZhCity: string;
        /**
         * 自定义DNS1。
         * > - 当**OrderActivateParam.N.AliyunDns**取值为**false**时，本参数才可用且必须传入。
         * - 请务必确保自定义DNS的正确性，否则可能导致注册失败。
         * @example `ns2.aliyun.com`
         */
        Dns1: string;
        /**
         * 电话国家代码，例如，中国的电话国家代码为**86**。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `86`
         */
        TelArea: string;
        /**
         * 通讯地址（英文）。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `chao yan qu *** dasha *** hao`
         */
        Address: string;
        /**
         * 是否开启域名隐私保护服务，默认为**true**。
         * @example `true`
         */
        EnableDomainProxy: boolean;
        /**
         * 邮政编码。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `102629`
         */
        PostalCode: string;
        /**
         * 域名信息模板编号（信息模板包含域名持有者名称、域名联系人、电话、邮箱等信息），仅能使用已实名认证的域名信息模板编号进行域名注册。如果您已经创建了域名注册信息模板，可通过调用[QueryRegistrantProfiles](~~67701~~) 接口查询域名信息模板编号。
         * > 传入本参数后，无需再传入**OrderActivateParam.N.RegistrantType**、**OrderActivateParam.N.ZhRegistrantOrganization**、**OrderActivateParam.N.ZhRegistrantName**、**OrderActivateParam.N.ZhProvince**、**OrderActivateParam.N.ZhCity**、**OrderActivateParam.N.ZhAddress**、**OrderActivateParam.N.RegistrantOrganization**、**OrderActivateParam.N.RegistrantName**、**OrderActivateParam.N.Province**、**OrderActivateParam.N.City**、**OrderActivateParam.N.Address**、**OrderActivateParam.N.PostalCode**、**OrderActivateParam.N.Country**、**OrderActivateParam.N.TelArea**、**OrderActivateParam.N.Telephone**、**OrderActivateParam.N.TelExt**和**OrderActivateParam.N.Email**参数。
         * @example `000000`
         */
        RegistrantProfileId: number;
        /**
         * 域名持有者名称（中文）。
         * > 该参数仅适用于中国站。当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `张三`
         */
        ZhRegistrantOrganization: string;
        /**
         * 是否允许注册商标词。
         * @example `false`
         */
        TrademarkDomainActivation: boolean;
        /**
         * 自定义DNS2。
         * > - 当**OrderActivateParam.N.AliyunDns**取值为**false**时，本参数才可用且必须传入。
         * - 请务必确保自定义DNS的正确性，否则可能导致注册失败。
         * @example `ns1.aliyun.com`
         */
        Dns2: string;
        /**
         * 域名联系人（中文）。
         * > 该参数仅适用于中国站。当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `张三`
         */
        ZhRegistrantName: string;
        /**
         * 电子邮箱。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `username@example.com`
         */
        Email: string;
        /**
         * 域名持有者类型。取值：
         * - **1**：个人。
         * - **2**：企业、组织等。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `1`
         */
        RegistrantType: string;
        /**
         * 国家代码。例如，**CN**代表中国，**US**代表美国。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `CN`
         */
        Country: string;
        /**
         * 域名联系人（英文）。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `zhang san`
         */
        RegistrantName: string;
        /**
         * 购买周期，单位为**年**。默认为**一年**。
         * @example `1`
         */
        SubscriptionDuration: number;
        /**
         * 通讯地址（中文）。
         * > 该参数仅适用于中国站。当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `朝阳区***大厦***号`
         */
        ZhAddress: string;
        /**
         * 省份（英文）。
         * > 当未传入**OrderActivateParam.N.RegistrantProfileId**参数时，本参数才可用且必须传入，如果不传入会导致域名注册失败。
         * @example `bei jing`
         */
        Province: string;
        /**
         * 资源组ID。
         * > 若没有传入资源组ID或传入的资源组ID不存在，则绑定默认资源组ID。
         * @example `rg-XX`
         */
        ResourceGroupId: string;
    }[];
}
