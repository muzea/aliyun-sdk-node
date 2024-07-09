export interface CreateInstanceRequest {
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例类型，目前仅支持Basic（基础型）。
         * @example `Basic`
         */
        Type: string;
    };
}
