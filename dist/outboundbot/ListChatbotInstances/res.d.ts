export interface ListChatbotInstancesResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 机器⼈列表信息
     */
    Bots: {
        /**
         * 机器⼈备注
         * @example `这是直播的描述`
         */
        Introduction: string;
        /**
         * 头像url
         * @example `https://ccrm.wengine.cn/ccrm/system/common/fileDownload/noToken?fileId=975cdeaa064846e3b6004abd9ba1d7c8`
         */
        Avatar: string;
        /**
         * 机器⼈的时区，参考《公共-时区码》
         * @example `Asia/Shanghai`
         */
        TimeZone: string;
        /**
         * 创建时间
         * @example `2022-01-18T02:36:00Z`
         */
        CreateTime: string;
        /**
         * 机器⼈服务的语⾔，如zh-cn、 en-us
         * @example `zh-cn`
         */
        LanguageCode: string;
        /**
         * 实例id
         * @example `e874fcf0-d2f4-4e62-9377-b6f35fe55210`
         */
        InstanceId: string;
        /**
         * 机器人名字
         * @example `智能回访2`
         */
        Name: string;
    }[];
    /**
     * 个数
     * @example `10`
     */
    PageSize: number;
    /**
     * 页号
     * @example `5`
     */
    PageNumber: number;
    /**
     * 总计个数
     * @example `100`
     */
    TotalCount: number;
}
