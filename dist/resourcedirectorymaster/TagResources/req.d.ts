export interface TagResourcesRequest {
    /**
     * 资源目录成员ID。
     * 最多可以指定50个。
     */
    "ResourceId": string[];
    /**
     * 标签。
     * 最多可以绑定20个标签。
     */
    "Tag": {
        /**
         * 标签键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 资源类型。取值：
     * - Account：为资源目录成员绑定标签。
     * @example `Account`
     */
    "ResourceType": string;
}
