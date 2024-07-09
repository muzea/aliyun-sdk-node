export interface CreateDiskResponse {
    /**
     * 磁盘ID。
     * @example `d-bp131n0q38u3a4zi****`
     */
    DiskId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 生成的订单ID。
     * > 仅在创建包年包月云盘时会返回订单ID。
     * @example `20413515388****`
     */
    OrderId: string;
}
