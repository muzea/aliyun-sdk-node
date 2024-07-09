export interface ListInstanceTypesResponse {
    /**
     * 请求ID。
     * @example `41345CE8-6FE8-505D-BCF8-B9D972C1873F`
     */
    RequestId: string;
    InstanceTypes: {
        /**
         * 实例规格列表。
         */
        InstanceType: {
            /**
             * 规格名称（英文）。
             * @example `Performance Type`
             */
            NameEn: string;
            /**
             * 当前规格默认分辨率。
             * @example `720*1280`
             */
            DefaultResolution: string;
            /**
             * 云手机实例规格。
             * @example `ecp.ce.xlarge`
             */
            InstanceType: string;
            /**
             * 规格名称（中文）。
             * @example `性能型`
             */
            Name: string;
            /**
             * 云手机实例规格族。
             * @example `ecp.ce`
             */
            InstanceTypeFamily: string;
            /**
             * 实例规格的vCPU内核数目。
             * @example `2`
             */
            CpuCoreCount: number;
            /**
             * 实例规格的内存大小，单位GiB。
             * @example `4096`
             */
            MemorySize: string;
            Resolutions: {
                /**
                 * 当前规格支持的分辨率列表。
                 */
                Resolution: string[];
            };
        }[];
    };
}
