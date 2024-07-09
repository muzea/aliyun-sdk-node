export interface InitSmartVerifyRequest {
    /**
     * 认证场景ID。
     * 您必须先在**[增强版实人认证控制台](https://yundun.console.aliyun.com/?p=cloudauth)**创建认证场景，才能获得认证场景ID。更多信息，请参见**[添加认证场景](~~177631~~)**。
     * @example `100000xxxx`
     */
    "SceneId"?: number;
    /**
     * 商户请求的唯一标识。
     * 值为32位长度的字母数字组合。前面几位字符是商户自定义的简称，中间可以使用一段时间，后段可以使用一个随机或递增序列。
     * @example `e0c34a77f5ac40a5aa5e6ed20c35xxxx`
     */
    "OuterOrderNo"?: string;
    /**
     * 增强版活体检测的业务场景类型。取值：
     *   - **ACCOUNT_SAFE**：注册安全。
     *   - **DEVICE_SAFE**：设备安全。
     * @example `ACCOUNT_SAFE`
     */
    "Mode"?: string;
    /**
     * 证件类型。唯一取值：**IDENTITY_CARD**，表示身份证。
     * @example `IDENTITY_CARD`
     */
    "CertType"?: string;
    /**
     * MetaInfo环境参数，需要通过客户端SDK获取。
     * 更多信息，请参见**[Android客户端接入](~~186594~~)**、**[iOS客户端接入](~~186595~~)**。
     * @example `{"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:11501568,0","appName": "com.aliyun.antcloudauth","deviceType":"ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}`
     */
    "MetaInfo"?: string;
    /**
     * 用户手机号码。
     * > **说明****Mode**取值为**DEVICE_SAFE**时，**Mobile**为非必填字段。
     * @example `130xxxxxxxx`
     */
    "Mobile"?: string;
    /**
     * 用户网络IP。
     * @example `114.xxx.xxx.xxx`
     */
    "Ip"?: string;
    /**
     * 您业务中自定义的用户ID，请保持唯一。
     * @example `12345xxxx`
     */
    "UserId"?: string;
    /**
     * 用户的真实姓名。
     * @example `张三`
     */
    "CertName"?: string;
    /**
     * 用户的证件号码。
     * @example `330103xxxxxxxxxxxx`
     */
    "CertNo"?: string;
    "Ocr"?: string;
    /**
     * 认证结果的回调通知地址，必须以`https`开头。
     * 平台在完成认证后会回调该地址，并自动添加`certifyId`、`passed`和`subcode`字段，示例：`https://www.aliyun.com？certifyId=xxxx&passed=T&subcode=200`。
     * @example `https://www.aliyun.com`
     */
    "CallbackUrl"?: string;
    /**
     * 安全Token，用于防重复、防篡改校验。如果传入该参数会在回调地址显示CallbackToken字段。
     * @example `NMjvQanQgplBSaEI0sL86WnQplB`
     */
    "CallbackToken"?: string;
    "FacePictureBase64"?: string;
    "FacePictureUrl"?: string;
    "CertifyId"?: string;
    "OssBucketName"?: string;
    "OssObjectName"?: string;
    "IdNo"?: string;
    "IdName"?: string;
}
