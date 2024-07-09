export interface ModifyPhoneBusinessProfileRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `293483938849****`
     */
    "CustSpaceId": string;
    /**
     * 手机号码。
     * @example `861380000****`
     */
    "PhoneNumber": string;
    /**
     * 地址。
     * @example `四川`
     */
    "Address"?: string;
    /**
     * 描述。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 行业。
     * @example `OTHER`
     */
    "Vertical"?: string;
    /**
     * 邮箱。
     * @example `aa@aliyun.com`
     */
    "Email"?: string;
    /**
     * 头像URL。
     * @example `http://a.img`
     */
    "ProfilePictureUrl"?: string;
    /**
     * 网站。
     */
    "Websites"?: string[];
    /**
     * 关于。
     * @example `business profile`
     */
    "About"?: string;
}
