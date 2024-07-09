export interface DescribeMonitorGroupInstanceAttributeResponse {
    /**
     * 请求ID。
     * @example `9FB8EA79-7279-4482-8D6D-3D28EEDD871A`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总记录条数。
     * @example `12`
     */
    Total: number;
    Resources: {
        /**
         * 应用分组关联的资源。
         */
        Resource: {
            /**
             * 实例名称。
             * @example `hostName`
             */
            InstanceName: string;
            /**
             * 应用分组关联资源的维度信息。
             * @example `{"instanceId":"i-m5e0k0bexac8tykr****"}`
             */
            Dimension: string;
            /**
             * 云产品名称。
             * @example `ecs`
             */
            Category: string;
            /**
             * 实例ID。
             * @example `i-m5e0k0bexac8tykr****`
             */
            InstanceId: string;
            /**
             * 网络类型。
             * @example `vpc`
             */
            NetworkType: string;
            /**
             * 资源描述信息。
             * @example `desc_test`
             */
            Desc: string;
            Tags: {
                /**
                 * 资源的标签。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `instanceNetworkType`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `VPC`
                     */
                    Value: string;
                }[];
            };
            /**
             * 地域。
             */
            Region: {
                /**
                 * 可用区。
                 * @example `cn-hangzhou-f`
                 */
                AvailabilityZone: string;
                /**
                 * 地域ID。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
            };
            /**
             * VPC实例的描述信息。
             */
            Vpc: {
                /**
                 * Vswitch实例ID。
                 * @example `vsw-2ze36seq79n992****`
                 */
                VswitchInstanceId: string;
                /**
                 * VPC实例ID。
                 * @example `vpc-2zew7etgiceg21****`
                 */
                VpcInstanceId: string;
            };
        }[];
    };
}
