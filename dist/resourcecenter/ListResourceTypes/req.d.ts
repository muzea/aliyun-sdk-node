export interface ListResourceTypesRequest {
    /**
     * 返回信息的语言类型：
     * - zh-CN：中文
     * - en-US：英文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 资源类型。
     * 支持资源中心的资源类型，请参见[支持资源中心的云服务及资源类型](~~477798~~)。
     * @example `ACS::ACK::Cluster`
     */
    "ResourceType"?: string;
    /**
     * 查询条件。
     */
    "Query"?: string[];
}
