export interface CheckExperimentRunnableRequest {
    /**
     * 演练ID。
     * @example `1234567890`
     */
    "ExperimentId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "NameSpace"?: string;
    /**
     * 所属Region，只有当Region为公网的时取值为public。
     * @example `public`
     */
    "AhasRegionId"?: string;
}
