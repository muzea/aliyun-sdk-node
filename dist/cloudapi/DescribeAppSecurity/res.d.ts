export interface DescribeAppSecurityResponse {
    /**
     * App的密码
     * @example `c1ae97aaa7e45f21d10824bc44678fee`
     */
    AppSecret: string;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * App的key
     * @example `60030986`
     */
    AppKey: string;
    /**
     * 密钥修改时间（格林威治时间）
     * @example `2016-07-31T04:10:19Z`
     */
    ModifiedTime: string;
    /**
     * 应用的APPCode编码
     * @example `3aaf905a0a1f4f0eabc6d891dfa08afc`
     */
    AppCode: string;
    /**
     * 密钥创建时间（格林威治时间），与app创建时间相同
     * @example `2016-07-31T04:10:19Z`
     */
    CreatedTime: string;
}
