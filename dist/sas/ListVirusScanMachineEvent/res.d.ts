export interface ListVirusScanMachineEventResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2DAEF40F-8E1A-550D-8793-99C61C401DD0`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的告警事件的总条数。
         * @example `149`
         */
        TotalCount: number;
    };
    /**
     *
     * 告警事件的详情。
     */
    Data: {
        /**
         * 告警事件的ID。
         * @example `911273`
         */
        EventId: number;
        /**
         * 告警事件的危险等级。取值：
         * - **serious**：紧急。
         * - **suspicious**：可疑。
         * - **remind**：提醒。
         * @example `serious`
         */
        Level: string;
        /**
         * 告警事件名称（子类型）。
         * @example `恶意脚本代码执行`
         */
        EventName: string;
        /**
         * 最后一次发生的时间戳，单位为毫秒。
         * @example `1682046733628`
         */
        LastTimeStamp: number;
        /**
         * 异常事件的详情。
         */
        Details: {
            /**
             * 异常事件详情信息展示的方式。
             * 取值包括：
             * - **text**：文本方式
             * - **html**：富文本的方式
             * @example `html`
             */
            Type: string;
            /**
             * 告警事件显示名称。
             * @example `Trojan Path`
             */
            NameDisplay: string;
            /**
             * valueDisplay的展示类型。
             * 取值：
             * - **download_url**: 下载链接。
             * @example `download_url`
             */
            InfoType: string;
            /**
             * 异常事件的其他属性信息。
             * 例如：异常登录告警的登录时间或登录地点、告警的木马文件路径或木马类型等。
             * @example `getopt`
             */
            ValueDisplay: string;
        }[];
        /**
         * 实例名称。
         * @example `i-wz92q7m5hsbgfhdss***`
         */
        InstanceName: string;
        /**
         * 公网IP。
         * @example `172.16.XX.XX`
         */
        InternetIp: string;
        /**
         * 私网IP。
         * @example `10.42.XX.XX`
         */
        IntranetIp: string;
    }[];
}
