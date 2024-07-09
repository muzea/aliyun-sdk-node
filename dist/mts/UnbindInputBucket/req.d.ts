export interface UnbindInputBucketRequest {
    /**
     * 需要解绑的输入媒体Bucket名称，可以通过**MPS控制台** > **工作流管理** > **媒体Bucket**获取，或通过**OSS控制台** > **我的访问路径**获取。
     * @example `example-bucket-****`
     */
    "Bucket": string;
    /**
     * 代理授权使用的角色信息。
     * @example `acs:ram::174809843091****:role/exampleRole`
     */
    "RoleArn"?: string;
}
