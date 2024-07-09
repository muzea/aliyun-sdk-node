export interface ListEcsSpecsResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果说明。
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400
     * - 404
     * @example `null`
     */
    HttpStatusCode: number;
    /**
     * 实例总数。
     * @example `35`
     */
    TotalCount: number;
    /**
     * 本分页中请求的实例列表。
     */
    EcsSpecs: {
        /**
         * 实例规格。
         * @example `ecs.gn5-c28g1.7xlarge`
         */
        InstanceType: string;
        /**
         * 显卡类型。可能值：
         * - V100
         * - A100
         * - A10
         * - T4
         * - P100
         * @example `v100`
         */
        GPUType: string;
        /**
         * CPU核数。
         * @example `32`
         */
        CPU: number;
        /**
         * GPU卡数。
         * @example `4`
         */
        GPU: number;
        /**
         * 内存大小（GB）。
         * @example `32`
         */
        Memory: number;
        /**
         * 系统盘大小（GB）。
         * @example `500`
         */
        SystemDiskCapacity: number;
        /**
         * 资源类型。
         * @example `CPU`
         */
        AcceleratorType: string;
        /**
         * 价格。
         * @example `22.8`
         */
        Price: number;
        /**
         * 货币单位。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 实例接收带宽。
         * @example `5120000`
         */
        InstanceBandwidthRx: number;
        /**
         * ECS规格标签列表。
         * @example `{'foo': 'bar'}`
         */
        Labels: {
            /**
             * ECS规格标签键。
             * @example `SupportResourcePackDeduction`
             */
            Key: string;
            /**
             * ECS规格标签值。
             * @example `true`
             */
            Value: string;
        }[];
        /**
         * 资源是否可用
         * @example `True`
         */
        IsAvailable: boolean;
    }[];
}
