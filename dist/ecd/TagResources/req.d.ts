export interface TagResourcesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。
     * @example `ALIYUN::GWS::INSTANCE`
     */
    "ResourceType": string;
    /**
     * 资源ID列表，即云电脑ID列表。可包含1\~50个。
     * @example `ecd-ia2zw38bi6cm7****`
     */
    "ResourceId": string[];
    /**
     * 标签列表。可包含1\~20个。
     */
    "Tag": {
        /**
         * 标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `department`
         */
        Key: string;
        /**
         * 标签值。可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `design`
         */
        Value: string;
    }[];
}
