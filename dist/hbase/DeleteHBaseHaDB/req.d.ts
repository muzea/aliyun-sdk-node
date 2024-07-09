export interface DeleteHBaseHaDBRequest {
    /**
     * bds集群Id。
     * @example `bds-bp14112fd7g52s1****`
     */
    "BdsId": string;
    /**
     * Ha实例Id，可通过QueryHBaseHaDB接口获取到。
     * @example `ha-sw2o0l01s4r76****`
     */
    "HaId": string;
}
