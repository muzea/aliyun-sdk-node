export interface ListFpShotFilesResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 下一页Token。
     * @example `ae0fd49c0840e14daf0d66a75b83****`
     */
    NextPageToken: string;
    FpShotFileList: {
        /**
         * 视频DNA文件列表。更多信息请参见[数据类型FpShotFile](~~29251~~)。
         */
        FpShotFile: {
            /**
             * 视频唯一主键。
             * @example `fb712a6890464059b1b2ea7c8647****`
             */
            PrimaryKey: string;
            /**
             * 作业输入。
             */
            InputFile: {
                /**
                 * 输入文件的OSS Object。
                 * @example `example-****.mp4`
                 */
                Object: string;
                /**
                 * 输入文件的OSS Location。
                 * @example `oss-cn-beijing`
                 */
                Location: string;
                /**
                 * 输入文件的OSS Bucket。
                 * @example `example-bucket-****`
                 */
                Bucket: string;
            };
            /**
             * 视频文件ID。
             * @example `41e6536e4f2250e2e9bf26cdea19****`
             */
            FileId: string;
            /**
             * 入库时间。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为`YYYY-MM-DDThh:mm:ssZ`。
             * > 此参数支持使用的地域为华北2（北京）、华东1（杭州）、华东2（上海），暂不支持亚太东南1（新加坡）地域使用。
             * @example `2022-09-08T23:32:56Z`
             */
            StoreTime: string;
        }[];
    };
}
