export interface CopyProductRequest {
    /**
     * 源产品ARN。
     * ><notice>被复制产品ARN可来自本账号下的产品，也可来自其他账号通过产品组合共享的产品。></notice>
     * @example `acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****
    `
     */
    "SourceProductArn": string;
    /**
     * 目标产品名称。
     * @example `DEMO-ECS`
     */
    "TargetProductName"?: string;
}
