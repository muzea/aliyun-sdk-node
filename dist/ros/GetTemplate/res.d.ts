export interface GetTemplateResponse {
    /**
     * 模板ARN。仅在指定TemplateId时返回该参数。
     * @example `acs:ros:*:151266687691****:template/a52f81be-496f-4e1c-a286-8852ab54****`
     */
    TemplateARN: string;
    /**
     * 模板描述。仅在指定TemplateId时返回该参数。
     * @example `ROS template for create ECS instance.`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84****`
     */
    RequestId: string;
    /**
     * 模板创建时间。仅在指定TemplateId时返回该参数。
     * > - 如果指定了TemplateVersion，则返回指定版本模板的创建时间。
     * > - 如果未指定TemplateVersion，则返回默认版本模板的创建时间。
     * @example `2020-11-18T08:49:26`
     */
    CreateTime: string;
    /**
     * 资源栈组名称。仅在指定StackGroupName时返回该参数。
     * @example `MyStackGroup`
     */
    StackGroupName: string;
    /**
     * 模板版本。仅在指定TemplateId时返回该参数。
     * 如果未指定TemplateVersion，或TemplateVersion未生效，则该参数表示模板当前版本。
     * 如果为共享模板，当且仅当VersionOption为AllVersions时，支持返回该参数。
     * @example `v1`
     */
    TemplateVersion: string;
    /**
     * 模板内容。
     * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
     */
    TemplateBody: string;
    /**
     * 更改集ID。仅在指定ChangeSetId时返回该参数。
     * @example `e85abe0c-6528-43fb-ae93-fdf8de22****`
     */
    ChangeSetId: string;
    /**
     * 模板所属阿里云账号ID。仅在指定TemplateId时返回该参数。
     * @example `151266687691****`
     */
    OwnerId: string;
    /**
     * 模板的最后更新时间。仅在指定TemplateId时返回该参数。
     * > - 如果指定了TemplateVersion，则返回指定版本模板的最后更新时间。
     * > - 如果未指定TemplateVersion，则返回模板的最后更新时间。
     * @example `2020-12-07T06:11:48`
     */
    UpdateTime: string;
    /**
     * 模板的共享状态。仅在指定TemplateId，且IncludePermission为Enabled时返回该参数。
     * > - 如果未指定TemplateVersion，或者TemplateVersion不生效，则返回模板的共享状态。
     * > - 如果指定了TemplateVersion，并且TemplateVersion生效，则返回版本关联模板的共享状态。
     */
    Permissions: {
        /**
         * 共享版本选项。仅在ShareOption取值为ShareToAccounts时返回该参数。
         * 取值：
         * - AllVersions：共享模板所有版本。
         * - Latest：只共享模板最新版本。模板版本增加时，共享的版本也随之变化，始终保持最新版本。
         * - Current：只共享模板当前最新版本。模板版本增加时，共享的版本不变。
         * - Specified：只共享模板指定的单个版本。
         * @example `AllVersions`
         */
        VersionOption: string;
        /**
         * 共享的阿里云账号。
         * @example `142437958638****`
         */
        AccountId: string;
        /**
         * 共享选项。
         * 取值：ShareToAccounts，表示共享给其他阿里云账号。
         * @example `ShareToAccounts`
         */
        ShareOption: string;
        /**
         * 共享的模板版本。当ShareOption为ShareToAccounts，且VersionOption为Specified或Current时返回该参数。
         * 取值范围：v1~v100。
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 共享关系的建立来源。
         * 取值：
         * - ROS：通过ROS控制台或API建立共享关系。
         * - ResourceDirectory：在资源管理服务中通过资源共享功能为资源目录中的账号建立共享关系。
         * > - 来自ROS的共享与来自ResourceDirectory的共享拥有独立的配额。
         * > - 无法通过ROS控制台或API取消或覆盖来自ResourceDirectory的共享。
         * > - 来自ResourceDirectory的共享可以覆盖来自ROS的共享。
         * @example `ROS`
         */
        ShareSource: string;
    }[];
    /**
     * 模板的名称。仅在指定TemplateId时返回该参数。
     * > - 如果指定了TemplateVersion，则返回版本关联的模板名称。
     * > - 如果未指定TemplateVersion，则返回模板的名称。
     * @example `MyTemplate`
     */
    TemplateName: string;
    /**
     * 模板所属资源栈或资源栈组的地域ID。仅在指定StackId、ChangeSetId或StackGroupName时返回该参数。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 模板的ID。仅在指定TemplateId时返回。
     * 如果是共享模板，返回结果与TemplateARN相同。
     * @example `a52f81be-496f-4e1c-a286-8852ab54****`
     */
    TemplateId: string;
    /**
     * 资源栈ID。仅在指定StackId时返回该参数。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****	`
     */
    StackId: string;
    /**
     * 模板的共享类型。仅在指定TemplateId时返回该参数。
     * 取值：
     * - Private：模板为用户自己所拥有。
     * - Shared：模板由其他用户所共享。
     * @example `Private`
     */
    ShareType: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    ResourceGroupId: string;
    /**
     * 界面描述信息。
     * @example `{}`
     */
    Interface: string;
    /**
     * 模板的标签。
     */
    Tags: {
        /**
         * 模板的标签键。
         * @example `usage`
         */
        Key: string;
        /**
         * 模板的标签值。
         * @example `test`
         */
        Value: string;
    }[];
}
