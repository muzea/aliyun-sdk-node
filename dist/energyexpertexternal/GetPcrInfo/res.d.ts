export interface GetPcrInfoResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `4A0AEC56-5C9A-5D47-93DF-7227836FFF82`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 报告创建时间戳，格式为毫秒时间戳。
         * @example `1709109790532`
         */
        createTime: string;
        /**
         * 报告名称。
         * @example `面包板-碳足迹报告2024-01-08 18:39:39.docx`
         */
        name: string;
        /**
         * 报告url。
         * @example `https://energy.aliyun.com`
         */
        url: string;
    };
}
