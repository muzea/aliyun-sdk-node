export interface UpdateResourceRequest {
    /**
     * 资源组所在的地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdasdasd****`
     */
    "ResourceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 新的资源组名称，不能超过27个字符。
         * @example `iot`
         */
        ResourceName: string;
        /**
         * 自运维资源组配置选项
         */
        SelfManagedResourceOptions: {
            /**
             * 节点的标签键值对集合
             */
            NodeMatchLabels: any;
            /**
             * 节点污点的容忍度列表
             */
            NodeTolerations: {
                /**
                 * 键名
                 * @example `key1`
                 */
                key: string;
                /**
                 * 键值
                 * @example `value1`
                 */
                value: string;
                /**
                 * 键名和键值的关系
                 * @example `Equal`
                 */
                operator: string;
                /**
                 * 效果
                 * @example `NoSchedule`
                 */
                effect: string;
            }[];
        };
    };
}
