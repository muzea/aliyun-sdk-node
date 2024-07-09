export interface ListPlaylistResponse {
    /**
     * 节目单信息列表。
     */
    ProgramList: {
        /**
         * 节目单对应导播台ID。可作为添加虚拟演播厅布局、删除虚拟演播厅布局、修改虚拟演播厅布局和查询虚拟演播厅布局的请求参数。
         * @example `casdfasdfasfdasdflkasjdflaj****`
         */
        CasterId: string;
        /**
         * 主播流域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 节目单ID。
         * @example `c09f3d63-eacf-4fbf-bd48-a07a6ba7****`
         */
        ProgramId: string;
        /**
         * 节目单名称。
         * @example `playlist1`
         */
        ProgramName: string;
        /**
         * 播放完后继续重复播放的次数。取值：
         * - **0**（默认值）：不重复播放。
         * - **-1**：一直循环重复。
         * - 其他正整数：播放完1遍后继续重复播放的次数。
         * @example `1`
         */
        RepeatNumber: number;
        /**
         * 节目单状态。取值：
         * - **0**：停止。
         * - **1**：运行。
         * @example `1`
         */
        Status: number;
    }[];
    /**
     * 请求ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b96****`
     */
    RequestId: string;
    /**
     * 节目单数量。
     * @example `1`
     */
    Total: number;
}
