export interface GetExperimentMetaRequest {
    /**
     * 故障演练ID。
     * @example `1234567890`
     */
    "ExperimentId": string;
    /**
     * 用户应用所在的命名空间（Namespace）。
     * @example `default`
     */
    "NameSpace"?: string;
}
