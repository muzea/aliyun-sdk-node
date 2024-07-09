export interface DescribeCdnConditionIPBInfoResponse {
    /**
     * 请求ID。
     * @example `2C4AA72D-8C00-1113-BD68-8BC4E3CF4FF6`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Datas: {
        /**
         * 配置值。
         * @example `"[{\"text\":\"阿鲁巴\",\"value\":\"AW\"}]"`
         */
        Value: string;
    }[];
}
