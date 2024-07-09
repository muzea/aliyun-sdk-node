export interface CreateConstraintRequest {
    /**
     * 约束类型。
     * 取值为Launch，表示启动约束。
     * @example `Launch`
     */
    "ConstraintType": string;
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
    /**
     * 约束所属的产品组合ID。
     * @example `port-bp1yt7582g****`
     */
    "PortfolioId": string;
    /**
     * 约束对应的产品ID。
     * @example `prod-bp18r7q127****`
     */
    "ProductId": string;
}
