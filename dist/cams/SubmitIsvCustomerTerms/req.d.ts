export interface SubmitIsvCustomerTermsRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `29348393884****`
     */
    "CustSpaceId": string;
    /**
     * 企业名称。
     * @example `Aliyun`
     */
    "CustName": string;
    /**
     * 企业地址。
     * @example `杭州`
     */
    "OfficeAddress": string;
    /**
     * 企业邮箱。
     * @example `partner@aliyun.com`
     */
    "ContactMail": string;
    /**
     * 国家编码ID。
     * > 详细国家编码，请参见[国家编码](~~608210~~)。
     * @example `CN`
     */
    "CountryId": string;
    /**
     * 企业使用场景。
     * @example `营销商品`
     */
    "BusinessDesc": string;
    /**
     * Isv/Client协议文件名。
     * @example `isvTerms.pdf`
     */
    "IsvTerms": string;
}
