export interface CreateTagsRequest {
    /**
     * 地域ID。
     * > 仅支持`cn-hangzhou`地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签键值参数列表。
     */
    "TagKeyValueParamList": {
        /**
         * 标签键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * N的取值范围：1~10。
         * @example `Environment`
         */
        Key: string;
        /**
         * 标签值参数列表。
         */
        TagValueParamList: {
            /**
             * 标签值。
             * 最多支持128个字符，不能包含`http://`或者`https://`。
             * N的取值范围：1~10。
             * @example `test`
             */
            Value: string;
            /**
             * 标签值描述。
             * N的取值范围：1~10。
             * @example `测试环境`
             */
            Description: string;
        }[];
        /**
         * 标签键描述。
         * N的取值范围：1~10。
         * @example `业务环境`
         */
        Description: string;
    }[];
}
