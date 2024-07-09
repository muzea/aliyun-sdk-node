export interface TagResourcesRequest {
    /**
     * 服务网格所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 系统规定参数，固定为`servicemesh`。
     * @example `servicemesh`
     */
    "ResourceType": string;
    /**
     * 网格实例ID列表。
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签键。
         * 限制：
         * - 不能为空。
         * - N的取值范围为1~20。
         * - 最多支持128个字符。
         * - 不能以`aliyun`或`acs:`开头。
         * - 不能包含`http://`和`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 标签值。
         * 限制：
         * - 不能为空。
         * - N的取值范围为1~20。
         * - 最多支持128个字符。
         * - 不能包含`http://`和`https://`。
         * @example `yahaha`
         */
        Value: string;
    }[];
}
