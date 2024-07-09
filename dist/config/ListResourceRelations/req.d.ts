export interface ListResourceRelationsRequest {
    /**
     * 资源ID。
     * @example `i-j6cajg9yrfoh4sas****`
     */
    "ResourceId": string;
    /**
     * 资源类型。
     * @example `ACS::ECS::Instance`
     */
    "ResourceType": string;
    /**
     * 资源所在地域ID。
     * @example `cn-shanghai`
     */
    "Region": string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `C2DjqMYSy0is7zSMGf21****`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。取值范围：1~1000。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 关联资源的资源类型。
     * @example `ACS::ECS::Disk`
     */
    "TargetResourceType"?: string;
    /**
     * 关联资源的资源ID。
     * @example `d-j6c8k731qbrc7fxi****`
     */
    "TargetResourceId"?: string;
    /**
     * 资源关系类型。
     * @example `IsAttachedTo`
     */
    "RelationType"?: string;
}
