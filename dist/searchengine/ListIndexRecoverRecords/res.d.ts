export interface ListIndexRecoverRecordsResponse {
    /**
     * 索引全量版本
     * @example `1708674867`
     */
    generationId: string;
    /**
     * 备注
     * @example `自定义配置`
     */
    desc: string;
    /**
     * 本次发布的完成时间
     * @example `2024-06-07 16:43:00`
     */
    finishedTime: string;
}
