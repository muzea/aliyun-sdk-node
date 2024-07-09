export interface QueryRegistrantProfilesResponse {
    /**
     * 是否有下一页。取值：
     * - **true**：有。
     * - **false**：没有。
     * @example `true`
     */
    NextPage: boolean;
    /**
     * 请求ID。
     * @example `94053D79-7455-4F71-BF06-20EB2DEDE6BD`
     */
    RequestId: string;
    /**
     * 总记录数。
     * > 总记录数是指查询出来的信息模板的数量。当有多个信息模板时，一个信息模板显示完了会接着显示第二个信息模板。
     * @example `9`
     */
    TotalItemNum: number;
    /**
     * 是否有上一页。取值：
     * - **true**：有。
     * - **false**：没有。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 总页码。
     * @example `1`
     */
    TotalPageNum: number;
    /**
     * 每页记录数。默认值为**0**，最大值为**5000**。
     * @example `2`
     */
    PageSize: number;
    RegistrantProfiles: {
        /**
         * 域名信息模板列表。
         */
        RegistrantProfile: {
            /**
             * 分机号码。
             * @example `1234`
             */
            TelExt: string;
            /**
             * 信息模板更新时间。
             * @example `2019-03-15 15:32:45`
             */
            UpdateTime: string;
            /**
             * 省份（中文）。
             * @example `浙江`
             */
            ZhProvince: string;
            /**
             * 信息模板创建时间。
             * @example `2019-02-18 10:46:47`
             */
            CreateTime: string;
            /**
             * 电话号码。
             * @example `1829756****`
             */
            Telephone: string;
            /**
             * 域名持有者名称（英文）。
             * @example `li si`
             */
            RegistrantOrganization: string;
            /**
             * 城市（英文）。
             * @example `hang zhou shi`
             */
            City: string;
            /**
             * 城市（中文）。
             * @example `杭州市`
             */
            ZhCity: string;
            /**
             * 电话国家代码，例如中国的电话国家代码为**86**。
             * @example `86`
             */
            TelArea: string;
            /**
             * 详细地址（英文）。
             * @example `zhe jiang sheng hang zhou shi shi li qu shi li zhen shi li da sha 1001 hao`
             */
            Address: string;
            /**
             * 实名认证状态。取值：
             * - **FAILED**：实名认证失败。
             * - **SUCCEED**：实名认证成功。
             * - **NONAUDIT**：未实名认证。
             * - **AUDITING**：审核中。
             * @example `SUCCEED`
             */
            RealNameStatus: string;
            /**
             * 邮政编码。
             * @example `310024`
             */
            PostalCode: string;
            /**
             * 信息模板类型。取值：
             * - **common**：通用模板。
             * - **cnnic**：cnnic模板。
             * > cnnic模板仅国际站支持，在阿里云国际站注册的“.cn”、“.中国”等CNNIC注册局下的域名需使用cnnic模板，其他域名使用通用模板。
             * @example `common`
             */
            RegistrantProfileType: string;
            /**
             * 查询到的信息模板的编号。
             * @example `1000001`
             */
            RegistrantProfileId: number;
            /**
             * 域名持有者名称（中文）。
             * @example `李四`
             */
            ZhRegistrantOrganization: string;
            /**
             * 是否为默认模板。取值：
             * - **true**：默认模板。
             * - **false**：非默认模板。
             * 默认值为**false**。
             * @example `false`
             */
            DefaultRegistrantProfile: boolean;
            /**
             * 电子邮箱。
             * @example `82106****@qq.com`
             */
            Email: string;
            /**
             * 联系人名称（中文）。
             * @example `李四`
             */
            ZhRegistrantName: string;
            /**
             * 域名持有者类型。取值：
             * - **1**：个人。
             * - **2**：企业。
             * 默认值为**1**。
             * @example `1`
             */
            RegistrantType: string;
            /**
             * 国家代码，例如**CN**代表中国，**US**代表美国。
             * @example `CN`
             */
            Country: string;
            /**
             * 联系人名称（英文）。
             * @example `li si`
             */
            RegistrantName: string;
            /**
             * 邮箱验证状态。取值：
             * - **0**：未验证。
             * - **1**：已验证。
             * @example `1`
             */
            EmailVerificationStatus: number;
            /**
             * 详细地址（中文）。
             * @example `浙江省杭州市示例区示例镇示例大厦1001号`
             */
            ZhAddress: string;
            /**
             * 省份（英文）。
             * @example `zhe jiang`
             */
            Province: string;
            /**
             * 证件号
             * @example `4****************1`
             */
            CredentialNo: string;
            /**
             * 证件类型
             * @example `YYZZ`
             */
            CredentialType: string;
        }[];
    };
}
