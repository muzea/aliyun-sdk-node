export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DE65F6B7-7566-4802-9007-96F2494A****`
     */
    RequestId: string;
    /**
     * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
     */
    TagResources: {
        /**
         * 资源的标签值。
         * @example `TestValue`
         */
        TagValue: string;
        /**
         * 资源类型。
         * @example `ALIYUN::ESS::SCALINGGROUP`
         */
        ResourceType: string;
        /**
         * 资源ID。
         * @example `asg-bp17xb4x1vr29lgt****`
         */
        ResourceId: string;
        /**
         * 资源的标签键。
         * @example `TestKey`
         */
        TagKey: string;
        /**
         * 标识该标签是否为可传播标签，可能值：
         * - true：伸缩组上的标签只会传播到新创建的实例上，而不会传播到已经在伸缩组中运行的实例上。
         * - false：伸缩组上的标签不会传播到实例上。
         * @example `false`
         */
        Propagate: boolean;
    }[];
}
