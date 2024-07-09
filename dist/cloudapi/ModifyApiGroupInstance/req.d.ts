export interface ModifyApiGroupInstanceRequest {
    /**
     * 指定要迁移的API分组
     * @example `01c97ed08a614118849b00079753d1e2`
     */
    "GroupId": string;
    /**
     * 目标实例ID
     * @example `apigateway-bj-c325375b1ebe`
     */
    "TargetInstanceId": string;
    /**
     * 备注
     * @example `migrate`
     */
    "Remark"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `env`
         */
        Key: string;
        /**
         * 标签值
         * @example `123`
         */
        Value: string;
    }[];
}
