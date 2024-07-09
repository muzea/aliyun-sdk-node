export interface ListRemediationTemplatesResponse {
    /**
     * 请求ID。
     * @example `FC2C4750-7024-499C-A69F-763543D1CBE3`
     */
    RequestId: string;
    /**
     * 修正模板列表。
     */
    RemediationTemplates: {
        /**
         * 修正类型。仅支持OOS（运维编排）。
         * @example `OOS`
         */
        RemediationType: string;
        /**
         * 修正模板ID。
         * @example `ACS-OSS-PutBucketAcl`
         */
        TemplateIdentifier: string;
        /**
         * 修正模板名称。
         * @example `设置OSS Bucket的访问权限为私有。`
         */
        TemplateName: string;
        /**
         * 修正模板定义。
         * @example `{   "Parameters": {     "bucketName": {       "Default": "{resourceId}",       "Description": {         "zh-cn": "[Required]OSS Bucket名称。",         "en": "[Required]OSS Bucket名称。"       },       "Type": "String"     },     "regionId": {       "AssociationProperty": "RegionId",       "Default": "{regionId}",       "Description": {         "zh-cn": "[Required]The id of target region.",         "en": "[Required]The id of target region."       },       "Type": "String"     },     "permissionName": {       "AllowValues": "[\"public-read-write\",\"public-read\",\"private\"]",       "Default": "private",       "Description": {         "zh-cn": "[Required]ACL权限名称。",         "en": "[Required]ACL权限名称。"       },       "Type": "String"     }   } }`
         */
        TemplateDefinition: string;
        /**
         * 修正模板描述。
         * @example `通过接口PutBucketACL，设置或修改存储空间（Bucket）的访问权限（ACL），请您知晓风险谨慎操作。`
         */
        TemplateDescription: string;
    }[];
    /**
     * 修正模板列表的页码。起始值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。取值范围：1~100。
     * @example `10`
     */
    PageSize: number;
    /**
     * 修正模板总数。
     * @example `1`
     */
    TotalCount: string;
}
