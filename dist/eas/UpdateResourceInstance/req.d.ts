export interface UpdateResourceInstanceRequest {
    /**
     * 实例所在地域ID。
     * @example `cn-beijing`
     */
    "ClusterId": string;
    /**
     * 实例所属资源组ID，如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdas****`
     */
    "ResourceId": string;
    /**
     * 实例ID，如何获取实例ID，请参见[ListResourceInstances](~~412129~~)。
     * @example `eas-i-asdas****`
     */
    "InstanceId": string;
    /**
     * 请求body参数。
     */
    "body"?: {
        /**
         * 更新专属资源组机器实例的可调度行为。取值如下：
         * - Uncordon：取消禁止服务调度到此实例。
         * - Cordon：禁止服务调度到此实例。
         * - Drain：驱逐已调度到此实例的服务实例。
         * @example `Cordon`
         */
        Action: string;
    };
}
