export interface ListWarehousesResponse {
    /**
     * Id of the request
     * @example `819A7F0F-2951-540F-BD94-6A41ECF0281F`
     */
    requestId: string;
    /**
     * 计算组列表
     */
    WarehouseList: {
        /**
         * id
         * @example `3`
         */
        Id: number;
        /**
         * cpu
         * @example `32`
         */
        Cpu: number;
        /**
         * 内存
         * @example `128`
         */
        Mem: number;
        /**
         * 计算组名称
         * @example `MyWarehouse`
         */
        Name: string;
        /**
         * 状态
         * @example `kRunning`
         */
        Status: string;
        /**
         * 计算节点数量
         * @example `2`
         */
        NodeCount: number;
    }[];
}
