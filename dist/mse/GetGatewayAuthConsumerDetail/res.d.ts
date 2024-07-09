export interface GetGatewayAuthConsumerDetailResponse {
    /**
     * 请求ID。
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * code仅仅用来和success同步。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符。
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 鉴权消费者ID。
         * @example `12`
         */
        Id: number;
        /**
         * 鉴权消费者名称。
         * @example `test`
         */
        Name: string;
        /**
         * 鉴权消费者状态：
         * - true：启用
         * - false：停用
         * @example `true`
         */
        ConsumerStatus: boolean;
        /**
         * 创建人。
         * @example `123`
         */
        PrimaryUser: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
         */
        GatewayUniqueId: string;
        /**
         * 鉴权类型：
         * - JWT
         * @example `JWT`
         */
        Type: string;
        /**
         * 创建时间。
         * @example `2023-02-01 14:17:57`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `2023-03-01 14:17:57`
         */
        GmtModified: string;
        /**
         * 描述。
         * @example `描述`
         */
        Description: string;
        /**
         * 加密类型：
         * - RSA
         * - OCT
         * @example `RSA`
         */
        EncodeType: string;
        /**
         * JWT公钥，支持JSON格式。
         * @example `{
              "keys": [
                    {
                          "e": "AQAB",
                          "kid": "DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ",
                          "kty": "RSA",
                          "n": "xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"
                    }
              ]
        }`
         */
        Jwks: string;
        /**
         * 要校验的Token参数信息的名称，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
         * @example `Authorization`
         */
        TokenName: string;
        /**
         * 是否透传。
         * @example `true`
         */
        TokenPass: boolean;
        /**
         * 要校验的Token参数信息的位置，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
         * @example `HEADER`
         */
        TokenPosition: string;
        /**
         * 要校验的Token参数信息的前缀，默认是以Bearer为前缀放在Authorization header中，例如：`Authorization: Bearer token`。
         * @example `Bearer `
         */
        TokenPrefix: string;
        /**
         * JWT内身份标识KeyName。
         * @example `iss`
         */
        KeyName: string;
        /**
         * JWT内身份标识KeyValue。
         * @example `abcd`
         */
        KeyValue: string;
        /**
         * 资源列表
         */
        ResourceList: {
            /**
             * 鉴权消费者授权ID。
             * @example `16`
             */
            Id: number;
            /**
             * 网关鉴权消费者ID。
             * @example `123`
             */
            ConsumerId: number;
            /**
             * 路由ID。
             * @example `3458`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `test`
             */
            RouteName: string;
            /**
             * 资源授权状态：
             * - true：启用
             * - false：停用
             * @example `true`
             */
            ResourceStatus: boolean;
            /**
             * 网关唯一标识ID。
             * @example `gw-4822033a8513496fa10f05c934f*****`
             */
            GatewayUniqueId: string;
            /**
             * 创建时间。
             * @example `2022-12-06 01:38:03`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2022-12-06 01:38:03`
             */
            GmtModified: string;
        }[];
    };
}
