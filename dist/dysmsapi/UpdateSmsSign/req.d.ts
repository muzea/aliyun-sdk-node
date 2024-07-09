export interface UpdateSmsSignRequest {
    /**
     * 未审核通的签名。
     * @example `阿里云验证码`
     */
    "SignName": string;
    /**
     * 短信签名场景说明，长度不超过200个字符。
     * > 场景说明是签名审核的参考信息之一。请详细描述已上线业务的使用场景，并提供可以验证这些业务的网站链接、已备案域名地址、应用市场下载链接、公众号或小程序全称等信息。对于登录场景，还需提供测试账号密码。信息完善的申请说明会提高签名、模板的审核效率。短信场景填写可参考[签名来源](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4)表格中**应用场景**的填写。
     * @example `登录场景申请验证码`
     */
    "Remark"?: string;
    /**
     * 签名类型。建议使用默认值。
     * - **0**：验证码
     * - **1**：通用（默认值）
     * @example `1`
     */
    "SignType"?: number;
    /**
     * 更多资料，补充上传业务证明文件或业务截图，有助于审核人员了解您的业务详情。
     */
    "MoreData"?: string[];
    /**
     * 资质ID。可在[资质管理](https://dysms.console.aliyun.com/domestic/text/qualification)页查看资质ID。
     * @example `8563**`
     */
    "QualificationId": number;
    /**
     * 应用场景，填写说明如下：
     * - 已备案网站，请填写带有HTTP或HTTPS的工信部备案的网站域名。
     * - 已上线APP，请填写带有HTTP或HTTPS的应用商店的展示链接，并确保App已经上线。
     * - 公众号或小程序，请填写公众号或小程序全称，并确保公众号或小程序已上线。
     * - 电商平台店铺名，仅适用于企业用户，请填写带有HTTP或HTTPS的电商铺的展示链接。
     * @example `http://www.aliyun.com/
    `
     */
    "ApplySceneContent"?: string;
    /**
     * 签名来源。取值：
     * -  **0**：企事业单位的全称或简称。
     * -  **1**：工信部备案网站的全称或简称。
     * -  **2**：App应用的全称或简称。
     * -  **3**：公众号或小程序的全称或简称。
     * -  **4**：电商平台店铺名的全称或简称。
     * -  **5**：商标名的全称或简称。
     * @example `1`
     */
    "SignSource": number;
    /**
     * 签名为自或他用。
     * - false：自用
     * - true：他用
     * ><notice>签名为自用时，请选择自用资质ID；签名为他用时，请选择他用资质ID。></notice>
     * @example `false`
     */
    "ThirdParty"?: boolean;
}
