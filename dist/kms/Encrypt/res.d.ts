export interface EncryptResponse {
    /**
     * 用于加密明文的密钥版本标志符。是指定密钥的主版本。
     * @example `86a9efd9-3d16-4894-bd4f-1fc43f3f****`
     */
    KeyVersionId: string;
    /**
     * 密钥ID。如果请求中的KeyId参数使用的是密钥别名、密钥ARN，在响应中会返回密钥ID。
     * @example `key-hzz630494463ejqjx****`
     */
    KeyId: string;
    /**
     * 数据被指定密钥的主版本加密后的密文。
     * @example `DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****`
     */
    CiphertextBlob: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `475f1620-b9d3-4d35-b5c6-3fbdd941423d`
     */
    RequestId: string;
}
