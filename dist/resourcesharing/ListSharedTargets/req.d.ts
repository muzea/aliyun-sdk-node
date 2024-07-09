export interface ListSharedTargetsRequest {
    /**
     * 共享单元归属者。
     * - Self：查询您创建的共享单元中，关联的资源使用者列表。
     * - OtherAccounts：查询其他账号创建的共享单元中，您作为资源使用者的共享单元及共享单元拥有者列表。
     * @example `Self`
     */
    "ResourceOwner": string;
    /**
     * 共享资源类型。
     * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
     * @example `VSwitch`
     */
    "ResourceType"?: string;
    /**
     * 共享资源ID。
     * @example `vsw-bp1upw03qyz8n7us9****`
     */
    "ResourceId"?: string;
    /**
     * 单次请求返回结果的最大条数。
     * 取值范围：1~100。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    "NextToken"?: string;
    /**
     * 共享单元ID。
     * N的取值范围：1~5，即每次最多指定5个共享单元。
     * @example `rs-6GRmdD3X****`
     */
    "ResourceShareIds"?: string[];
    /**
     * 资源使用者。
     * @example `114240524784****`
     */
    "Targets"?: string[];
}
