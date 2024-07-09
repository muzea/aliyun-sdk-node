export interface DescribeCrossRegionLogBackupFilesResponse {
    /**
     * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-06-15T12:10:00Z`
     */
    EndTime: string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-05-30T12:10:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `DAC241E8-28E6-49DA-BFB0-B2DD090885C1`
     */
    RequestId: string;
    /**
     * 本页备份文件个数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalRecordCount: number;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Items: {
        /**
         * 跨地域日志备份列表。
         */
        Item: {
            /**
             * 跨地域日志备份文件记录的开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-05-30T12:10:00Z`
             */
            LogBeginTime: string;
            /**
             * 下载链接过期时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-06-30T15:00:00Z`
             */
            LinkExpiredTime: string;
            /**
             * 跨地域日志备份内网下载链接。
             * @example `http://rdsddrlog-zb.oss-cn-zhangjiakou-internal.aliyuncs.com/****`
             */
            CrossIntranetDownloadLink: string;
            /**
             * 跨地域日志备份文件名称。
             * @example `cn-hangzhou_rm-bp****_7198739_mysql-bin.000230`
             */
            LogFileName: string;
            /**
             * 跨地域备份目的地域ID。
             * @example `cn-shanghai`
             */
            CrossBackupRegion: string;
            /**
             * 跨地域日志备份外网下载链接。
             * @example `http://rdsddrlog-zb.oss-cn-zhangjiakou.aliyuncs.com/****`
             */
            CrossDownloadLink: string;
            /**
             * 跨地域日志备份文件大小，单位：Byte。
             * @example `5312836`
             */
            CrossLogBackupSize: number;
            /**
             * 实例编号。
             * @example `8161055`
             */
            InstanceId: number;
            /**
             * 跨地域日志备份文件ID。
             * @example `14567`
             */
            CrossLogBackupId: number;
            /**
             * 跨地域日志备份文件记录的结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-05-30T20:10:00Z`
             */
            LogEndTime: string;
        }[];
    };
}
