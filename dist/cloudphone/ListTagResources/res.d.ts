export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个
     * @example `ADBAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83A`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源列表
         */
        TagResource: {
            /**
             * 资源类型。取值范围：
             * - instance：弹性云手机实例
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 标签值
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 资源ID
             * @example `cp-xxx`
             */
            ResourceId: string;
            /**
             * 标签键
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}
