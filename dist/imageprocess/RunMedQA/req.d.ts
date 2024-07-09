export interface RunMedQARequest {
    /**
     * 数据来源机构代码。
     * @example `0001`
     */
    "OrgId": string;
    /**
     * 数据来源机构名称。
     * @example `weiyi`
     */
    "OrgName": string;
    /**
     * 会话ID。首次发送主诉信息时无需填写SessionId，当**QuestionType**为`chiefComplaint`时算首次问诊。首次调用后返回结果中显示对应SessionId，后续问诊时SessionId为必填项。即当**QuestionType**非`chiefComplaint`时，此项为必填项。
     * > 一次问诊对应一个SessionId，一次问诊会有多轮次对话，每个轮次都对应当前这个问诊的唯一SessionId。问诊有效期为24小时，24小时后SessionId失效。
     * @example `d1f6a6c2444f4c01adfadd413938e5c7`
     */
    "SessionId"?: string;
    /**
     * 代表医院科室。
     * > 当前服务版本仅支持**皮肤科**。
     * @example `皮肤科`
     */
    "Department": string;
    /**
     * 问题类型。取值如下：
     * - chiefComplaint：主诉
     * - age：年龄
     * - bodyParts：部位
     * - symptoms：症状
     * - complications：并发症
     * - diseaseCourse：病程
     * - diseaseHistory：疾病史
     * - medications：用药史
     * - allegries：过敏史
     * - images：皮损图片
     * - reports：报告
     * > 首次问诊，**QuestionType**不能为空，且必须为`images`类型，**sessionId**可为空。
     * @example `chiefComplaint`
     */
    "QuestionType": string;
    /**
     * 待检测皮肤病图像的URL地址列表。最多支持添加50条。
     */
    "AnswerImageURLList"?: {
        /**
         * 待检测皮肤病图像的URL地址。最多支持添加50条。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > 当**QuestionType**为`images`时必填。**AnswerImageURL**和**AnswerImageData**建议二选一，当与Base64编码方式共存时，URL方式优先。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
         * @example `https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/imageprocess/roseola.jpeg`
         */
        AnswerImageURL: string;
    }[];
    /**
     * 待检测皮肤病图像的Base64编码字符串列表。最多支持添加50条。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
     */
    "AnswerImageDataList"?: {
        /**
         * 待检测皮肤病图像的Base64编码字符串。最多支持添加50条。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
         * > 当**QuestionType**为`images`时必填。**AnswerImageURL**和**AnswerImageData**建议二选一，当与URL方式共存时，URL方式优先。
         * @example `iVBORw0KGgoAAAANSUhEUgAAAoAAAAHJCAIAAACaEB9NAAEAAElEQVR4nNT9Wb****`
         */
        AnswerImageData: string;
    }[];
    /**
     * 患者的主诉或回答列表。最多支持添加50条。
     */
    "AnswerTextList"?: {
        /**
         * 患者的主诉或回答列表。最多支持添加50条。
         * @example `起了好多红疙瘩流脓，痒死了，晚上痒的最厉害，怎么办啊？`
         */
        AnswerText: string;
    }[];
}
