export interface QueryQualificationDetailRequest {
    /**
     * 实例编号。
     * @example `S20181*****85212`
     */
    "InstanceId": string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - zh：中文
     * - en：英文
     * 默认为en。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资质审核接口类型。固定取值**knet**。
     * @example `knet`
     */
    "QualificationType": string;
}
