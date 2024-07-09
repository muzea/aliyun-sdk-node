export interface UpdateHpoExperimentRequest {
    /**
     * HPO实验id
     * @example `abcde`
     */
    "ExperimentId"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * HPO实验配置参数结构体
         */
        HpoExperimentConfiguration: any;
        /**
         * 实验描述。
         * @example `This is an AutoML HPO experiment.`
         */
        Description: string;
        /**
         * 工作空间可见度，取值如下。
         * - PRIVATE：在此工作空间中，仅对您和管理员可见。
         * - PUBLIC：在此工作空间中，对所有人可见。
         * @example `PRIVATE`
         */
        Accessibility: string;
        /**
         * 实验名称
         * @example `my experiment x`
         */
        Name: string;
        /**
         * 工作空间ID
         * @example `12345`
         */
        WorkspaceId: string;
    };
}
