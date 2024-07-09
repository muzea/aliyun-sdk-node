export interface UntagResourcesRequest {
    /**
     * SMC资源类型。取值范围：
     * - sourceserver：迁移源。
     * - replicationjob：迁移任务。
     * @example `sourceserver`
     */
    "ResourceType": string;
    /**
     * 是否删除SMC资源绑定的全部标签。仅当请求中未设置`TagKey.N`时该参数有效。取值范围：
     * - true：删除指定SMC资源绑定的全部标签。若指定的SMC资源未绑定任何标签，则不做处理。
     * - false：不删除指定SMC资源绑定的任何标签。
     * 默认值：false。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * SMC资源ID。SMC资源包括迁移源和迁移任务。N的取值范围：1~50。
     * @example `s-bw526m1vi6x20c6g****`
     */
    "ResourceId": string[];
    /**
     * SMC资源的标签键。标签键大小写敏感。N的取值范围：1~20。
     * @example `TestKey`
     */
    "TagKey"?: string[];
}
