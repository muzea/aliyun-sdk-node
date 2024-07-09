export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6ng3BeUyo2zbY5wgL1DBa2T`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `92ED7C9C-84A2-595F-87FE-354F84C0F739`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    TagResources: {
        /**
         * 资源列表。
         */
        TagResource: {
            /**
             * 资源ID。
             * @example `mse-cn-7pp2st29t16`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `cluster`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `prd`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `env`
             */
            TagKey: string;
        }[];
    };
}
