export interface DescribeRecordingsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nbCQ7ar+fECeh1IuWQXi39R5eoJ68zWp99mTAKRRNRhw==`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `327CFE78-1C0D-51AC-A9C6-BCEDF0DD44D6`
     */
    RequestId: string;
    /**
     * 云电脑录屏信息集合。
     */
    Recordings: {
        /**
         * 录制的结束时间。
         * @example `2023-04-10T07:26:06Z`
         */
        EndTime: string;
        /**
         * 文件路径。
         * @example `pg-4w5nk44zo5yl129dd/1mk78dugw344.mp4`
         */
        FilePath: string;
        /**
         * 录制的开始时间。
         * @example `2023-04-10T07:26:06Z`
         */
        StartTime: string;
        /**
         * 录制类型。
         * @example `alltime`
         */
        RecordingType: string;
        /**
         * 录制文件大小。单位：Byte（字节）。
         * @example `1742845`
         */
        RecordingSize: number;
        /**
         * 云电脑ID。
         * @example `ecd-10v0vuvm616sk****`
         */
        DesktopId: string;
        /**
         * 终端用户ID列表。
         */
        EndUserIds: string[];
        /**
         * 策略ID。
         * @example `pg-6dn811rzrwh9ws4z6`
         */
        PolicyGroupId: string;
        /**
         * 云电脑名称。
         * @example `DemoComputer`
         */
        DesktopName: string;
        /**
         * 录屏文件下载地址。
         * @example `https://eds-recording-bucket-cn-hangzhou-137187566615****.oss-cn-hangzhou.aliyuncs.com/pg-28l5tdjd33txz****​/ecd-e0so9m9u6chf1****_gftest001_alltime_s0_****.mp4?Expires=171256****&OSSAccessKeyId=STS.NSwQo6S****&Signature=****4WyAA`
         */
        SignedUrl: string;
    }[];
}
