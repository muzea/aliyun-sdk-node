export interface OnsInstanceInServiceListRequest {
    /**
     * 实例所绑定的标签列表。列表元素个数不得超过 20。
     */
    "Tag"?: {
        /**
         * 实例的标签键。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的实例，若不输入表示查询所有实例。
         * - 如果输入该值，则取值不允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `CartService`
         */
        Key: string;
        /**
         * 资源的标签值。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的实例，若不输入表示查询所有实例。
         * - 如果输入该值，取值允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `SericeA`
         */
        Value: string;
    }[];
    /**
     * 是否需要资源统计信息。即实例下Topic的数量和Group的数量。
     * @example `true`
     */
    "NeedResourceInfo"?: boolean;
}
