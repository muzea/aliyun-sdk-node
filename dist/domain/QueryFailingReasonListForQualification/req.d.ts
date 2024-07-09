export interface QueryFailingReasonListForQualificationRequest {
    /**
     * 资质审核接口类型。固定取值**knet**。
     * @example `knet`
     */
    "QualificationType": string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - zh：中文
     * - en：英文
     * 默认值为en。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例编号。
     * @example `S20181*****85212`
     */
    "InstanceId": string;
    /**
     * 查询的记录数。
     * @example `10`
     */
    "Limit": number;
}
