export interface UntagResourcesRequest {
    /**
     * 资源类型定义，可取的值有：
     * - ALIYUN::LC::FLOW：逻辑编排工作流
     * @example `ALIYUN::LC::FLOW`
     */
    "ResourceType": string;
    /**
     * 是否全部删除，只针对TagKey.N为空时有效。取值范围：
     * - true，全部删除
     * - false，不全部删除
     * 默认是 false
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表。最多可输入50个资源ID。
     * @example `lc-uf6tbvhheciyxl`
     */
    "ResourceId": string[];
    /**
     * 资源的标签键列表。最大长度为20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     * @example `tagKey`
     */
    "TagKey"?: string[];
}
