export interface ExportClientEventsResponse {
    /**
     * 事件导出列表的下载地址。
     * @example `https://cn-shanghai-servicemanager.oss-cn-shanghai.aliyuncs.com/A0_CLIENT_EVENT/EDS_Events%20List_20220519234611_w5HuD83KGs.csv?Expires=1652975773&OSSAccessKeyId=LTYL****8tso&Signature=4erMG*********k%3D`
     */
    Url: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
}
