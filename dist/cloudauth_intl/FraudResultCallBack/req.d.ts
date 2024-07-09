export interface FraudResultCallBackRequest {
    /**
     * 实人认证唯一标识,对应蚂蚁的verifyId
     * @example `shs2b27333914876c01de4cb22f5841f`
     */
    "CertifyId"?: string;
    /**
     * 防伪是否通过
     * - PASS (通过)
     * - REJECT (不通过)
     * @example `PASS`
     */
    "ResultCode"?: string;
    /**
     * 环境路由参数
     * - staging (预发环境)
     * - production (线上环境)
     * @example `production`
     */
    "VerifyDeployEnv"?: string;
    "ExtParams"?: string;
}
