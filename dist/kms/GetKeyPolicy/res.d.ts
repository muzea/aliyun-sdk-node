export interface GetKeyPolicyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `381D5D33-BB8F-395F-8EE4-AE3B84B523C8`
     */
    RequestId: string;
    /**
     * 密钥策略。
     * @example `{"Statement": [{"Action": ["kms:*"],"Effect": "Allow","Principal": {"RAM": ["acs:ram::190325303126****:*","acs:ram::119285303511****:*"]},"Resource": ["*"],"Sid": "kms default key policy"}],"Version": "1" }`
     */
    Policy: string;
}
