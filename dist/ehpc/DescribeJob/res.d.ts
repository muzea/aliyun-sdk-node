export interface DescribeJobResponse {
    /**
     * 请求ID。
     * @example `9697AD8D-56FA-4C8E-B46C-00AC9***`
     */
    RequestId: string;
    /**
     * 信息列表。
     */
    Message: {
        /**
         * 作业详细信息。
         * @example `{"2.scheduler": {"egroup": "users","Stageout_status": 1,"Keep_Files": "n","server": "scheduler","queue": "workq"}}`
         */
        JobInfo: string;
    };
}
