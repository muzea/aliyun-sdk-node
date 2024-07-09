export interface UpdateConstraintRequest {
    /**
     * 约束ID。
     * @example `cons-bp1yx7x42v****`
     */
    "ConstraintId": string;
    /**
     * 约束配置。
     * 格式：{ "LocalRoleName": "<role_name\>" }
     * @example `{ "LocalRoleName": "TestRole" }`
     */
    "Config": string;
    /**
     * 约束描述。
     * 长度为1~128个字符。
     * @example `Launch as local role TestRole`
     */
    "Description"?: string;
}
