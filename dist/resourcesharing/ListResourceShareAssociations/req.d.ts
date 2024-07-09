export interface ListResourceShareAssociationsRequest {
    /**
     * 资源ID。
     * >当`AssociationType`为`Target`时，该参数不可用。
     * @example `vsw-bp183p93qs667muql****`
     */
    "ResourceId"?: string;
    /**
     * 资源使用者ID。
     * >当`AssociationType`为`Resource`时，该参数不可用。
     * @example `172050525300****`
     */
    "Target"?: string;
    /**
     * 关联类型：取值：
     * - Resource：查询关联共享资源的记录。
     * - Target：查询关联资源使用者的记录。
     * @example `Resource`
     */
    "AssociationType": string;
    /**
     * 关联状态。取值：
     * - Associating：关联中。
     * - Associated：已关联。
     * - Failed：关联失败。
     * - Disassociating：分离中。
     * - Disassociated：已分离。
     * > `Failed`和`Disassociated`状态的记录，会在48~96小时内被系统自动删除。
     * @example `Associated`
     */
    "AssociationStatus"?: string;
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
}
