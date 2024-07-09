export interface QueryDBBackupDumpTimesResponse {
    /**
     * 唯一请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 备份记录集合。
     */
    BackupDumpTimes: {
        /**
         * 备份记录ID。
         * @example `20201118114602_6bd7c996-f620-4026-ae24-418eddf78671`
         */
        BackupId: string;
        /**
         * 备份时间。
         * @example `2020-11-18T03:46:02Z`
         */
        DumpTime: string;
    }[];
}
