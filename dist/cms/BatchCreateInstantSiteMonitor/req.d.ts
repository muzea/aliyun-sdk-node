export interface BatchCreateInstantSiteMonitorRequest {
    /**
     * 站点监控任务列表。
     * > 至少需要创建一条站点监控任务，且`Address`、`TaskName`和`TaskType`必须设置。
     */
    "TaskList": {
        /**
         * 站点监控任务的URL或IP地址。
         * > 至少需要创建一条站点监控任务，且`Address`、`TaskName`和`TaskType`必须设置。
         * @example `https://www.aliyun.com`
         */
        Address: string;
        /**
         * 探测点信息。如果该参数取值为空，则系统随机选择3个探测点。
         * 格式为`JSONArray`，例如：`[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`，分别对应北京、杭州、青岛。
         * 关于如何获取探测点信息，请参见[DescribeSiteMonitorISPCityList](~~115045~~)。
         * @example `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`
         */
        IspCities: string;
        /**
         * 站点监控任务对应协议类型的高级扩展选项。不同探测任务的协议类型对应不同的扩展选项。
         * @example `{"time_out":5000}`
         */
        OptionsJson: string;
        /**
         * 站点监控任务的名称。
         * <props="china">长度4~100个字符，取值可包含英文字母、数字、短划线（_）和汉字。</props>
         * <props="intl">长度4~100个字符，取值可包含英文字母、数字和短划线（_）。</props>
         * <props="partner">长度4~100个字符，取值可包含英文字母、数字和短划线（_）。</props>
         * > 至少需要创建一条站点监控任务，且`Address`、`TaskName`和`TaskType`必须设置。
         * @example `HangZhou_ECS1`
         */
        TaskName: string;
        /**
         * 监控任务的监控类型。
         * 目前站点监控任务的类型包括：HTTP、PING、TCP、UDP、DNS、SMTP、POP3、FTP。
         * > 至少需要创建一条站点监控任务，且`Address`、`TaskName`和`TaskType`必须设置。
         * @example `HTTP`
         */
        TaskType: string;
    }[];
}
