export interface ListNodeInstanceTypeResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 查询结果的总数。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 每页的查询结果数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前展示的查询结果页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 资源规格列表。
     */
    NodeInstanceTypeModels: {
        /**
         * 资源规格类型ID。
         * @example `appstreaming.vgpu.4c8g.2g`
         */
        NodeInstanceType: string;
        /**
         * 资源规格族。
         * @example `appstreaming.vgpu`
         */
        NodeInstanceTypeFamily: string;
        /**
         * vCPU数量。
         * @example `4`
         */
        Cpu: string;
        /**
         * GPU数量。
         * @example `2`
         */
        Gpu: string;
        /**
         * 内存大小，单位为MB。
         * @example `8192`
         */
        Memory: number;
        /**
         * 显卡内存大小，单位为MB。
         * @example `8192`
         */
        GpuMemory: number;
        /**
         * 最大并发会话数，即单个资源可同时连接的会话数。如果同时连接的会话数过多，可能导致应用的使用体验下降。取值范围因资源规格不同而不同。各资源规格对应的取值范围分别是：
         * - appstreaming.general.4c8g：1\~2；
         * - appstreaming.general.8c16g：1\~4；
         * - appstreaming.vgpu.8c16g.4g：1\~4；
         * - appstreaming.vgpu.8c31g.16g：1\~4；
         * - appstreaming.vgpu.14c93g.12g：1\~6；
         * @example `4`
         */
        MaxCapacity: number;
        /**
         * 资源规格名称。
         * @example `无影-通用型_4核8G`
         */
        NodeTypeName: string;
    }[];
}
