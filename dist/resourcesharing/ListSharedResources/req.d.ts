export interface ListSharedResourcesRequest {
    /**
     * 共享单元归属者。取值：
     * - Self：查询您创建的共享单元中，共享给其他账号的资源列表。
     * - OtherAccounts：查询其他账号创建的共享单元中，共享给您的资源列表。
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
     * 资源使用者ID或资源所有者ID。取值：
     * - 当`ResourceOwner`为`Self`时，该参数为资源使用者ID。
     * - 当`ResourceOwner`是`OtherAccounts`时，该参数为资源所有者ID。
     * @example `172050525300****`
     */
    "Target"?: string;
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
     * 共享资源ID。
     * N的取值范围：1~5，即每次最多指定5个共享资源。
     * @example `vsw-bp1upw03qyz8n7us9****`
     */
    "ResourceIds"?: string[];
}
