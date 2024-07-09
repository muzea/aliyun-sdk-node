export interface ModifyApiGroupRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId": string;
    /**
     * 分组名称，必须唯一，支持汉字、英文字母、数字、英文格式的下划线，必须以英文字母或汉字开头，4~50个字符，不传递表示不修改
     * @example `NewWeather`
     */
    "GroupName"?: string;
    /**
     * api根路径
     * @example `/eeee`
     */
    "BasePath"?: string;
    /**
     * 分组描述，不超过180个字符，不传递表示不修改
     * @example `New weather informations.`
     */
    "Description"?: string;
    /**
     * 用户日志配置
     * @example `{\"requestBody\":false,\"responseBody\":false,\"queryString\":\"\",\"requestHeaders\":\"\",\"responseHeaders\":\"\",\"jwtClaims\":\"\"}`
     */
    "UserLogConfig"?: string;
    /**
     * 自定义trace配置
     * @example `{\"parameterLocation\":\"HEADER\",\"parameterName\":\"traceId\"}`
     */
    "CustomTraceConfig"?: string;
    /**
     * 关联的标签列表，多个用逗号（,）分隔
     * @example `depart:dep1`
     */
    "CompatibleFlags"?: string;
    /**
     * 用户自定义的配置项数据
     * @example `removeResponseServerHeader`
     */
    "CustomerConfigs"?: string;
    /**
     * 透传 Headers
     * @example `eagleeye-rpcid,x-b3-traceid,host`
     */
    "PassthroughHeaders"?: string;
    /**
     * 默认域名
     * @example `mkt.api.gaore.com`
     */
    "DefaultDomain"?: string;
    /**
     * rpc模式
     */
    "RpcPattern"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `env`
         */
        Key: string;
        /**
         * 标签值
         * @example `uat`
         */
        Value: string;
    }[];
    "SupportSSE"?: string;
}
