export interface GetTemplateRequest {
    /**
     * 资源栈ID。
     * > 您必须且仅能指定StackId、ChangeSetId、StackGroupName和TemplateId其中一个参数。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId"?: string;
    /**
     * 模板所属资源栈或资源栈组的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 更改集ID。
     * > 您必须且仅能指定StackId、ChangeSetId、StackGroupName和TemplateId其中一个参数。
     * @example `1f6521a4-05af-4975-afe9-bc4b45ad****`
     */
    "ChangeSetId"?: string;
    /**
     * 模板ID。
     * 支持共享的模板和私有模板。共享模板TemplateId与TemplateARN相同，使用该值查询。
     * > 您必须且仅能指定StackId、ChangeSetId、StackGroupName和TemplateId其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 模板版本。仅在指定TemplateId时生效。
     * 如果为共享模板，仅当共享模板中的VersionOption取值为AllVersions时，支持指定该参数。更多信息，请参见[SetTemplatePermission](~~194768~~).
     * 取值范围：v1～v100。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 模板阶段。仅在指定StackId、ChangeSetId或StackGroupName时生效。
     * 取值：
     * - Processed（默认值）：返回解析转换后的模板。
     * - Original：返回用户指定的原始模板。
     * @example `Processed`
     */
    "TemplateStage"?: string;
    /**
     * 是否查询模板共享信息。取值：
     * - Enabled：查询。
     * - Disabled（默认值）：不查询。
     * > 仅限模板拥有者查询。
     * @example `Enabled`
     */
    "IncludePermission"?: string;
    /**
     * 资源栈组名称。
     * > 您必须且仅能指定StackId、ChangeSetId、StackGroupName和TemplateId其中一个参数。
     * @example `MyStackGroup`
     */
    "StackGroupName"?: string;
    /**
     * 是否查询标签信息。取值：
     * - Enabled：查询。
     * - Disabled（默认值）：不查询。
     * > 仅在指定TemplateId参数时生效。
     * @example `Enabled`
     */
    "IncludeTags"?: string;
}
