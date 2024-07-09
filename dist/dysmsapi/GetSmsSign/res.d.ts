export interface GetSmsSignResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 短信签名名称。
     * @example `登录验证`
     */
    SignName: string;
    /**
     * 签名审核状态。取值：
     * - **0**：审核中。
     * - **1**：审核通过。
     * - **2**：审核失败，请在返回参数Reason中查看审核失败原因。
     * - **10**：取消审核。
     * @example `2`
     */
    SignStatus: number;
    /**
     * 短信签名的创建日期和时间。
     * @example `2024-06-03 10:02:34`
     */
    CreateDate: string;
    /**
     * 工单号。
     * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
     * @example `20044156924`
     */
    OrderId: string;
    /**
     * 资质ID，申请签名时关联的资质ID。
     * @example `2004393****`
     */
    QualificationId: number;
    /**
     * 短信签名场景说明，长度不超过200个字符。
     * @example `登录场景验证码`
     */
    Remark: string;
    /**
     * 审核信息。
     */
    AuditInfo: {
        /**
         * 审批未通过的原因。
         * @example `通过资质信息，不能判断是否可以申请此签名。`
         */
        RejectInfo: string;
        /**
         * 审核时间。
         * @example `2024-06-03 12:02:34
        `
         */
        AuditDate: string;
    };
    /**
     * 更多资料信息，补充上传业务证明文件或业务截图文件列表。
     */
    FileUrlList: string[];
    /**
     * 短信签名Code。
     * @example `SIGN_100000077042023_17174665*****_ZM2kG`
     */
    SignCode: string;
    /**
     * 签名标识，标识签名是用户自定义创建、系统赠送或测试签名等。取值：
     * - 2：用户自定义创建签名
     * - 3：系统赠送签名
     * - 4：测试签名
     * - 5：试用签名
     * @example `2`
     */
    SignTag: string;
    /**
     * 应用场景内容。
     * @example `http://www.aliyun.com/
    `
     */
    ApplyScene: string;
    /**
     * 签名为自用或他用。
     * - false：自用（默认值）
     * - true：他用
     * @example `false`
     */
    ThirdParty: boolean;
    /**
     * 签名使用场景。
     * @example `电商平台店铺名。`
     */
    SignUsage: string;
}
