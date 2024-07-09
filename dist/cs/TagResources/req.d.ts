export interface TagResourcesRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 资源ID列表。
         */
        resource_ids: string[];
        /**
         * 资源类型定义。取值范围：只支持`CLUSTER`这一种资源类型。
         * @example `CLUSTER`
         */
        resource_type: string;
        /**
         * 资源所属的地域ID。
         * @example `cn-hangzhou`
         */
        region_id: string;
        /**
         * 资源的标签键值对。数组长度范围：\[1,20\]。注意：
         * - 一旦传值，值不允许为空字符串，最多支持128个字符。
         * - 不能以`aliyun`和`acs:`开头。
         * - 不能包含`http://`或者`https://`。
         */
        tags: any[];
    };
}
