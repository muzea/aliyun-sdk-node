export interface UpdateStackTemplateByResourcesRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 此次请求是否只预览结果，取值：
     * - true：返回修正后的资源栈的模板的内容，并不会修改资源栈的模板。与原模板比较分析后，再判断是否要执行修正。
     * - false（默认值）：会直接对资源栈的模板进行修正以消除偏差。
     * > 建议设置DryRun为true，预览修改后的模板。如果符合预期，再设置DryRun为false，真正地执行修改。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。
     * 长度最大为64个字符，可包含英文字符、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 返回的模板格式，取值：
     * - JSON（默认值）
     * - YAML
     * @example `JSON`
     */
    "TemplateFormat"?: string;
    /**
     * 资源名列表，用于过滤资源。修正模板时仅涉及列表中的资源。默认修正所有有偏差的资源。
     * 如果被修正的列表中包含偏差状态为DELETED的资源，为了确保修正后模板的正确性，可能会对列表之外但引用了被删除资源的资源进行调整。
     * @example `Vpc`
     */
    "LogicalResourceId"?: string[];
}
