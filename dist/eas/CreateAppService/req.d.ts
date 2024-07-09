export interface CreateAppServiceRequest {
    /**
     * 工作空间ID。
     * @example `12****`
     */
    "WorkspaceId"?: string;
    /**
     * 归属额度ID。
     * @example `abcdef`
     */
    "QuotaId"?: string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 服务名字。
         * @example `foo`
         */
        ServiceName: string;
        /**
         * 应用服务类型。
         * @example `LLM`
         */
        AppType: string;
        /**
         * 应用版本。
         * @example `v1`
         */
        AppVersion: string;
        /**
         * 服务规格。取值如下：
         * - llama_7b_fp16
         * - llama_7b_int8
         * - llama_13b_fp16
         * - llama_7b_int8
         * - chatglm_6b_fp16
         * - chatglm_6b_int8
         * - chatglm2_6b_fp16
         * - baichuan_7b_int8
         * - baichuan_13b_fp16
         * - baichuan_7b_fp16
         * @example `llama_7b_fp16`
         */
        ServiceSpec: string;
        /**
         * 实例数。
         * @example `1`
         */
        Replicas: number;
        /**
         * 部署时需要的其他配置信息。
         */
        Config: any;
    };
}
