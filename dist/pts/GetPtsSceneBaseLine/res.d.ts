export interface GetPtsSceneBaseLineResponse {
    /**
     * 场景ID。
     * @example `NHG67BF`
     */
    SceneId: string;
    /**
     * 请求ID。
     * @example `4F7D2CE0-AE4C-4143-955A-8E4595AF86A6`
     */
    RequestId: string;
    /**
     * 错误提示信息，如成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 基线数据。
     */
    Baseline: {
        /**
         * 场景基线数据。
         */
        SceneBaseline: {
            /**
             * 业务失败数。
             * @example `1000`
             */
            FailCountBiz: number;
            /**
             * 业务成功率。
             * @example `0.1`
             */
            SuccessRateBiz: number;
            /**
             * 平均RT。
             * @example `10`
             */
            AvgRt: number;
            /**
             * 请求失败数。
             * @example `1000`
             */
            FailCountReq: number;
            /**
             * 平均TPS。
             * @example `1000`
             */
            AvgTps: number;
            /**
             * 99分位RT。
             * @example `10`
             */
            Seg99Rt: number;
            /**
             * 请求成功率。
             * @example `0.9`
             */
            SuccessRateReq: number;
            /**
             * 90分位RT。
             * @example `10`
             */
            Seg90Rt: number;
        };
        /**
         * 场景名。
         * @example `压测场景`
         */
        Name: string;
        /**
         * API的基线数据。
         */
        ApiBaselines: {
            /**
             * 业务失败数。
             * @example `100`
             */
            FailCountBiz: number;
            /**
             * 平均TPS。
             * @example `1000`
             */
            AvgTps: number;
            /**
             * 最小RT。
             * @example `8`
             */
            MinRt: number;
            /**
             * 99分位RT。
             * @example `50`
             */
            Seg99Rt: number;
            /**
             * 最大RT。
             * @example `50`
             */
            MaxRt: number;
            /**
             * 90分位RT。
             * @example `40`
             */
            Seg90Rt: number;
            /**
             * 业务成功率。
             * @example `0.1`
             */
            SuccessRateBiz: number;
            /**
             * 平均RT。
             * @example `10`
             */
            AvgRt: number;
            /**
             * 请求失败数。
             * @example `100`
             */
            FailCountReq: number;
            /**
             * API名称。
             * @example `下单API`
             */
            Name: string;
            /**
             * 请求成功率。
             * @example `0.9`
             */
            SuccessRateReq: number;
            /**
             * API的ID。
             * @example `76543`
             */
            Id: number;
        }[];
    };
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
