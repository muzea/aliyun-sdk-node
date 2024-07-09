export interface GenerateTemplateByScratchResponse {
    /**
     * 请求ID。
     * @example `D22C1D13-D74E-558C-AF68-1B4C05FA6F1A`
     */
    RequestId: string;
    /**
     * 资源场景中生成的模板内容。
     * @example `{\"ROSTemplateFormatVersion\": \"2015-09-01\", \"Resources\": {\"ECSVPC_001\": {\"DeletionPolicy\": \"Retain\", \"Type\": \"ALIYUN::ECS::VPC\", \"Properties\": {\"CidrBlock\": \"172.16.0.0/12\", \"VpcName\": \"MyTestVpc\", \"EnableIpv6\": false}}}}`
     */
    TemplateBody: string;
    /**
     * 资源纳管类型的资源场景中，待导入资源栈的资源。
     * > 仅资源纳管类型的资源场景支持返回该参数。
     */
    ResourcesToImport: {
        /**
         * 资源类型。
         * @example `ALIYUN::ECS::VPC`
         */
        ResourceType: string;
        /**
         * 资源逻辑ID。
         * @example `ECSVPC_001`
         */
        LogicalResourceId: string;
        /**
         * 字符串到字符串的键值映射。取值是JSON格式的字符串，用来标识要导入的资源。
         * 键是资源的标识符属性（例如：ALIYUN::ECS::VPC资源的VpcId），值是属性的取值（例如：`vpc-bp1m6fww66xbntjyc****"`）。
         * @example `{"VpcId": "vpc-bp1m6fww66xbntjyc****" }`
         */
        ResourceIdentifier: any;
    }[];
}
