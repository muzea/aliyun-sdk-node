export interface TagResourcesRequest {
    /**
     * 资源类型，可取的值有：
     * - ALIYUN::LC::FLOW：逻辑编排工作流
     * @example `ALIYUN::LC::FLOW`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。最多可输入50个资源ID。
     * @example `lc-uf6tbvhheciyxl`
     */
    "ResourceId": string[];
    /**
     * 标签列表。列表最大长度为 20
     */
    "Tag": {
        /**
         * 资源的标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `tagKey`
         */
        Key: string;
        /**
         * 资源的标签值。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `tagValue`
         */
        Value: string;
    }[];
}
