export interface DeleteInstanceRequest {
    /**
     * 实例id
     * @example `apigateway-sh-ae502ee79ef8`
     */
    "InstanceId": string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `key`
         */
        Key: string;
        /**
         * 标签值
         * @example `value`
         */
        Value: string;
    }[];
}
