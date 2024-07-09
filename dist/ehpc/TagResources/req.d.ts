export interface TagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。目前仅支持cluster，即E-HPC集群。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源ID，最多50个。
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多20个。
     */
    "Tag": {
        /**
         * 标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
