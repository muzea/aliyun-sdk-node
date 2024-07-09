export interface DescribeFabricConsortiumOrderersResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 联盟的Orderer列表
     */
    Result: {
        /**
         * 域名
         * @example `domain`
         */
        Domain: string;
        /**
         * 更新时间
         * @example `1544411108000`
         */
        UpdateTime: string;
        /**
         * Orderer名称
         * @example `order1`
         */
        OrdererName: string;
        /**
         * 创建时间
         * @example `1544411108000`
         */
        CreateTime: string;
        /**
         * 端口
         * @example `7050`
         */
        Port: number;
        /**
         * 实例类型
         * @example `ecs.n1.small`
         */
        InstanceType: string;
    }[];
}
