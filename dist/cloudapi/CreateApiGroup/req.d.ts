export interface CreateApiGroupRequest {
    /**
     * 分组名称，必须唯一，支持汉字、英文字母、数字、英文格式的下划线，必须以英文字母或汉字开头，4~50个字符。
     * @example `Weather`
     */
    "GroupName": string;
    /**
     * api根路径
     * @example `/qqq`
     */
    "BasePath"?: string;
    /**
     * API分组描述，不超过180个字符。
     * @example `The weather informations.`
     */
    "Description"?: string;
    /**
     * 实例ID
     * @example `apigateway-cn-v6419k43xxxxx`
     */
    "InstanceId"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签的key
         * @example `key`
         */
        Key: string;
        /**
         * 标签的value
         * @example `value`
         */
        Value: string;
    }[];
}
