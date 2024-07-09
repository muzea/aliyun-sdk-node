export interface InitializeRequest {
    /**
     * 要接入的产品方案。取值为
     * - KYC_GLOBAL(eKYC产品方案)
     * - FV_GLOBAL(活体人脸验证)
     * - FL_GLOBAL(活体检测)
     * - IDR_GLOBAL(单证件验证)
     * - OCR_GLOBAL(单证件OCR)
     * @example `KYC_GLOBAL`
     */
    "ProductCode"?: string;
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一。
     * @example `e0c34a***353888`
     */
    "MerchantBizId"?: string;
    /**
     * Metainfo环境参数，需要通过客户端SDK获取。
     * @example `{\"bioMetaInfo\":\"4.1.0:2916352,0\",\"deviceType\":\"web\",\"ua\":\"Mozilla/5.0 (Macintosh`
     */
    "MetaInfo"?: string;
    /**
     * 证件类型，以8位数字组合作为唯一标识
     * 注：只有当ProductCode为KYC_GLOBAL、OCR_GLOBAL、IDR_GLOBAL需传
     * @example `​01560000
    
    `
     */
    "DocType"?: string;
    /**
     * 您自定义的用户ID，或者其他可以识别特定用户的标识，例如手机号码、邮箱地址等。强烈建议对该字段的值进行预先脱敏，例如对值进行哈希处理。
     * @example `1221****6543`
     */
    "MerchantUserId"?: string;
    /**
     * 场景码。（IDV产品入参）
     * @example `123****123`
     */
    "SceneCode"?: string;
    /**
     * 人脸照片Base64编码。如果您选择FacePictureBase64方式传入人脸照片，请注意检查照片大小，不要传入超过1 MB的照片。
     * 当productCode为FV_GLOBAL时，和参数FacePictureUrl选择其中之一传入
     * @example `Base64`
     */
    "FacePictureBase64"?: string;
    /**
     * 人脸照片地址。公网可访问的HTTP、HTTPS链接。当productCode为FV_GLOBAL时，和参数FacePictureBase选择其中之一传入
     * @example `***`
     */
    "FacePictureUrl"?: string;
    /**
     * 是否裁剪。（IDV产品入参）
     * @example `N`
     */
    "Crop"?: string;
    /**
     * 是否开启OCR。（IDV产品入参）
     * @example `Y`
     */
    "Ocr"?: string;
    /**
     * 人脸图片质量。（IDV产品入参）
     * @example `Y`
     */
    "IdFaceQuality"?: string;
    /**
     * 是否启用证书防伪检测。（IDV产品入参）
     * @example `Y`
     */
    "IdSpoof"?: string;
    /**
     * 端侧回调地址。
     * @example `http*****`
     */
    "ReturnUrl"?: string;
    /**
     * 是否开启身份权威核验，目前仅适用于中国大陆二代身份证（IDV产品入参）
     * @example `Y`
     */
    "Authorize"?: string;
    /**
     * 证件采集拍照模式。
     * - manual：手动拍照。
     * - auto：自动拍照（默认）
     * @example `manual`
     */
    "DocScanMode"?: string;
    /**
     * 支持卡证和人脸顺序编排：
     * - DOC_FACE（默认）
     * - FACE_DOC
     * 注：只有当ProductCode为KYC_GLOBAL需传
     * @example `DOC_FACE`
     */
    "ProductFlow"?: string;
    /**
     * 认证结果的回调通知地址，回调请求方式默认为GET，回调地址必须以https开头。平台在完成认证后会回调该地址，并自动添加transactionId、passed和subcode字段。
     * @example `https://www.aliyun.com?callbackToken=1000004826&transactionId=shaxxxx&passed=Y&subCode=200`
     */
    "CallbackUrl"?: string;
    /**
     * 安全Token，用于防重复、防篡改校验。如果传入该参数会在回调地址显示CallbackToken字段。
     * @example `7ca5c68d869344ea8eeb30cdfd544544-6358700`
     */
    "CallbackToken"?: string;
    /**
     * 语言配置（IDV产品入参）
     * @example `en`
     */
    "LanguageConfig"?: string;
    /**
     * 代表认证流程不同安全水位的模式，可选值：
     * 01：普通模式（默认）。
     * 02：安全模式，相对严格的模式，可用于高风险场景（IDV产品入参）
     * @example `01`
     */
    "SecurityLevel"?: string;
    "StyleConfig"?: string;
    "ExperienceCode"?: string;
    "DocVideo"?: string;
    "Model"?: string;
    "IdThreshold"?: string;
}
