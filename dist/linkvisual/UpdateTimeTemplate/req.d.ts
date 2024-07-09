export interface UpdateTimeTemplateRequest {
    /**
     * 时间区间列表。
     */
    "TimeSections"?: {
        /**
         * 每周的周几，取值范围0~6，表示周日~周六。
         * @example `0`
         */
        DayOfWeek: number;
        /**
         * 每天开始的时间，取值范围0~86399，单位为秒。
         * @example `20000`
         */
        Begin: number;
        /**
         * 每天结束的时间，取值范围1~86399，单位为秒。
         * @example `60000`
         */
        End: number;
    }[];
    /**
     * 时间模板ID。可调用[QueryTimeTemplate](~~107890~~)查询。
     * @example `fc82774fa749485bad7d719f9670****`
     */
    "TemplateId": string;
    /**
     * 时间模板名称。
     * 名称长度小于48个字符，可以包含英文字母、数字和特殊字符：短划线（-）、下划线（_）、at（@）、英文句号（.）、英文冒号（:）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 是否7天*24小时录像：
     * - 1：是。
     * - 0：否，详细配置请查看TimeSections.N.DayOfWeek、TimeSections.N.Begin和TimeSections.N.End参数。
     * @example `0`
     */
    "AllDay": number;
}
