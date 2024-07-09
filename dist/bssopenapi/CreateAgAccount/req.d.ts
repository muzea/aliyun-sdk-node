export interface CreateAgAccountRequest {
    /**
     * 登录邮箱
     * @example `email`
     */
    "LoginEmail": string;
    /**
     * 新增账号属性，需要在控制台的顶部菜单栏，单击账号属性，跳转至**安全设置**页面查看。
     * @example `1`
     */
    "AccountAttr"?: string;
    /**
     * 企业名称（统一社会信用代码对应的企业名）。
     * @example `阿里云测试有限公司`
     */
    "EnterpriseName"?: string;
    /**
     * 一级分类名称。
     * @example `志成`
     */
    "FirstName"?: string;
    /**
     * 用户的姓。
     * 长度：最大64个字符。
     * @example `吴`
     */
    "LastName"?: string;
    /**
     * 国家码
     * @example `CN`
     */
    "NationCode"?: string;
    /**
     * 省份名称（非必填）。
     * @example `北京`
     */
    "ProvinceName"?: string;
    /**
     * 城市名称（英文）。
     * @example `北京`
     */
    "CityName"?: string;
    /**
     * 邮编
     * @example `350000`
     */
    "Postcode"?: string;
}
