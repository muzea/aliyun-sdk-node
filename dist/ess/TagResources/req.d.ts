export interface TagResourcesRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义，目前仅支持伸缩组。取值：scalinggroup。
     * @example `scalinggroup`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     */
    "ResourceIds": string[];
    /**
     * 资源的标签信息。
     */
    "Tags": {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 一旦传入该值，可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
        /**
         * 标识该标签是否为可传播标签，取值范围：
         * - true：伸缩组上的标签只会传播到新创建的实例上，而不会传播到已经在伸缩组中运行的实例上。
         * - false：伸缩组上的标签不会传播到实例上。
         * 默认值：false。
         * @example `false`
         */
        Propagate: boolean;
    }[];
}
