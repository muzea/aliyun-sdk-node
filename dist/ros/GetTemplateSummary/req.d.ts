export interface GetTemplateSummaryRequest {
    /**
     * 资源栈ID。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId、StackId、ChangeSetId、StackGroupName其中一个参数。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId"?: string;
    /**
     * 模板的结构。长度为1~524,288个字节。
     * 如果长度较大，建议通过HTTP POST+Body Param的方式，将参数放在请求体中进行传递，避免URL过长而导致请求失败。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId、StackId、ChangeSetId、StackGroupName其中一个参数。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    "TemplateBody"?: string;
    /**
     * 模板所属资源栈或资源栈组的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * 仅在指定StackId、ChangeSetId或StackGroupName时生效。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板ID。支持共享模板和私有模板。
     * 您仅能指定TemplateBody、TemplateURL、TemplateId、StackId、ChangeSetId、StackGroupName其中一个参数。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId"?: string;
    /**
     * 包含模板主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储空间（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大为524,288个字节。
     * > 如果OSS地域未指定，默认与接口参数RegionId相同。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId、StackId、ChangeSetId、StackGroupName其中一个参数。
     * URL的最大长度为：1024个字节。
     * @example `oss://ros/template/demo`
     */
    "TemplateURL"?: string;
    /**
     * 更改集ID。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId、StackId、ChangeSetId、StackGroupName其中一个参数。
     * @example `1f6521a4-05af-4975-afe9-bc4b45ad****`
     */
    "ChangeSetId"?: string;
    /**
     * 模板版本。当您设置TemplateId参数时，本参数生效。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 资源栈组名称。
     * 您必须且仅能指定TemplateBody、TemplateURL、TemplateId、StackId、ChangeSetId、StackGroupName其中一个参数。
     * @example `my-stack-group`
     */
    "StackGroupName"?: string;
    /**
     * 模板中已定义的参数。
     */
    "Parameters"?: {
        /**
         * 模板中已定义的参数的名称。如果您未指定参数的名称和值时，ROS将使用模板中指定的默认值。
         * N最大值为200。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `InstanceId`
         */
        ParameterKey: string;
        /**
         * 模板中已定义的参数的取值。
         * N最大值为200。
         * > Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
         * @example `i-rotp2e20whfrs2****`
         */
        ParameterValue: string;
    }[];
    /**
     * 保证请求的幂等性。该参数值由客户端生成，并且必须全局唯一。
     * 长度不超过64个字符。可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
