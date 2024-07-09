export interface AddSmsSignRequest {
    /**
     * 签名名称，签名名称请遵守[签名规范](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-0p8-qn8-mmy)。
     * > - 签名名称不区分大小写字母，如【Aliyun通信】和【aliyun通信】视为名称相同。
     * > - 当您的验证码签名和通用签名名称相同时，系统默认使用通用签名发送短信。
     * @example `阿里云`
     */
    "SignName": string;
    /**
     * 签名来源。取值：
     * -  **0**：企事业单位的全称或简称。
     * -  **1**：工信部备案网站的全称或简称。
     * -  **2**：App应用的全称或简称。
     * -  **3**：公众号或小程序的全称或简称。
     * -  **4**：电商平台店铺名的全称或简称。
     * -  **5**：商标名的全称或简称。
     * 签名来源的详细说明请参见[签名来源](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.0.4f9710fder2gR7#section-xup-k46-yi4)。
     * >此接口不支持申请签名来源是**测试或学习**和**线上试用**的签名，如果您需要申请这两种签名来源的签名，请前往[短信服务控制台](https://dysms.console.aliyun.com/domestic/text/sign/add/qualification)申请。
     * @example `1`
     */
    "SignSource": number;
    /**
     * 短信签名场景说明，长度不超过200个字符。
     * > 场景说明是签名审核的参考信息之一。请详细描述已上线业务的使用场景，并提供可以验证这些业务的网站链接、已备案域名地址、应用市场下载链接、公众号或小程序全称等信息。对于登录场景，还需提供测试账号密码。信息完善的申请说明会提高签名、模板的审核效率。短信场景填写可参考[签名来源](https://help.aliyun.com/zh/sms/user-guide/signature-specifications-1?spm=a2c4g.11186623.0.i2#section-xup-k46-yi4)表格中**应用场景**的填写。
     * @example `当前的短信签名应用于双11大促推广营销`
     */
    "Remark": string;
    /**
     * 签名文件列表。
     */
    "SignFileList": {
        /**
         * 签名的资质证明文件经base64编码后的字符串。图片不超过2 MB。个别场景下，申请签名需要上传证明文件。
         * 详细规范，请参见[上传文件规范](https://help.aliyun.com/zh/sms/user-guide/authorization-letter-and-material-speicfications/?spm=a2c4g.11186623.0.0.55a14070tXmBuJ)。
         * @example `R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uL****`
         */
        FileContents: string;
        /**
         * 签名的证明文件格式，支持上传多张图片。当前支持JPG、PNG、GIF或JPEG格式的图片。个别场景下，申请签名需要上传证明文件。
         * > 如果签名用途为他用或个人认证用户的自用签名来源为企事业单位名时，还需上传证明文件和委托授权书，详情请参见[证明文件](~~108076~~)和[授权委托书](~~56741~~)。
         * @example `jpg`
         */
        FileSuffix: string;
    }[];
    /**
     * 签名类型。
     * - **0**：验证码
     * - **1**：通用
     * @example `1`
     */
    "SignType"?: number;
}
