export interface CreatePolicyRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 标签策略名称。
     * 长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_）。
     * @example `test`
     */
    "PolicyName": string;
    /**
     * 标签策略描述。
     * 长度为0~512个字符。
     * @example `This is a tag policy example.`
     */
    "PolicyDesc"?: string;
    /**
     * 标签策略内容。
     * 关于标签策略语言的详情，请参见[标签策略语法](~~417436~~)。
     * @example `{"tags":{"CostCenter":{"tag_value":{"@@assign":["Beijing","Shanghai"]},"tag_key":{"@@assign":"CostCenter"}}}}`
     */
    "PolicyContent": string;
    /**
     * DryRun：是否空跑。取值：
     * - false（默认值）：否。会按请求参数执行操作。
     * - true：是。仅校验请求参数，不真正执行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 标签策略模式。取值：
     * - USER：单账号模式的默认值。使用单个阿里云账号或资源目录成员为当前账号创建标签策略时，设置该值。
     * - RD：多账号模式的默认值。使用资源目录管理账号为整个资源目录创建标签策略时，设置该值。
     * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
     * @example `RD`
     */
    "UserType"?: string;
}
