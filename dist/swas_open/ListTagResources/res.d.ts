export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F	`
     */
    RequestId: string;
    TagResources: {
        /**
         * 由轻量资源及其标签组成的集合，包含了资源 ID、资源类型和标签键值等信息。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `ALIYUN::SWAS::INSTANCE`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `s-bw526m1vi6x20c6g****
            `
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}
