export interface RebuildDBInstanceResponse {
    /**
     * 请求ID。
     * @example `355DA57C-8CC4-40AB-B3F8-B684BA32EB9E`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `208676661`
     */
    TaskId: number;
    /**
     * 重建排队序号。当序号为0时，就会进行重建迁移。
     * @example `3298015`
     */
    MigrationId: number;
}
