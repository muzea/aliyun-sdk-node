export interface GetWarehouseDetailResponse {
    /**
     * Id of the request
     * @example `D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70`
     */
    RequestId: string;
    /**
     * 返回值
     */
    WarehouseDetail: {
        /**
         * 预留计算资源。实例所有运行中的计算组计算资源不能超过计算组预留计算资源。
         * @example `64`
         */
        ReservedCpu: string;
        /**
         * 未分配的计算资源。实例剩余未分配的计算组计算资源
         * @example `32`
         */
        RemainingCpu: string;
        /**
         * Warehouse列表
         */
        WarehouseList: {
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
             * id
             * @example `2`
             */
            Id: number;
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
            /**
             * 计算组名称
             * @example `MyWarehouse`
             */
            Name: string;
        }[];
    };
}
