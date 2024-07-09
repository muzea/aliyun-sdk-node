export interface TagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId": string[];
    /**
     * 标签列表。一个资源最多可以绑定20个标签。
     */
    "Tag": {
        /**
         * 标签键。一旦传入该值，则不允许为空字符串。最多支持 128 个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签键。一旦传入该值，可以为空字符串。最多支持 128 个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `testvalue`
         */
        Value: string;
    }[];
    /**
     * 资源类型。取值范围：
     * - ContainerGroup：ECI实例
     * - ImageCache：镜像缓存
     * - DataCache：数据缓存
     * - VirtualNode：虚拟节点
     * @example `ContainerGroup`
     */
    "ResourceType": string;
}
