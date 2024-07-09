export interface UpdateRemediationRequest {
    /**
     * 修正设置ID。
     * 关于如何获取修正设置ID，请参见[ListRemediations](~~270772~~)。
     * @example `crr-909ba2d4716700eb****`
     */
    "RemediationId": string;
    /**
     * 修正类型。取值：
     * - OOS：运维编排（模板修正）。
     * - FC：函数计算（自定义修正）。
     * @example `OOS`
     */
    "RemediationType"?: string;
    /**
     * 修正模板ID。
     * 关于如何获取修正模板ID，请参见[ListRemediationTemplates](~~270066~~)。
     * @example `ACS-OSS-PutBucketAcl`
     */
    "RemediationTemplateId"?: string;
    /**
     * 修正执行方式。取值：
     * - NON_EXECUTION：不执行。
     * - AUTO_EXECUTION：自动执行。
     * - MANUAL_EXECUTION：手动执行。
     * - NOT_CONFIG：未设置。
     * @example `AUTO_EXECUTION`
     */
    "InvokeType"?: string;
    /**
     * 执行修正来源。取值：
     * - ALIYUN：官方修正。
     * - CUSTOM：自定义修正。
     * - NONE：无。
     * @example `ALIYUN`
     */
    "SourceType"?: string;
    /**
     * 修正设置参数。
     * @example `{"properties":[{"name":"regionId","type":"STRING","value":"{regionId}","allowedValues":[]},{"name":"bucketName","type":"STRING","value":"{resourceId}","allowedValues":[],"description":"OSS Bucket名称。"},{"name":"permissionName","type":"STRING","value":"private","allowedValues":["public-read-write","public-read","private"],"description":"ACL权限名称。"}]}`
     */
    "Params"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `2014295338-e7361358-5822-4276-8d30-b5183fac****`
     */
    "ClientToken"?: string;
}
