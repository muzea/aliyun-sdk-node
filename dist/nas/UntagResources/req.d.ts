export interface UntagResourcesRequest {
    /**
     * 资源类型。
     * 取值：filesystem（文件系统）
     * @example `filesystem`
     */
    "ResourceType": string;
    /**
     * 是否解绑目标文件系统的所有标签。
     * 当TagKey.N为空时，该参数有效。
     * 取值：
     * - true：解绑目标文件系统的所有标签。没有标签的文件系统则不处理，直接返回成功。
     * - false（默认值）：不执行该接口，直接返回成功。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID。取值范围：1~50。
     * @example `03e08484f0`
     */
    "ResourceId": string[];
    /**
     * 资源的标签键。取值范围：1~20。
     * @example `nastest`
     */
    "TagKey"?: string[];
}
