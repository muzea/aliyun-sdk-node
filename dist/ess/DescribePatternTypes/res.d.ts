export interface DescribePatternTypesResponse {
    /**
     * 请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 符合条件的实例规格。
     */
    PatternTypes: {
        /**
         * 实例规格名称。
         * @example `ecs.c7.xlarge`
         */
        InstanceType: string;
        /**
         * 实例规格族级别。
         * - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](~~108489~~)。
         * - EnterpriseLevel：企业级。性能稳定，资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](~~25378~~)。
         * - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的情况。更多信息，请参见[突发性能实例](~~59977~~)。
         * @example `EnterpriseLevel`
         */
        InstanceFamilyLevel: string;
        /**
         * 实例规格族。
         * @example `ecs.c7`
         */
        InstanceTypeFamily: string;
        /**
         * 实例规格的 vCPU 核数。
         * @example `4`
         */
        Cores: number;
        /**
         * 实例规格的内存大小，单位为GiB。
         * @example `8`
         */
        Memory: number;
    }[];
}
