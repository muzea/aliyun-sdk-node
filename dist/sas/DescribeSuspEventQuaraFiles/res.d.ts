export interface DescribeSuspEventQuaraFilesResponse {
    /**
     * 返回的文件列表当前页编号。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 设置每页展示最大的隔离文件数量。
     * @example `20`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `32A73759-4C0F-4801-BE98-901223ACEE9A`
     */
    RequestId: string;
    /**
     * 隔离文件总数。
     * @example `38`
     */
    TotalCount: number;
    /**
     * 当前页隔离文件数。
     * @example `7`
     */
    Count: number;
    /**
     * 隔离文件列表。
     */
    QuaraFiles: {
        /**
         * 隔离文件下载链接。
         * @example `https://xxx.xxx/xxx`
         */
        Link: string;
        /**
         * 隔离状态。取值：
         * - **quaraFailed**：隔离失败
         * - **quaraDone**：隔离成功
         * - **quaraing**：隔离中
         * - **rollbackFailed**：撤销隔离失败
         * - **rollbackDone**：撤销隔离成功
         * - **rollbacking**：撤销隔离中
         * @example `rollbackDone`
         */
        Status: string;
        /**
         * 事件名称。
         * @example `WEBSHELL`
         */
        EventName: string;
        /**
         * 被隔离文件所在服务器的公网IP地址。
         * @example `47.XX.XX.131`
         */
        InternetIp: string;
        /**
         * 被隔离文件所在服务器的公网IP地址。
         * @example `47.XX.XX.131`
         */
        Ip: string;
        /**
         * 事件唯一标识。
         * @example `228f890e56eae9eec6a42c7ea801b538`
         */
        Tag: string;
        /**
         * 资产实例ID。
         * @example `i-2ze9t1qp36n1436m****`
         */
        InstanceId: string;
        /**
         * 服务器UUID。
         * @example `04a0e735-ad32-4835-b635-0458d77b****`
         */
        Uuid: string;
        /**
         * 事件类型。
         * @example `WebshellQuaraEventType`
         */
        EventType: string;
        /**
         * 隔离文件所在的服务器名称。
         * @example `iZwz98dkiw3vbrtqrt5v****`
         */
        InstanceName: string;
        /**
         * 被隔离文件在服务器中的存储路径。
         * @example `/var/www/html/webshell-sample-master/others/defc3e21bab59e2a2ab49f7eda99f65f83d4d349.jpg`
         */
        Path: string;
        /**
         * 文件MD5值。
         * @example `5ddebe926acc7ed39a664409bfd0ec10`
         */
        Md5: string;
        /**
         * 隔离文件ID。
         * @example `26918`
         */
        Id: number;
        /**
         * 更新时间。
         * @example `2020-06-11 20:37:08`
         */
        ModifyTime: string;
        /**
         * 被隔离文件所在服务器的私网IP地址。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
    }[];
}
