export interface DescribeDiagnosisSettingsResponse {
    /**
     * 请求ID。
     * @example `5E82B8A8-EED7-4557-A6E9-D1AD3E58****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 上次更新智能运维应用场景的时间戳。
         * @example `1588994035385`
         */
        updateTime: number;
        /**
         * 智能运维的应用场景。
         * @example `Business Search`
         */
        scene: string;
    };
}
