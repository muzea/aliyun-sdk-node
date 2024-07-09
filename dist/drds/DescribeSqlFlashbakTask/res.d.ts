export interface DescribeSqlFlashbakTaskResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `5D64DE59-44A1-E541-E0CB-B7E5C4305162`
     */
    RequestId: string;
    SqlFlashbackTasks: {
        /**
         * 闪回任务返回对象。
         */
        SqlFlashbackTask: {
            /**
             * 数据所属的表。
             * @example `drds_params`
             */
            TableName: string;
            /**
             * 搜索的结束时间。
             * @example `1568509597000`
             */
            SearchEndTime: number;
            /**
             * 下载地址过期时间。
             * @example `1569216270000`
             */
            ExpireTime: number;
            /**
             * 下载地址。
             * @example `http://...`
             */
            DownloadUrl: string;
            /**
             * 逆向召回进度。
             * @example `10`
             */
            RecallProgress: number;
            /**
             * SQL设计的主键值。
             * @example `id`
             */
            SqlPk: string;
            /**
             * 实例ID。
             * @example `drdshbga76p6****`
             */
            InstId: string;
            /**
             * 回溯类型，取值如下：
             * - **0**：精确查找
             * - **1**：模糊查找
             * @example `1`
             */
            RecallType: number;
            /**
             * 搜索的开始时间。
             * @example `1568609597000`
             */
            SearchStartTime: number;
            /**
             * 修改时间。
             * @example `1568611469000`
             */
            GmtModified: number;
            /**
             * 恢复的数据行数。
             * @example `0`
             */
            SqlCounter: number;
            /**
             * 闪回任务的数据库名。
             * @example `drds_flashback`
             */
            DbName: string;
            /**
             * 恢复类型，取值如下：
             * - **1**：镜像恢复
             * - **2**：逆向恢复
             * @example `1`
             */
            RecallRestoreType: number;
            /**
             * 创建时间。
             * @example `1568611408000`
             */
            GmtCreate: number;
            /**
             * SQL的trace_id。
             * @example `trace`
             */
            TraceId: string;
            /**
             * 主键ID。
             * @example `238`
             */
            Id: number;
            /**
             * 数据召回任务状态。
             * @example `1`
             */
            RecallStatus: number;
            /**
             * SQL的类型。
             * @example `Insert,Update,Delete`
             */
            SqlType: string;
        }[];
    };
}
