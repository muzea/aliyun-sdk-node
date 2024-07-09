export interface AddGatewayAuthConsumerRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-c70622ff52fe49beb29bea9a6f52****`
     */
    "GatewayUniqueId": string;
    /**
     * 鉴权消费者名称。
     * @example `name`
     */
    "Name": string;
    /**
     * 鉴权类型：
     * - JWT
     * @example `JWT`
     */
    "Type": string;
    /**
     * 加密类型：
     * - RSA
     * - OCT
     * @example `RSA`
     */
    "EncodeType"?: string;
    /**
     * JWT公钥，支持JSON格式。
     * @example `{"keys":[{"e":"AQAB","kid":"DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ","kty":"RSA","n":"xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"}]}`
     */
    "Jwks"?: string;
    /**
     * 要校验的Token参数信息的名称，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
     * @example `Authorization`
     */
    "TokenName"?: string;
    /**
     * 是否透传。
     * @example `true`
     */
    "TokenPass"?: boolean;
    /**
     * 要校验的Token参数信息的位置，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
     * @example `HEADER`
     */
    "TokenPosition"?: string;
    /**
     * 要校验的Token参数信息的前缀，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
     * @example `Bearer `
     */
    "TokenPrefix"?: string;
    /**
     * JWT内身份标识KeyName。
     * @example `iss`
     */
    "KeyName"?: string;
    /**
     * JWT内身份标识KeyValue。
     * @example `abcd`
     */
    "KeyValue"?: string;
    /**
     * 鉴权消费者描述。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
