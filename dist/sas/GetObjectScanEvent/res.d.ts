export interface GetObjectScanEventResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `30CBF632-109F-596F-97F2-451C8B2A****`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 文件名称。
         * @example `sca_2023****`
         */
        FileName: string;
        /**
         * 文件MD5值。
         * @example `0552c44e243abdea1729d4507bce****`
         */
        Md5: string;
        /**
         * 告警项名称。
         * @example `WebShell`
         */
        EventName: string;
        /**
         * 详情。
         */
        Details: {
            /**
             * 详情项类型。
             * @example `html`
             */
            InfoType: string;
            /**
             * 详情项名称。
             * @example `DownloadUrl。`
             */
            Name: string;
            /**
             * 详情项显示名称。
             * @example `DownloadUrl。`
             */
            NameDisplay: string;
            /**
             * 详情项类型。
             * @example `html`
             */
            Type: string;
            /**
             * 详情项的值。
             * @example `http://****`
             */
            Value: string;
            /**
             * 详情项显示的值。
             * @example `http://****`
             */
            ValueDisplay: string;
        }[];
    };
}
