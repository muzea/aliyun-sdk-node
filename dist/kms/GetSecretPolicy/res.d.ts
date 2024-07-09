export interface GetSecretPolicyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `381D5D33-BB8F-395F-8EE4-AE3BB4B523C8`
     */
    RequestId: string;
    /**
     * 凭据策略。
     * @example `{"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }`
     */
    Policy: string;
}
