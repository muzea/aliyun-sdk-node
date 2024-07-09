export interface FinishProblemRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障Id
         * @example `3123`
         */
        problemId: number;
        /**
         * 幂等校验
         * @example `6338F42D-ED0B-442C-932C-657300AFB4BB`
         */
        clientToken: string;
    };
}
